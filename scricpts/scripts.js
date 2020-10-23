const image = document.querySelector('img');
const heading = document.querySelector('h1');

image.onclick = function() {
	image.src = 'images/elephant2.jpg';
}

const button = document.querySelector('button');

button.onclick = function() {
	let name = localStorage.getItem('name');
	if(!name){
		
		const promtName =prompt('Enter your name');
		if(promtName){
		localStorage.setItem('name',name) ;}
		
	}
	heading.textContent = 'welcome ' +localStorage.getItem('name');
		
}
	