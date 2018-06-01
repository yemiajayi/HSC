var ps_i = 0;
var ps_array = [
					'<img src="img/slide1.jpg" alt="header image">',
					'<img src="img/slide2.jpg" alt="header image">',
					'<img src="img/slide3.jpg" alt="header image">',
					'<img src="img/slide4.jpg" alt="header image">',
					'<img src="img/slide4.png" alt="header image">',
					'<img src="img/slide5.jpg" alt="header image">',
					'<img src="img/slide6.jpg" alt="header image">',
					'<img src="img/slide7.jpg" alt="header image">',
					'<img src="img/slide8.jpg" alt="header image">',
					'<img src="img/slide9.jpg" alt="header image">',
					'<img src="img/slide10.jpg" alt="header image">',
					'<img src="img/slide11.jpg" alt="header image">',
					'<img src="img/slide12.jpg" alt="header image">',
					'<img src="img/slide13.jpg" alt="header image">',
					'<img src="img/slide14.jpg" alt="header image">',
					'<img src="img/slide15.jpg" alt="header image">',
					'<img src="img/slide16.jpg" alt="header image">',
					'<img src="img/slide17.jpg" alt="header image">',
					'<img src="img/slide18.jpg" alt="header image">'
					
				];
var ps_elem;
function psNext () {
	ps_i++;
	ps_elem.style.opacity = 0;
	if (ps_i > (ps_array.length - 1)) {
		ps_i = 0;
	}
	setTimeout('psSlide()',1000);
}
function psSlide () {
	ps_elem.innerHTML = ps_array[ps_i];
	ps_elem.style.opacity = 1;
		setTimeout('psNext()',6000);
} 