function validate()
 {
     validatefullname()
     validateusername()
     validatepassword()
     validatecountry()
 }

function validatefullname() {
    var fullname = document.getElementById("fullname").value
    if(fullname.length <5) {
        alert("fullname harus letter")
        return
    }
}

function validateusername() {
    var username = document.getElementById('username').value
    if(username.length > 11) {
        alert("username kurang dari 10 karakter")
        return
    }
}

function validatepassword() {
    var password = document.getElementById('password').value
    if(password == ''){
        alert("password tidak boleh kosong")
        return
    }
}


function validatecountry() {
    var optionscountry = document.getElementById('first-option').selected

    if(optionscountry == true) {
        alert("option country harus dipilih")
        return
    }
}
