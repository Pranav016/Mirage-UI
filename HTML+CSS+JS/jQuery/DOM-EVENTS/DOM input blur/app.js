const x=document.querySelector(".input");
x.addEventListener('blur', myFunction);
function myFunction()
{
	x.style.backgroundColor="red";
	//alert('filling this is required');
}