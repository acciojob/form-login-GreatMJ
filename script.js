function getFormvalue() {
    //Write your code here
  event.preventDefault();

	// get form
	const form=document.getElementById("form1");

	// get elements
	const firstName=form.elements['fname'].value;
	const lastName=form.elements['lname'].value;

	alert(` ${firstName}  ${lastName}`);
}
