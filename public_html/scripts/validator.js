    function validate()
    {
        var isValid = true;
        var checked = false;
        var msg = document.getElementById("msg");
        var user = document.getElementById("username");
        var password = document.getElementById("pass");
        var confirmpassword = document.getElementById("confirmpass");
        var radioButtons = document.myForm.genders;
        var email = document.getElementById("email");
        var phone = document.getElementById("contact");
        
        try{
			//checks to see if a radio button has been toggled
            for (i = 0; i < radioButtons.length; i++)
            {
                if(radioButtons[i].checked){
                    checked = true;
                }               
            }
			
			//checks username input against pattern
            var pattern = /^[a-zA-Z0-9]+$/;
            var output = pattern.test(user.value);
            
            if (output){
                showCheck("check", "x");
            } else {
                showCheckX("x", "check");
                throw "The username field is required.";
            }
            
            if (user.length < 5){
                showCheckX("x", "check");
                throw "Username must be longer than 5 characters.";
            }
            
            //checks password input against pattern
            var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
            var output = pattern.test(password.value);
            
            if (output){
                showCheck("check1", "x1");
            } else {
                showCheckX("x1", "check1");
                throw "Password needs to be at least 5 characters.";
            }
            
			//compares confirmation with entered password
            if (confirmpassword.value === password.value){
                showCheck("check2", "x2");
            } else {
                showCheckX("x2", "check2");
                throw "The entered passwords do not match.";
            }
            
            if (checked === true){
                showCheck("check3", "x3");
            } else {
                showCheckX("x3", "check3");
                throw "You must select a gender.";
            }
            
			//checks email input against pattern
            var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/igm;
            var output = pattern.test(email.value);
                
            if (output){
                showCheck("check4", "x4");
            } else {
                var badEmailAddy = true;
                showCheckX("x4", "check4");
                throw "Invalid email address.";
            }
            
			//checks phone input against pattern
            var pattern = /^\d{10}$/;
            var output = pattern.test(phone.value);
           
            if (output){
                showCheck("check5", "x5");
                Clear();
            } else {
                showCheckX("x5", "check5");
                throw "Phone number must be exactly 10 digits.";
            }
            
			//sets checkmark if input is correct
            function showCheck(check, x){
                document.getElementById(check).style.visibility = "visible";
                document.getElementById(x).style.visibility = "hidden";
            };
            
			//sets X if input is incorrect
            function showCheckX(x, check){
                document.getElementById(x).style.visibility = "visible";
                document.getElementById(check).style.visibility = "hidden";
            };
			
			//clears the error message content from innerHTML
            function Clear() {
                msg.innerHTML = "";
                msg.style.color = "red";    
            };
        
		//form cannot be submitted if boolean isValid is false
        }catch(err){
                msg.innerHTML = (err);
                msg.style.color = "red";
                isValid = false;
                
        }
        
        return isValid;
    };