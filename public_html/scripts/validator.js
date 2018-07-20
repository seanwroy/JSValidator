    
    function validate()
    {
        var isValid = true;
        var checked = false;
        var msg = document.getElementById("msg");
        var user = document.getElementById("username").value;
        var password = document.getElementById("pass").value;
        var confirmpassword = document.getElementById("confirmpass").value;
        var radioButtons = document.myForm.genders;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("contact").value;
        var badEmailAddy = false;
        
        try{
            for (i = 0; i < radioButtons.length; i++)
            {
                if(radioButtons[i].checked){
                    checked = true;
                }               
            }
            
            if (checkUsername(user)){
                showCheck("check", "x");
            } else {
                showCheckX("x", "check");
                throw "The username field is required.";
            }
            
            if (user.length < 5)
            {
                showCheckX("x", "check");
                throw "Username must be longer than 5 characters.";
            }
            
            if (checkPassword(password)){
                showCheck("check1", "x1");
                
            } else {
                showCheckX("x1", "check1");
                throw "Password needs to be at least 5 characters.";
            }
            
            if ((confirmpassword === password && password !== "")&&(password.length >= 5)){
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
            if (checkEmail(email)){
                showCheck("check4", "x4");
            } else {
                var badEmailAddy = true;
                showCheckX("x4", "check4");
                throw "Invalid email address.";
            }
           
            if (checkPhone(phone)){
                showCheck("check5", "x5");
                Clear();
            } else {
                showCheckX("x5", "check5");
                throw "Phone number must be exactly 10 digits.";
            }
            
            function showCheck(check, x){
                document.getElementById(check).style.visibility = "visible";
                document.getElementById(x).style.visibility = "hidden";
            };
            
            function showCheckX(x, check){
                document.getElementById(x).style.visibility = "visible";
                document.getElementById(check).style.visibility = "hidden";
            };
            
            function checkUsername(str){
                var pass = /^[a-zA-Z0-9]+$/;
                return pass.test(str);
            }
            
            function checkPassword(str){
                var pass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
                return pass.test(str);
            };
            
            function checkEmail(str){
                var pass = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/igm;
                return pass.test(str);
            };
            
            function checkPhone(str){
                var pass = /^\d{10}$/;
                return pass.test(str);
            };
            
            function Clear() {
                msg.innerHTML = "";
                msg.style.color = "red";    
            };
        
        }catch(err){
                msg.innerHTML = (err);
                msg.style.color = "red";
                isValid = false;
                
        }
        
        return isValid;
    };
   
