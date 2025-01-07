                                            
function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
  
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let html = `<div class="swiper-slide">
                    <div class="calendar-content">
                        <div class="month-block-container">`
                html += `   <div class="month-name">
                                <div class="month">`+monthNames[month]+`</div>
                                <div class="year">`+year+`</div>
                            </div>
                            <div class="month-block-content">
                                <div class="week-days">
                                    <div class="week-day">Mo</div>
                                    <div class="week-day">Tu</div>
                                    <div class="week-day">We</div>
                                    <div class="week-day">Th</div>
                                    <div class="week-day">Fr</div>
                                    <div class="week-day">Sa</div>
                                    <div class="week-day">Su</div>
                                </div>
                                <div class="month-grid">`;
                                for (let i = 0; i < startingDay; i++) {
                                    html +=`<button class="day-item">
                                    <p class="day-number">&nbsp;</p>
                                    <p class="day-price">&nbsp;</p>
                                 </button>`
                                }
                                let day = 1;
                                while (day <= daysInMonth) {
                                    html += `<button class="day-item" onclick="selectDate('`+year+'-'+(month+1)+'-'+day+`')"  id="dayItem`+year+'-'+(month+1)+'-'+day+`">
                                        <p class="day-number">`+day+`</p>   
                                        <p class="day-price">`+calData[month].days[day-1].price+`</p>
                                     </button>`;
                                     day++;
                                  }
                            html += `</div>`;
                    html += `</div>`;
                html += `</div>`;
            html += `</div>`;   
        html += `</div>`;
    return html;
  }
  // Display current month's calendar
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  var finalHTML="";

  selected_startDate = null;
  selected_endDate = null;

  for (let index = 0; index < 12; index++) {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth()+index);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    var monthCal = generateCalendar(currentYear, currentMonth);
    finalHTML += monthCal; 
  }

  function selectDate(id){
    var date = new Date(id);
    var visualDate = id.split("-");
    if(selected_startDate == null){
        selected_startDate = date;
        document.getElementById('cal').innerHTML = (selected_startDate.getDate())+"/"+(selected_startDate.getMonth()+1) +" - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        document.getElementById('departure-date-recap').innerHTML = visualDate[2] + "/" + visualDate[1] + "/" + visualDate[0];
        document.getElementById('dayItem'+id).classList.add("selected_dates_start")
    } else {
        clearCalendar();
        selected_endDate = date;
        document.getElementById('cal').innerHTML = (selected_startDate.getDate())+"/"+(selected_startDate.getMonth()+1) +" - " + (selected_endDate.getDate())+"/"+(selected_endDate.getMonth()+1);
        document.getElementById('return-date-recap').innerHTML = visualDate[2] + "/" + visualDate[1] + "/" + visualDate[0];
        document.getElementById('dayItem'+id).classList.add("selected_dates_end");
        var listIDs = getListIdsBetweenDates();
        for (const ids of listIDs) {
            document.getElementById('dayItem'+ids).classList.add("selected_dates_inbetween")
        }
    }
  }

  function clearCalendar(){
    if(selected_endDate){
        var oldId = selected_endDate.getFullYear()+"-"+(selected_endDate.getMonth()+1)+"-"+selected_endDate.getDate();
        document.getElementById('dayItem'+oldId).classList.remove("selected_dates_end")
        var listIDs = getListIdsBetweenDates();
        for (const ids of listIDs) {
            document.getElementById('dayItem'+ids).classList.remove("selected_dates_inbetween")
        }
    }
}

  function getListIdsBetweenDates(){
    const dates = [];
    const currentDate = new Date(selected_startDate)
    currentDate.setDate(currentDate.getDate() + 1);
    const endDate = new Date(selected_endDate)
   // endDate.setDate(endDate.getDate() - 1);
  
    while (currentDate < endDate) {
      const year = currentDate.getFullYear();
      const month = ((currentDate.getMonth()+1));
      const day = (currentDate.getDate());
      
      dates.push(`${year}-${month}-${day}`);
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return dates;
  }
  
  document.getElementById('calendar').innerHTML = finalHTML;



/*
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const calendarContent = document.getElementById('calendar-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const departureRecap = document.getElementById('departure-date-recap');
const returnRecap = document.getElementById('return-date-recap');

let selectedDates = [];

function generateCalendar() {
    for (let i = 0; i < months.length; i++) {
        const monthBlockContainer = document.createElement('div');
        monthBlockContainer.id = 'month-block-container';

        const monthNameContainer = document.createElement('div');
        monthNameContainer.id = 'month-name';
        monthNameContainer.innerHTML = `
            <div id="month">${months[i]}</div>
            <div id="year">2024</div>
        `;

        const monthBlockContent = document.createElement('div');
        monthBlockContent.id = 'month-block-content';

        const weekDays = document.createElement('div');
        weekDays.id = 'week-days';
        const weekDaysAbbrev = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
        weekDaysAbbrev.forEach(day => {
            const weekDay = document.createElement('div');
            weekDay.classList.add('week-day');
            weekDay.textContent = day;
            weekDays.appendChild(weekDay);
        });

        const monthGrid = document.createElement('div');
        monthGrid.id = 'month-grid';

        for (let j = 1; j <= 30; j++) {
            const dayItem = document.createElement('button');
            dayItem.id = 'day-item';
            dayItem.innerHTML = `
                <p id="day-number">${j}</p>
                <p id="day-price">${getRandomPrice()}$</p>
            `;
            dayItem.addEventListener('click', () => selectDay(dayItem));
            monthGrid.appendChild(dayItem);
        }

        monthBlockContent.appendChild(weekDays);
        monthBlockContent.appendChild(monthGrid);

        monthBlockContainer.appendChild(monthNameContainer);
        monthBlockContainer.appendChild(monthBlockContent);

        calendarContent.appendChild(monthBlockContainer);
    }
}

function getRandomPrice() {
    return Math.floor(Math.random() * 500) + 100; // Adjust the range as needed
}

function selectDay(dayElement) {
    if (selectedDates.length < 2) {
        dayElement.classList.add('selected');
        selectedDates.push(dayElement.querySelector('#day-number').textContent);

        if (selectedDates.length === 1) {
            departureRecap.textContent = `Departure Date: ${selectedDates[0]}`;
        } else {
            returnRecap.textContent = `Return Date: ${selectedDates[1]}`;
            highlightDateRange();
        }
    } else {
        resetSelection();
        selectDay(dayElement);
    }
}

function highlightDateRange() {
    const days = document.querySelectorAll('#day-item');
    const startIdx = parseInt(selectedDates[0]) - 1;
    const endIdx = parseInt(selectedDates[1]) - 1;

    for (let i = startIdx; i <= endIdx; i++) {
        days[i].classList.add('selected');
    }
}

function resetSelection() {
    const selectedDays = document.querySelectorAll('#day-item.selected');
    selectedDays.forEach(day => day.classList.remove('selected'));
    selectedDates = [];
    departureRecap.textContent = '';
    returnRecap.textContent = '';
}

function handlePrevNextClick(isNext) {
    const currentMonthContainer = document.getElementById('month-block-container');
    const allMonthContainers = document.querySelectorAll('#month-block-container');
    const currentIndex = Array.from(allMonthContainers).indexOf(currentMonthContainer);

    const nextIndex = isNext ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex >= 0 && nextIndex < allMonthContainers.length) {
        currentMonthContainer.classList.remove('month-block-container');
        allMonthContainers[nextIndex].classList.add('month-block-container');
    }
}

prevBtn.addEventListener('click', () => handlePrevNextClick(false));
nextBtn.addEventListener('click', () => handlePrevNextClick(true));

generateCalendar();

*/
