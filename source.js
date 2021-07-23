let firstNameArr = [];
let lastNameArr = [];
let emailOrNumberArr = ["jstrongnguyen@gmail.com"];
let passWordArr = ["123"];
let dayArr = [];
let monthArr = [];
let yearArr = [];

function addFirstName() {
    firstNameArr.push(document.getElementById('firstName').value);
    document.getElementById('firstName').value = '';
}

function addLastName() {
    lastNameArr.push(document.getElementById('lastName').value);
    document.getElementById('lastName').value = ''
}

function addEmailOrNumber() {
    emailOrNumberArr.push(document.getElementById('emailOrNumber').value);
    document.getElementById('emailOrNumber').value = '';
}

function addPassWord() {
    passWordArr.push(document.getElementById('newPassWord').value);
    document.getElementById('newPassWord').value = '';
}

function addDay() {
    if (document.getElementById('day').value >= 1 && document.getElementById('day').value <= 31) {
        dayArr.push(document.getElementById('day').value);
    } else {
        alert('ngày sai vui lòng nhập lại ngày đúng');
    }
    document.getElementById('day').value = '';
}

function addMonth() {
    if (document.getElementById('month').value >= 1 && document.getElementById('month').value <= 12) {
        monthArr.push(document.getElementById('month').value);
    } else {
        alert('tháng sai vui lòng nhập lại tháng đúng');
    }
    document.getElementById('month').value = '';
}

function addYear() {
    if (document.getElementById('year').value >= 1900 && document.getElementById('year').value <= 2010) {
        yearArr.push(document.getElementById('year').value);
    } else {
        alert('năm sai vui lòng nhập lại năm đúng');
    }
    document.getElementById('year').value = '';
}

function createActive(){
    alert('Đăng ký thành công')
}

function login() {
    for (let i = 0; i < emailOrNumberArr.length; i++) {
        if (emailOrNumberArr[i] == document.getElementById('user').value) {
            for (let j = 0; j < passWordArr.length; j++) {
                if (passWordArr[j] == document.getElementById('passWord').value) {
                    location.assign('admin/index.html');
                } else {
                    alert('tên đăng nhập hoặc mật khẩu không đúng');
                }
            }
        } else {
            alert('tên đăng nhập hoặc mật khẩu không đúng');
        }
    }
}

