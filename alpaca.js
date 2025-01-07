window.addEventListener('load', (event) => {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', './destinations/lisbon.json', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        
        
        // ============
        // ============
        // PLACEHOLDERS IDs


        var mainTitle = document.getElementById("main-title");
        var mainTitle2 = document.getElementById("main-title-second");
        var bestDeals = document.getElementById("best-deals");
        var from  = document.getElementById("from");
        var top3 = document.getElementById("top3");
        var makeSure = document.getElementById("makesure");
        var videosTitle = document.getElementById("videostitle");
        var videosTitle2 = document.getElementById("videostitle2");
        var allYouWant = document.getElementById("allyouwant");
        var weatherTitle = document.getElementById("weathertitle");
        var weatherSub = document.getElementById("weathersub");
        var travelGuide = document.getElementById("travelguide-title");
        var travelSub = document.getElementById("travelsub");
        var poiTitle = document.getElementById("poititle");
        var fd = document.getElementById("fd");
        var events = document.getElementById("events");
        var help = document.getElementById("help");
        var helpSub = document.getElementById("helpsub");


        // DESTINATION GENERIC
        var destinationPicture = document.getElementById('landing-container');
        var destinationPrice = document.getElementById('destination-lowest-price');
        var destinationSubtitle = document.getElementById('destination-subtitle');
        var destinationDescription = document.getElementById('destination-description');
        var destinationName = document.getElementsByClassName('destination-name');

        // HISTOGRAM
        var month1 = document.getElementById('month1');
        var month2 = document.getElementById('month2');
        var month3 = document.getElementById('month3');
        var month4 = document.getElementById('month4');
        var month5 = document.getElementById('month5');
        var month6 = document.getElementById('month6');
        var month7 = document.getElementById('month7');
        var month8 = document.getElementById('month8');
        var month9 = document.getElementById('month9');
        var month10 = document.getElementById('month10');
        var month11 = document.getElementById('month11');
        var month12 = document.getElementById('month12');

        var month1label = document.getElementById('month1label');
        var month2label = document.getElementById('month2label');
        var month3label = document.getElementById('month3label');
        var month4label = document.getElementById('month4label');
        var month5label = document.getElementById('month5label');
        var month6label = document.getElementById('month6label');
        var month7label = document.getElementById('month7label');
        var month8label = document.getElementById('month8label');
        var month9label = document.getElementById('month9label');
        var month10label = document.getElementById('month10label');
        var month11label = document.getElementById('month11label');
        var month12label = document.getElementById('month12label');

        // ATTRACTION1 card
        var attraction1title = document.getElementById("attraction1title");
        var attraction1content = document.getElementById("attraction1content");
        var attraction1image = document.getElementById("attraction1image");

        // ATTRACTION2 card
        var attraction2title = document.getElementById("attraction2title");
        var attraction2content = document.getElementById("attraction2content");
        var attraction2image = document.getElementById("attraction2image");

        // ATTRACTION3 card
        var attraction3title = document.getElementById("attraction3title");
        var attraction3content = document.getElementById("attraction3content");
        var attraction3image = document.getElementById("attraction3image");

        // VIDEOS
        var video1 = document.getElementById("video1");
        var video2 = document.getElementById("video2");
        var video3 = document.getElementById("video3");
        var video4 = document.getElementById("video4");

        // CONTENT SECTION
        var destinationContentImage = document.getElementById("destination-content-image");
        var destinationLead = document.getElementById("destination-lead");


        // TRAVELGUIDE
        var poi1title = document.getElementById("poi1title");
        var poi1description = document.getElementById("poi1description");
        var poi2title = document.getElementById("poi2title");
        var poi2description = document.getElementById("poi2description");
        var poi3title = document.getElementById("poi3title");
        var poi3description = document.getElementById("poi3description");

        var food1title = document.getElementById("food1title");
        var food1description = document.getElementById("food1description");
        var food2title = document.getElementById("food2title");
        var food2description = document.getElementById("food2description");
        var food3title = document.getElementById("food3title");
        var food3description = document.getElementById("food3description");

        var event1title = document.getElementById("event1title");
        var event1description = document.getElementById("event1description");
        var event2title = document.getElementById("event2title");
        var event2description = document.getElementById("event2description");
        var event3title = document.getElementById("event3title");
        var event3description = document.getElementById("event3description");

        // HOTEL - CAR - EVENT
        var hotel = document.getElementById("hotel");
        var car = document.getElementById("car");
        var event = document.getElementById("event");

        // ==============
        // ==============    

        // JSON MAPPING
        
            // Destination basics
            destinationPicture.style.background = jsonData.destinationPicture;
            destinationPicture.style.backgroundSize = "cover";
            destinationPicture.style.backgroundPosition = "center";
            destinationPrice.textContent = jsonData.destinationLowestPrice;
            destinationSubtitle.textContent = jsonData.destinationSubtitle;
            destinationDescription.textContent = jsonData.destinationDescription;
                // Set destinationName for each element
                for (var i = 0; i < destinationName.length; i++) {
                    destinationName[i].textContent = jsonData.destinationName;
                }

            // Histogram
            // month1.textContent = jsonData.month1;
            // month2.textContent = jsonData.month2;
            // month3.textContent = jsonData.month3;
            // month4.textContent = jsonData.month4;
            // month5.textContent = jsonData.month5;
            // month6.textContent = jsonData.month6;
            // month7.textContent = jsonData.month7;
            // month8.textContent = jsonData.month8;
            // month9.textContent = jsonData.month9;
            // month10.textContent = jsonData.month10;
            // month11.textContent = jsonData.month11;
            // month12.textContent = jsonData.month12;

            month1label.textContent = jsonData.month1label;
            month2label.textContent = jsonData.month2label;
            month3label.textContent = jsonData.month3label;
            month4label.textContent = jsonData.month4label;
            month5label.textContent = jsonData.month5label;
            month6label.textContent = jsonData.month6label;
            month7label.textContent = jsonData.month7label;
            month8label.textContent = jsonData.month8label;
            month9label.textContent = jsonData.month9label;
            month10label.textContent = jsonData.month10label;
            month11label.textContent = jsonData.month11label;
            month12label.textContent = jsonData.month12label;

            
            // Attractions
            // Attraction1
            attraction1title.textContent = jsonData.attraction1title;
            attraction1content.textContent = jsonData.attraction1content;
            attraction1image.src = jsonData.attraction1image;
            // Attraction2
            attraction2title.textContent = jsonData.attraction2title;
            attraction2content.textContent = jsonData.attraction2content;
            attraction2image.src = jsonData.attraction2image;
            // Attraction3
            attraction3title.textContent = jsonData.attraction3title;
            attraction3content.textContent = jsonData.attraction3content;
            attraction3image.src = jsonData.attraction3image;

            // Videos
            video1.src = jsonData.video1;
            video2.src = jsonData.video2;
            video3.src = jsonData.video3;
            video4.src = jsonData.video4;

            // Content section
            destinationContentImage.src = jsonData.destinationContentImage;
            destinationLead.textContent = jsonData.destinationLead;

            // Partners - Hotel, Car, Events
            hotel.textContent = jsonData.hotel;
            car.textContent = jsonData.car;
            event.textContent = jsonData.event;

            // Travelguide
            poi1title.textContent = jsonData.poi1title;
            poi1description.textContent = jsonData.poi1description;
            poi2title.textContent = jsonData.poi2title;
            poi2description.textContent = jsonData.poi2description;
            poi3title.textContent = jsonData.poi3title;
            poi3description.textContent = jsonData.poi3description;

            food1title.textContent = jsonData.food1title;
            food1description.textContent = jsonData.food1description;
            food2title.textContent = jsonData.food2title;
            food2description.textContent = jsonData.food2description;
            food3title.textContent = jsonData.food3title;
            food3description.textContent = jsonData.food3description;

            event1title.textContent = jsonData.event1title;
            event1description.textContent = jsonData.event1description;
            event2title.textContent = jsonData.event2title;
            event2description.textContent = jsonData.event2description;
            event3title.textContent = jsonData.event3title;
            event3description.textContent = jsonData.event3description;


            mainTitle.textContent = jsonData.mainTitle;
            mainTitle2.textContent = jsonData.mainTitleSecond;
            bestDeals.textContent = jsonData.bestDeals;
            from.textContent = jsonData.from;
            top3.textContent = jsonData.top3;
            makeSure.textContent = jsonData.makesure;
            videosTitle.textContent = jsonData.videostitle;
            videosTitle2.textContent = jsonData.videostitle2;
            allYouWant.textContent = jsonData.allyouwant;
            weatherTitle.textContent = jsonData.weathertitle;
            weatherSub.textContent = jsonData.weathersub;
            travelGuide.textContent = jsonData.travelguide;
            travelSub.textContent = jsonData.travelsub;
            poiTitle.textContent = jsonData.poititle;
            fd.textContent = jsonData.fd;
            events.textContent = jsonData.events;
            help.textContent = jsonData.help;
            helpSub.textContent = jsonData.helpsub;

        }
    };
    xhr.send();

    function generateRandomPrices() {
        var prices = [];
        var minHeight = 150; // Minimum height for .date-content div
        var maxHeight = 200; // Maximum height for .date-content div
      
        for (var i = 1; i <= 12; i++) {
          var price = Math.floor(Math.random() * 301) + 400; // Generate random price between 400 and 700
          prices.push(price);
          var priceElement = document.getElementById('month' + i);
          var dateContentElement = document.getElementById('datecontent' + i);
      
          if (priceElement && dateContentElement) {
            priceElement.textContent = '$' + price;
            var height = calculateHeight(price, minHeight, maxHeight);
            dateContentElement.style.setProperty('height', height + 'px');
          }
        }
      
        return prices;
      }
      
      function calculateHeight(price, minHeight, maxHeight) {
        var priceRange = 300; // Price range (700 - 400)
        var priceRatio = (price - 400) / priceRange; // Calculate the ratio of price within the range
        var height = minHeight + Math.round(priceRatio * (maxHeight - minHeight)); // Calculate the adjusted height
      
        return height;
      }
      
      // Call the generateRandomPrices function to generate random prices, display them, and set the height as a CSS property
      generateRandomPrices();
      

});

