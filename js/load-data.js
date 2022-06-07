//Called onload by info.html
function loadInfo() {
    document.getElementById('fname-td').innerHTML = localStorage.getItem('fname')
    document.getElementById('lname-td').innerHTML = localStorage.getItem('lname')
    document.getElementById('uname-td').innerHTML = localStorage.getItem('uname')
    document.getElementById('email-td').innerHTML = localStorage.getItem('email')
}