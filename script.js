const generateBtn = document.getElementById("generate"),
	copyBtn = document.getElementById("copy-btn"),
	outputColor = document.getElementById("output-color"),
	outputCode = document.getElementById("output-code");
	hexString = "0123456789abcdef";

let randomColor = ()=>{
    let hexCode = "#";
    for( i = 0; i < 6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}
let generateGrad = ()=>{
    let colorOne = randomColor(),
		colorTwo = randomColor(),
		angle = Math.floor(Math.random() * 360);
	outputColor.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
    outputCode.value = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
}

copyBtn.addEventListener("click", (event)=>{
	copyBtn.innerText = "Copied! 🥳";
	setTimeout(function(){
		copyBtn.innerText = "Copy";},
		1200);
    outputCode.select();
	document.execCommand("copy");
	textarea.value = style;
	document.execCommand('copy-btn', input.select());
	copyButton.innerText = 'Copied';
	setTimeout(()=>{
    copyBtnButton.innerText = 'Copy';
  }, 400);
});

generateBtn.addEventListener("click", generateGrad);
window.onload = generateGrad;