// DYNAMICALLY LOAD A DESTINATION
function handleSearch(event) {
    if (event.key === 'Enter') {
      var searchRequest = document.getElementById('searchDest').value;
      console.log('Search request:', searchRequest);

      var xhr = new XMLHttpRequest();
        xhr.open('GET', './destinations/' + searchRequest + '.json', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
            var jsonData = JSON.parse(xhr.responseText);

            // PLACEHOLDERS IDs

            var mainTitle = document.getElementById("main-title");
            var mainTitle2 = document.getElementById("main-title-second");
            var bestDeals = document.getElementById("best-deals");
            var from  = document.getElementById("from");
            var top3 = document.getElementById("top3");
            var makeSure = document.getElementById("makesure");
            var videosTitle = document.getElementById("videostitle");
            var videosTitle2 = document.getElementById("videostitle2");
            var allYouWant = document.getElementById("allyouwant");
            var weatherTitle = document.getElementById("weathertitle");
            var weatherSub = document.getElementById("weathersub");
            var travelGuide = document.getElementById("travelguide-title");
            var travelSub = document.getElementById("travelsub");
            var poiTitle = document.getElementById("poititle");
            var fd = document.getElementById("fd");
            var events = document.getElementById("events");
            var help = document.getElementById("help");
            var helpSub = document.getElementById("helpsub");

            mainTitle.textContent = jsonData.mainTitle;
            mainTitle2.textContent = jsonData.mainTitleSecond;
            bestDeals.textContent = jsonData.bestDeals;
            from.textContent = jsonData.from;
            top3.textContent = jsonData.top3;
            makeSure.textContent = jsonData.makesure;
            videosTitle.textContent = jsonData.videostitle;
            videosTitle2.textContent = jsonData.videostitle2;
            allYouWant.textContent = jsonData.allyouwant;
            weatherTitle.textContent = jsonData.weathertitle;
            weatherSub.textContent = jsonData.weathersub;
            travelGuide.textContent = jsonData.travelguide;
            travelSub.textContent = jsonData.travelsub;
            poiTitle.textContent = jsonData.poititle;
            fd.textContent = jsonData.fd;
            events.textContent = jsonData.events;
            help.textContent = jsonData.help;
            helpSub.textContent = jsonData.helpsub;



            // DESTINATION GENERIC
            var destinationPicture = document.getElementById('landing-container');
            var destinationPrice = document.getElementById('destination-lowest-price');
            var destinationSubtitle = document.getElementById('destination-subtitle');
            var destinationDescription = document.getElementById('destination-description');
            var destinationName = document.getElementsByClassName('destination-name');

            // HISTOGRAM
            var month1 = document.getElementById('month1');
            var month2 = document.getElementById('month2');
            var month3 = document.getElementById('month3');
            var month4 = document.getElementById('month4');
            var month5 = document.getElementById('month5');
            var month6 = document.getElementById('month6');
            var month7 = document.getElementById('month7');
            var month8 = document.getElementById('month8');
            var month9 = document.getElementById('month9');
            var month10 = document.getElementById('month10');
            var month11 = document.getElementById('month11');
            var month12 = document.getElementById('month12');

            var month1label = document.getElementById('month1label');
            var month2label = document.getElementById('month2label');
            var month3label = document.getElementById('month3label');
            var month4label = document.getElementById('month4label');
            var month5label = document.getElementById('month5label');
            var month6label = document.getElementById('month6label');
            var month7label = document.getElementById('month7label');
            var month8label = document.getElementById('month8label');
            var month9label = document.getElementById('month9label');
            var month10label = document.getElementById('month10label');
            var month11label = document.getElementById('month11label');
            var month12label = document.getElementById('month12label');

            // ATTRACTION1 card
            var attraction1title = document.getElementById("attraction1title");
            var attraction1content = document.getElementById("attraction1content");
            var attraction1image = document.getElementById("attraction1image");

            // ATTRACTION2 card
            var attraction2title = document.getElementById("attraction2title");
            var attraction2content = document.getElementById("attraction2content");
            var attraction2image = document.getElementById("attraction2image");

            // ATTRACTION3 card
            var attraction3title = document.getElementById("attraction3title");
            var attraction3content = document.getElementById("attraction3content");
            var attraction3image = document.getElementById("attraction3image");

            // VIDEOS
            var video1 = document.getElementById("video1");
            var video2 = document.getElementById("video2");
            var video3 = document.getElementById("video3");
            var video4 = document.getElementById("video4");

            // CONTENT SECTION
            var destinationContentImage = document.getElementById("destination-content-image");
            var destinationLead = document.getElementById("destination-lead");


            // TRAVELGUIDE
            var poi1title = document.getElementById("poi1title");
            var poi1description = document.getElementById("poi1description");
            var poi2title = document.getElementById("poi2title");
            var poi2description = document.getElementById("poi2description");
            var poi3title = document.getElementById("poi3title");
            var poi3description = document.getElementById("poi3description");

            var food1title = document.getElementById("food1title");
            var food1description = document.getElementById("food1description");
            var food2title = document.getElementById("food2title");
            var food2description = document.getElementById("food2description");
            var food3title = document.getElementById("food3title");
            var food3description = document.getElementById("food3description");

            var event1title = document.getElementById("event1title");
            var event1description = document.getElementById("event1description");
            var event2title = document.getElementById("event2title");
            var event2description = document.getElementById("event2description");
            var event3title = document.getElementById("event3title");
            var event3description = document.getElementById("event3description");

            // HOTEL - CAR - EVENT
            var hotel = document.getElementById("hotel");
            var car = document.getElementById("car");
            var event = document.getElementById("event");

            // ==============
            // ==============    

            // JSON MAPPING
            
                // Destination basics
                destinationPicture.style.background = jsonData.destinationPicture;
                destinationPicture.style.backgroundSize = "cover";
                destinationPicture.style.backgroundPosition = "center";
                destinationPrice.textContent = jsonData.destinationLowestPrice;
                destinationSubtitle.textContent = jsonData.destinationSubtitle;
                destinationDescription.textContent = jsonData.destinationDescription;
                    // Set destinationName for each element
                    for (var i = 0; i < destinationName.length; i++) {
                        destinationName[i].textContent = jsonData.destinationName;
                    }

                // Histogram
                // month1.textContent = jsonData.month1;
                // month2.textContent = jsonData.month2;
                // month3.textContent = jsonData.month3;
                // month4.textContent = jsonData.month4;
                // month5.textContent = jsonData.month5;
                // month6.textContent = jsonData.month6;
                // month7.textContent = jsonData.month7;
                // month8.textContent = jsonData.month8;
                // month9.textContent = jsonData.month9;
                // month10.textContent = jsonData.month10;
                // month11.textContent = jsonData.month11;
                // month12.textContent = jsonData.month12;

                month1label.textContent = jsonData.month1label;
                month2label.textContent = jsonData.month2label;
                month3label.textContent = jsonData.month3label;
                month4label.textContent = jsonData.month4label;
                month5label.textContent = jsonData.month5label;
                month6label.textContent = jsonData.month6label;
                month7label.textContent = jsonData.month7label;
                month8label.textContent = jsonData.month8label;
                month9label.textContent = jsonData.month9label;
                month10label.textContent = jsonData.month10label;
                month11label.textContent = jsonData.month11label;
                month12label.textContent = jsonData.month12label;

                
                // Attractions
                // Attraction1
                attraction1title.textContent = jsonData.attraction1title;
                attraction1content.textContent = jsonData.attraction1content;
                attraction1image.src = jsonData.attraction1image;
                // Attraction2
                attraction2title.textContent = jsonData.attraction2title;
                attraction2content.textContent = jsonData.attraction2content;
                attraction2image.src = jsonData.attraction2image;
                // Attraction3
                attraction3title.textContent = jsonData.attraction3title;
                attraction3content.textContent = jsonData.attraction3content;
                attraction3image.src = jsonData.attraction3image;

                // Videos
                video1.src = jsonData.video1;
                video2.src = jsonData.video2;
                video3.src = jsonData.video3;
                video4.src = jsonData.video4;

                // Content section
                destinationContentImage.src = jsonData.destinationContentImage;
                destinationLead.textContent = jsonData.destinationLead;

                // Partners - Hotel, Car, Events
                hotel.textContent = jsonData.hotel;
                car.textContent = jsonData.car;
                event.textContent = jsonData.event;

                // Travelguide
                poi1title.textContent = jsonData.poi1title;
                poi1description.textContent = jsonData.poi1description;
                poi2title.textContent = jsonData.poi2title;
                poi2description.textContent = jsonData.poi2description;
                poi3title.textContent = jsonData.poi3title;
                poi3description.textContent = jsonData.poi3description;

                food1title.textContent = jsonData.food1title;
                food1description.textContent = jsonData.food1description;
                food2title.textContent = jsonData.food2title;
                food2description.textContent = jsonData.food2description;
                food3title.textContent = jsonData.food3title;
                food3description.textContent = jsonData.food3description;

                event1title.textContent = jsonData.event1title;
                event1description.textContent = jsonData.event1description;
                event2title.textContent = jsonData.event2title;
                event2description.textContent = jsonData.event2description;
                event3title.textContent = jsonData.event3title;
                event3description.textContent = jsonData.event3description;
            }
        };
        xhr.send();

        function generateRandomPrices() {
            var prices = [];
            var minHeight = 150; // Minimum height for .date-content div
            var maxHeight = 200; // Maximum height for .date-content div
          
            for (var i = 1; i <= 12; i++) {
              var price = Math.floor(Math.random() * 301) + 400; // Generate random price between 400 and 700
              prices.push(price);
              var priceElement = document.getElementById('month' + i);
              var dateContentElement = document.getElementById('datecontent' + i);
          
              if (priceElement && dateContentElement) {
                priceElement.textContent = '$' + price;
                var height = calculateHeight(price, minHeight, maxHeight);
                dateContentElement.style.setProperty('height', height + 'px');
              }
            }
          
            return prices;
          }
          
          function calculateHeight(price, minHeight, maxHeight) {
            var priceRange = 300; // Price range (700 - 400)
            var priceRatio = (price - 400) / priceRange; // Calculate the ratio of price within the range
            var height = minHeight + Math.round(priceRatio * (maxHeight - minHeight)); // Calculate the adjusted height
          
            return height;
          }
          
          // Call the generateRandomPrices function to generate random prices, display them, and set the height as a CSS property
          generateRandomPrices();
    }
  }
