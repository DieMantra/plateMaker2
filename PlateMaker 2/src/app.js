import * as htmlToImage from 'html-to-image';

let moveActivateArray = [artMiddleText, artSideText, artBottomText, artTopText];
let midTextBox = document.getElementById('middle__text__box');
let topTextBox = document.getElementById('top__text__box');
let sideTextBox = document.getElementById('left__text__box');
let bottomTextBox = document.getElementById('bottom__text__box');
let textBoxArray = [midTextBox, topTextBox, sideTextBox, bottomTextBox];

function downloadPng() {
	document.getElementById('artBackground').style.scale = 1;

	function clear() {
		moveActivateArray.forEach((eventcall) => {
			document
				.getElementById(eventcall.id + '--movespan')
				.classList.add('hidden--instant');
			document
				.getElementById(eventcall.id + '--movespan')
				.classList.remove('show');
		});
	}
	clear();
	function clearBorder() {
		textBoxArray.forEach((textElmt) => {
			textElmt.classList.remove('outlineRed');
		});
	}
	clearBorder();
	htmlToImage
		.toPng(document.getElementById('artBackground'), {
			quality: 1,
			canvasWidth: 2100,
			canvasHeight: 690.6,
		})
		.then(function (dataUrl) {
			var link = document.createElement('a');
			link.download = 'my-image-name.png';
			link.href = dataUrl;
			link.click();
		})
		.then(function () {
			document.getElementById('artBackground').style.scale = '';
			moveActivateArray.forEach((eventcall) => {
				document
					.getElementById(eventcall.id + '--movespan')
					.classList.remove('hidden--instant');
				document
					.getElementById(eventcall.id + '--movespan')
					.classList.add('show');
			});
		});
}

document.querySelector('#save__btn').addEventListener('click', downloadPng);
