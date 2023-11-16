document.querySelector("input").addEventListener('click', function() {
    const checkbox = document.querySelector("input");
    const body = document.body;

    if (checkbox.checked) {
        // Dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        document.querySelector("label").innerText = "Dark Mood Off" 
    } else {
        // Lite mode
        body.style.backgroundColor = "white";
        body.style.color = "black"; 
        document.querySelector("label").innerText = "Dark Mood On" 
    }
});

