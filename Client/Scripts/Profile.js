const url = 'http://localhost:3000'

const token = window.localStorage.getItem('token')

async function getProfile() {
    const response = await fetch(`$url{}/user/` , {
        headers:{
            // the authorization token is sent to the server to authenticate the user. See requireAuth.js in the server folder on how to get the token
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data
}

const user = await getProfile()

const main = document.querySelector('main')

const profile = document.createElement('div')
profile.className = 'profile'
main.appendChild(profile)

const welcomeMsg = document.createElement('h2')
welcomeMsg.className = 'welcome'
welcomeMsg.innerText = `Hi, ${user.first_name}`
profile.appendChild(welcomeMsg)

const userEmail = document.createElement('p')
userEmail.className = 'userEmail'
userEmail.innerText = user.email
profile.appendChild(userEmail)

const editProfileBtn = document.createElement('button')
editProfileBtn.className = 'edit-profile'
editProfileBtn.innerText = 'Edit Profile'
profile.appendChild(editProfileBtn)


editProfileBtn.addEventListener('click', () => {
    editProfilePopup()
})

const editProfilePopup = () => {
    // pop-up to edit profile
    const cover = document.createElement('div')
    cover.className = 'cover'
    main.appendChild(cover)

    const profileForm = document.createElement('form')
    profileForm.className = 'profileForm'
    cover.appendChild(profileForm)

    const firstNameLabel = document.createElement('label')
    firstNameLabel.className = 'firstNameLabel'
    firstNameLabel.innerText = 'First Name'
    profileForm.appendChild(firstNameLabel)

    const firstNameInput = document.createElement('input')
    firstNameInput.type = 'text'
    firstNameInput.className = 'firstNameInput'
    firstNameInput.setAttribute('value', user.first_name)
    profileForm.appendChild(firstNameInput)

    const lastNameLabel = document.createElement('label')
    lastNameLabel.className = 'lastNameLabel'
    lastNameLabel.innerText = 'Last Name'
    profileForm.appendChild(lastNameLabel)

    const lastNameInput = document.createElement('input')
    lastNameInput.type = 'text'
    lastNameInput.className = 'lastNameInput'
    lastNameInput.setAttribute('value', user.last_name)
    profileForm.appendChild(lastNameInput)


    const emailLabel = document.createElement('label')
    emailLabel.className = 'emailLabel'
    emailLabel.innerText = 'Email'
    profileForm.appendChild(emailLabel)

    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.className = 'emailInput'
    emailInput.setAttribute('value', user.email)
    profileForm.appendChild(emailInput)

    const passwordLabel = document.createElement('label')
    passwordLabel.className = 'passwordLabel'
    passwordLabel.innerText = 'Password'
    profileForm.appendChild(passwordLabel)

    const passwordInput = document.createElement('input')
    passwordInput.type = 'password'
    passwordInput.className = 'passwordInput'
    profileForm.appendChild(passwordInput)

    const cpasswordLabel = document.createElement('label')
    cpasswordLabel.className = 'cpasswordLabel'
    cpasswordLabel.innerText = 'Confirm Password'
    profileForm.appendChild(cpasswordLabel)

    const cpasswordInput = document.createElement('input')
    cpasswordInput.type = 'password'
    cpasswordInput.className = 'cpasswordInput'
    profileForm.appendChild(cpasswordInput)

    const btnContainer = document.createElement('div')
    btnContainer.className = 'btnContainer'
    profileForm.appendChild(btnContainer)

    const discardBtn = document.createElement('button')
    discardBtn.className = 'discardBtn'
    discardBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" fill='#ffffff'/>
            </svg>
            `
    discardBtn.addEventListener('click', (e) => {
        e.preventDefault()
        cover.classList.add('hide')
    })
    btnContainer.appendChild(discardBtn)

    const confirmBtn = document.createElement('button')
    confirmBtn.className = 'confirmBtn'
    confirmBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="30">
            <path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z" fill='#ffffff'/>
            </svg>`
    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault()
        cover.classList.add('hide')
    })
    btnContainer.appendChild(confirmBtn)
}
