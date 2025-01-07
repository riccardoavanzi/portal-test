const newsItems = document.querySelectorAll('.fade-item');
let currentIndex = 0;

function showNewsItem(index) {
    // Hide all news items
    newsItems.forEach(item => {
        item.style.opacity = 0;
    });

    // Show the current news item
    if (index < newsItems.length) {
        newsItems[index].style.opacity = 1;
        setTimeout(() => {
            newsItems[index].style.opacity = 0;
            showNewsItem(index + 1);
        }, 5000); // Adjust the timeout to control the display duration (milliseconds)
    } else {
        currentIndex = 0;
        showNewsItem(currentIndex);
    }
}

showNewsItem(currentIndex);
