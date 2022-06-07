function validate() {
    let element = document.getElementById("fname")
    let valid   = true
    let pswd    = ''

    //Reset any red fields
    reset()

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

    if( ! element.value.toLowerCase().match('[a-z]+')) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    pswd = element.value;
    element = document.getElementById("repswd")

    if( ! element.value.toLowerCase().match('[a-z]+') || element.value != pswd) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    return valid
}

function reset() {
    const FORM = document.getElementById('form')

    for(element of FORM.children)

        if(element.nodeName == 'INPUT') element.style.backgroundColor = 'white'
}