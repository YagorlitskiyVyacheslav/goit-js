const fontSizeControlRef = document.querySelector("#font-size-control");
const spanTextRef = document.querySelector("#text");

const changeFontSize = () => spanTextRef.style.fontSize = `${fontSizeControlRef.value}px`; 

fontSizeControlRef.addEventListener('input', changeFontSize);