const url =  'http://localhost:3000' // server url 

const loginDetials = document.querySelectorAll('input')

const loginBtn = document.getElementById('Formbtn')
const message = document.getElementById('errorMessage')

loginBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    message.innerText = ''

    if (!loginDetials[0].value || !loginDetials[1].value){
        message.innerText = 'All fields must be filled'
    } else {
        let user = {
            email: loginDetials[0].value ,
            password: loginDetials[1].value
        }

        loginUser(user)
    }
}) 

// REPLACE THIS WITH THE RIGHT DATA WHEN READY 

async function loginUser(data) {
    try {
        const response = await fetch(`${uri}/accounts/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        console.log(result);

        if (response.status === 200) {
            window.localStorage.setItem('token', result.token)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
            window.localStorage.setItem('name', result.user.first_name)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
            window.location.href = 'index.html'
        }

        if (result.error) msg.innerText = result.error

    } catch (error) {
        msg.innerText = error.error
        console.error(error);
    }
}