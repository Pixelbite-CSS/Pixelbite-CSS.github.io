let element = document.getElementById('animate');

let texts = [
    "easier",
    "productive",
    "resourceful",
    "structured",
    "intuitive",
    "customizable",
    "slick",
    "consistent",
    "modular",
    "effortless",
    "responsive",
    "user-friendly",
    "versatile"
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const animate = async (texts) => {
    for (let i = 0; i < texts.length; i++) {
        let currentWord = texts[i];

        // Delete letters one by one
        for (let j = currentWord.length; j >= 0; j--) {
            element.textContent = currentWord.substring(0, j);
            await sleep(30); // Adjust the delay as needed for smoother deletion
        }

        // Show the next word
        for (let k = 0; k <= texts[(i + 1) % texts.length].length; k++) {
            element.textContent = texts[(i + 1) % texts.length].substring(0, k);
            await sleep(30); // Adjust the delay as needed for smoother appearance
        }

        await sleep(4000); // Adjust the pause between words
    }

    // Repeat the animation
    animate(texts);
};

// Start the animation
animate(texts);
