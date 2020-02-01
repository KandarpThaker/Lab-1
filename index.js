var em = document.querySelector('em');
		
		// STEP 3: Assign a click event listener to the above element, and call function
		em.addEventListener("click", doSomething);
		
		// STEP 4: Creat a function that waits for click event above
		function doSomething(){
			// STEP 4a: Display a prompt asking for input, and assign the input to a variable
			var input = prompt("Enter some string");
			// STEP 4b: Grab the input from the variable and build a new string, then change the text inside the EM element
			var newString = 'Prof. ' + input;
			em.textContent = newString;
}