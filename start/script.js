let openButton = document.getElementById('open-btn'),
	closeButton = document.getElementById('close-btn'),
	openPopup = document.getElementById('popup-pay__content');

openButton.addEventListener('click', function () {
	openPopup.classList.add('open')
});

closeButton.addEventListener('click', function () {
	openPopup.classList.remove('open')
});



