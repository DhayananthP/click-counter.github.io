let i = 0;
const heading = document.getElementById("heading");
heading.addEventListener('click' , function() {
  i++;
  heading.textContent = i;
})
 function reset() {
    heading.textContent = i = 0;
};
	
