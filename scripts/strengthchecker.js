function checkstrength()
    {
        var password = document.getElementById("pass").value;
        
        if (password.length < 5){
            document.getElementById("strengthchecker").value = "20";
            document.getElementById("strengthchecker").style = "color: red;";
        }
        else if (password.length < 6){
            document.getElementById("strengthchecker").value = "50";
            document.getElementById("strengthchecker").style = "color: orange;";
        }
        else if (password.length < 7){
            document.getElementById("strengthchecker").value = "70";
            document.getElementById("strengthchecker").style = "color: yellow;";
        }
        else if (password.length < 8){
            document.getElementById("strengthchecker").value = "90";
            document.getElementById("strengthchecker").style = "color: lightgreen;";
        }
        else if (password.length > 8){
            document.getElementById("strengthchecker").value = "100";
            document.getElementById("strengthchecker").style = "color: green;";
        }
    }