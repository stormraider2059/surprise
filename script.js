document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const quizScreen = document.querySelector('.quiz-screen');
    const surpriseScreen = document.querySelector('.surprise-screen');
    const roseGarden = document.querySelector('.rose-garden');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const surpriseButton = document.getElementById('surpriseButton');
    const memoriesButton = document.getElementById('memoriesButton');
    const container = document.getElementById('conto');

    // Function to show the preloader
    function showPreloader() {
        welcomeScreen.style.display = 'block';
        container.style.display = 'none';
    }

    // Function to show the quiz screen and hide the preloader after a certain delay
    function showQuizScreen() {
        welcomeScreen.style.display = 'none';
        container.style.display = 'block';
        quizScreen.style.display = 'block';
    }

    // Show the preloader initially and set a timeout to hide it and show the quiz screen
    showPreloader();
    setTimeout(showQuizScreen, 3000);

    // Event listener for the Yes button to show the surprise screen
    yesButton.addEventListener('click', function() {
        quizScreen.style.display = 'none';
        surpriseScreen.style.display = 'block';
    });

    // Array of messages for the No button
    const messages = [
        "Nice try, now click on yes",
        "No way you clicked it again",
        "Just click Yes my love",
        "Common babe don't try again",
        "Alright enough",
        "Alright I'm disabled"
    ];

    let messageIndex = 0;

    // Event listener for the No button to display different messages
    noButton.addEventListener('click', function() {
        if (messageIndex < messages.length) {
            noButton.textContent = messages[messageIndex];
            messageIndex++;
            // Check if the previous message was "Alright enough" and disable the button
            if (noButton.textContent === "Alright enough") {
                noButton.disabled = true;
                noButton.style.backgroundColor = '#ddd'; // Inactive color shade
            }
        }
    });

    // Event listener for the Surprise button to show the rose garden and scroll into view
    surpriseButton.addEventListener('click', function() {
        surpriseScreen.style.display = 'none';
        roseGarden.style.display = 'block';
        setTimeout(function() {
            // Check if the viewport width is less than 768px (tablet/mobile)
            if (window.innerWidth < 768) {
                // Scroll to the top of the rose garden container
                roseGarden.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                // Scroll to the rose garden heading for larger screens
                roseGarden.querySelector('h1').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 1000);
    });

    // Event listener for the Memories button to redirect to the memories page
    memoriesButton.addEventListener('click', function() {
        // Redirect to another page with image slider
        window.location.href = 'memories.html';
    });

    // Event listener for window resize to adjust scrolling behavior
    window.addEventListener('resize', function() {
        // If the rose garden is visible and viewport width is less than 768px (tablet/mobile)
        if (roseGarden.style.display === 'block' && window.innerWidth < 768) {
            // Scroll to the top of the rose garden container
            roseGarden.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
