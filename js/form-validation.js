//For some reason the banner doesn't keep its styling from the css file with this behavior.
//I will try to set the css programmatically on load instead
function styleBanner() {
    const BANNER = document.getElementById("success-banner")

    BANNER.style.minWidth = '290px'
    BANNER.style.textAlign = 'center'
    BANNER.style.backgroundColor = '#22ff33'
    BANNER.style.border = 'double 5px'
    BANNER.style.visibility = 'hidden'
}

function showSuccess() {
    const BANNER = document.getElementById("success-banner")
    
    reset()

    if(validate()) {
        BANNER.style.visibility = 'visible'
        setTimeout(hideSuccess, 1000)
    }
}

function hideSuccess() {
    const BANNER = document.getElementById("success-banner")

    BANNER.style.visibility = 'hidden'
}

function validate() {
    let element = document.getElementById("fname")
    let valid   = true
    let pswd    = ''

    if( ! element.value) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    element = document.getElementById("lname")

    if( ! element.value) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    element = document.getElementById("email")

    if(element.value == '') {
        element.style.backgroundColor = 'red'
        valid = false
    }

    if(! element.value.includes('@')) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    element = document.getElementById("uname")

    if( ! element.value) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    element = document.getElementById("pswd")

    if( ! element.value) {
        element.style.backgroundColor = 'red'
        valid = false
    }

    pswd = element.value;
    element = document.getElementById("repswd")

    if( ! element.value || element.value != pswd) {
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