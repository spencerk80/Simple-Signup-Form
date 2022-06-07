//Called by onclick of the submit button from index.html
//Validates data via regex and then stores data for next page
function validate() {
    let element = document.getElementById("fname")
    let valid   = true
    let pswd    = ''

    //Reset any red fields
    reset()

    //Validations
    if( ! element.value.toLowerCase().match('[a-z]+')) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    element = document.getElementById("lname")

    if( ! element.value.toLowerCase().match('[a-z]+')) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    element = document.getElementById("email")

    if( ! element.value.toLowerCase().match('[a-z0-9]+@[a-z]+\.[a-z]+')) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    element = document.getElementById("uname")

    if( ! element.value.toLowerCase().match('[a-z]+') ) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    element = document.getElementById("pswd")

    if( ! element.value.toLowerCase().match('[a-z0-9]+')) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    pswd = element.value;
    element = document.getElementById("repswd")

    //Validate that the field has something in it AND it matches the first pswd field
    if( ! element.value.toLowerCase().match('[a-z0-9]+') || element.value != pswd) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    //Store data and load next page
    if(valid) {
        storeUserData()
        window.location.href = 'info.html'
    }
}

//Called by validate function to reset the error indications
function reset() {
    const FORM = document.getElementById('form')

    for(element of FORM.children)

        if(element.nodeName == 'INPUT') element.style.backgroundColor = 'white'
}

//Called by validate function after all data is validated
function storeUserData() {
    localStorage.setItem('uname', document.getElementById('uname').value)
    localStorage.setItem('fname', document.getElementById('fname').value)
    localStorage.setItem('lname', document.getElementById('lname').value)
    localStorage.setItem('email', document.getElementById('email').value)
}