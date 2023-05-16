function getBotResponse(input) {
    input = input.toLowerCase();
    if (input === "go home page") {
        window.location.href = "index.html";
    } 
    else if (input === "materials") {
        window.location.href = "materials.html";
    } 
    
    else if (input === "team") {
        window.location.href = "team.html";
    } 
    
    else if (input === "courses") {
        window.location.href = "courses.html";
    } 
    else if (input === "contact") {
        window.location.href = "contact.html";
    } 
    else if (input === "blogs") {
        window.location.href = "blogs.html";
    } 
    else if (input === "selections") {
        window.location.href = "selections.html";
    } 
    else {
        alert("Sorry, I didn't understand your command.");
    }
    

    // Simple responses
    if (input == "hi") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}