function appendToDisplay(Value){
    const display =document.getElementById("display")
    display.value += Value;
}
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value); 
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}