let menuBoxAbout = document.getElementById('menu-item-about');
document.getElementById('menu-id-about').addEventListener('click', function(){
	closeAllMenus();
	menuBoxAbout.style.display = 'block';
})
let menuBoxInspiration = document.getElementById('menu-item-inspiration');
document.getElementById('menu-id-inspiration').addEventListener('click', function(){
	closeAllMenus();
	menuBoxInspiration.style.display = 'block';
})
let menuBoxCntact = document.getElementById('menu-item-contact');
document.getElementById('menu-id-contact').addEventListener('click', function(){
	closeAllMenus();
	menuBoxCntact.style.display = 'block';
})

let closeX = document.querySelectorAll('.closeTheBox');
closeX.forEach(x_btn => {
	x_btn.addEventListener('click', function(){
		closeAllMenus();
	})
})

function closeAllMenus(){
	menuBoxAbout.style.display = 'none';
	menuBoxInspiration.style.display = 'none';
	menuBoxCntact.style.display = 'none';
}