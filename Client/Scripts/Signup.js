// const uri = 'https://hiit-blog-api.onrender.com'     // the server url

const signupDetials = document.querySelectorAll('inputs')

const signupbtn = document.getElementById('Formbtn')
const message = document.getElementById('errorMessage')

signupbtn.addEventListener('click' , (e) => {
    e.preventDefault()
    message.innerText = "" ;

    if(!detials[0].value , !detials[1].value , !detials[2].value , !detials[3].value) {
        message.innerText = "All feilds must be filled "
    } else if (detials[2].value !== detials[3].value){
        message.innerText= "Password and Confirm password do not match"
    } else {
        let user = {
            Name: detials[0].value,
            Email: detials[1].value,
            password: detials[2].value,
            ConfirmPassword: detials[3].value,
        }
        createAccount(user)
    }
})


// REPLACE THIS WITH PROPER VALUES 

// async function createAccount(data) {
//     try {
//         const response = await fetch(`${uri}/accounts/auth/signup`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();
//         if (result.error) msg.innerText = result.error

//         if (response.status === 200) window.location.href = 'login.html'

//         console.log(result);
//     } catch (error) {
//         msg.innerText = error.error
//         console.error(error);
//     }
// }