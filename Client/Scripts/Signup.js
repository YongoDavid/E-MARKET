const uri = 'http://127.0.0.1:5500'     // the server url

const signupDetials = document.querySelectorAll('inputs')

const signupbtn = document.querySelector('#Formbtn')
const message = document.querySelector('#errorMessage')

signupbtn.addEventListener('click' , (e) => {
    e.preventDefault()
    message.innerText = "" ;

    if(!signupDetials[0].value || !signupDetials[1].value || !signupDetials[2].value || !signupDetials[3].value) {
        message.innerText = "All feilds must be filled "
    } else if (signupDetials[2].value !== signupDetials[3].value){
        message.innerText= "Password and Confirm password do not match"
    } else {
        let user = {
            Name: signupDetials[0].value,
            Email: signupDetials[1].value,
            Password: signupDetials[2].value,
            ConfirmPassword: signupDetials[3].value,
        }
        createAccount(user)
    }
})


// REPLACE THIS WITH PROPER VALUES 

async function createAccount(data) {
    try {
        const response = await fetch(`${uri}/accounts/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.error) msg.innerText = result.error

        if (response.status === 200) window.location.href = 'login.html'

        console.log(result);
    } catch (error) {
        msg.innerText = error.error
        console.error(error);
    }
}