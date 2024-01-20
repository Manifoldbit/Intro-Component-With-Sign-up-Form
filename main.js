const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email')
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	/*This function checks the input if empty and calls the setErrorFor function or if its not empty it calls the setSuccessFor as well
	as check if the email , if its not , it calls the isEmail function */

    if(firstnameValue === '') {
		setErrorFor(firstname, 'First Name cannot be empty');
	} else {
		setSuccessFor(firstname);   
	}

    if(lastnameValue === '') {
		setErrorFor(lastname, 'Last Name cannot be empty');
	} else {
		setSuccessFor(lastname);   
	}

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like this is not an email');
	} else {
		setSuccessFor(email);
	}

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be empty');
	} else {
		setSuccessFor(password);
	}

	if(firstnameValue && lastnameValue && emailValue && passwordValue !== ''){
		alert("Please check your email to claim your free trial");
	}

}
/* This function takes an input from check inputs function to know if an input is empty, it gives a message and red border connecting 
to class of form control error in the css file

*/


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

/* This function takes an input from check inputs function to know if an input is not empty and gives a green color border
 connecting to the class of form control error from the css file and alert on the browser

 */

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	// alert("Please check your email to claim your free trial");
}

//This function checks email input to know if the email is valid or not

function isEmail(email) {
	return/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(email);
}


