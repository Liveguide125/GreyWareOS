function InputThing() {
    var inputElement = document.getElementById('Input');
    var inputValue = inputElement.value;

    // Check if the input value is not empty before opening the new window
    if (inputValue.trim() !== '') {
        window.open('https://www.google.com/search?q=' + inputValue, '_blank');
    }
    if (inputValue == "1v1.lol")
    {
        window.location.href = "1v1.html";
    }
}
