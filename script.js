function validate()
 {
     validateusername()
     validateaddress()
     validateemail()
     validatenomortelepon()
     validatepassword()

 }

 function validateusername() {
    var username = document.getElementById('username').value
    if(username.length < 1) {
        alert("username harus di isi")
        return
    }
}

function validateaddress() {
    var address = document.getElementById('address').value

    if(address.length > 100) {
        alert("address hanya bisa dimasukan 100 karakter")
        return
    }
}


function validateemail() {
    var email = document.getElementById('email').value
if ((email.indexOf('@',0)==-1) || (email.indexOf('.',0)==-1)){
    alert("Email harus menggunakan @ dan .");
    
    }
}

function validatenomortelepon() {
    var phone = document.getElementById('phone').value
if (phone.length!=12) {
    alert("no telepon harus 12 karakter");
    return false;
    }
}

function validatepassword() {
    var password = document.getElementById('password').value
    if(password < 8 || password >10){
        alert("password harus 8-10 Character")
        return
    }
}


function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  function filter() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }