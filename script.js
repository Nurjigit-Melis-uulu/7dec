let yourName = document.querySelector('#your-name');
let headingColor = document.querySelector('#heading-color');
let helloHeading = document.querySelector('h1');
let sizeHeading = document.querySelector('#size');
let underline = document.querySelector('#underline');
let align = document.querySelector('#align');
let italic = document.querySelector('#italic');
let notBold = document.querySelector('#notbold');
let border = document.querySelector('#border');
let borderRadius = document.querySelector('#borderRadius');
let block = document.querySelector('#block');
let colorBackground = document.querySelector('#Background');
let fontFamily = document.querySelector('#font-family');

yourName.addEventListener('change', function() {
	helloHeading.innerText = "Hello " + yourName.value + "!";
});

headingColor.addEventListener('change', function() {
	helloHeading.style.color = headingColor.value;
});

sizeHeading.addEventListener('change', function() {
	helloHeading.style.fontSize = sizeHeading.value + 'px'; 
});

underline.addEventListener('change', function() {
	if (this.checked == true) {
		helloHeading.style.textDecoration = "underline";
	}
	else {
		helloHeading.style.textDecoration = "";
	}
})

align.addEventListener('change', function() {
	helloHeading.style.textAlign = this.value;
});

italic.addEventListener('change', function() {
	if (this.checked == true) {
		helloHeading.style.fontStyle = "italic";
	}
	else {
		helloHeading.style.fontStyle = "";
	}
});

notBold.addEventListener('change', function() {
	if (this.checked == true) {
		helloHeading.style.fontWeight = "lighter";
	}
	else {
		helloHeading.style.fontWeight = "";
	}
});

border.addEventListener('change', function() {
	block.style.borderWeight = border.value + "px";
	block.style.borderStyle = "solid";
	block.style.borderColor = "#000000"
});

borderRadius.addEventListener('change', function() {
	block.style.borderRadius = this.value + "px";
});

colorBackground.addEventListener('change', function() {
	block.style.backgroundColor = colorBackground.value;
});

fontFamily.addEventListener('change', function() {
	helloHeading.style.fontFamily = this.value;
})