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
let borderColor = document.querySelector('#borderColor');
let weightHeading = document.querySelector('#weightHeading');
let heightHeading = document.querySelector('#heightHeading');
let lineHeading = document.querySelector('#lineheight');

lineHeading.addEventListener('change', function() {
	document.documentElement.style.setProperty('--line-height', lineHeading.value + "px");
});

heightHeading.addEventListener('change', function() {
	document.documentElement.style.setProperty('--height', this.value + "px");
	document.documentElement.style.setProperty('--line-height', heightHeading.value + "px");
});

weightHeading.addEventListener('change', function() {
	document.documentElement.style.setProperty('--weight', this.value + "%");
});

yourName.addEventListener('change', function() {
	helloHeading.innerText = "Hello " + yourName.value + "!";
});

headingColor.addEventListener('change', function() {
	document.documentElement.style.setProperty('--text-color', headingColor.value);
});

sizeHeading.addEventListener('change', function() {
	document.documentElement.style.setProperty('--font-size', sizeHeading.value + "px");
});

underline.addEventListener('change', function() {
	if (this.checked == true) {
		document.documentElement.style.setProperty('--text-decor', "underline");
	}
	else {
		document.documentElement.style.setProperty('--text-decor', "none");
	}
})

align.addEventListener('change', function() {
	document.documentElement.style.setProperty('--text-align', this.value);
});

italic.addEventListener('change', function() {
	if (this.checked == true) {
		document.documentElement.style.setProperty('--font-italic', "italic");
	}
	else {
		document.documentElement.style.setProperty('--font-italic', "normal");
	}
});

notBold.addEventListener('change', function() {
	if (this.checked == true) {
		document.documentElement.style.setProperty('--font-bold', "lighter");
	}
	else {
		document.documentElement.style.setProperty('--font-bold', "bold");
	}
});

border.addEventListener('change', function() {
	document.documentElement.style.setProperty('--border-size', this.value + "px");
	block.style.borderStyle = "solid";
});

borderRadius.addEventListener('change', function() {
	document.documentElement.style.setProperty('--border-radius', this.value + "px");
});

colorBackground.addEventListener('change', function() {
	document.documentElement.style.setProperty('--bg-color', this.value);
});

fontFamily.addEventListener('change', function() {
	document.documentElement.style.setProperty('--font-family', this.value);
})

borderColor.addEventListener('change', function () {
	document.documentElement.style.setProperty('--border-color', this.value);
});