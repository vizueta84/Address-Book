// Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth
// Once you have the functionality working, feel free to style and structure your address book with CSS and HTML

let users;


window.onload = function() {
    getusers()
    
}

const getusers = () => {
    // Fetch a new user multiple times and store them in an array
    // Figure out how to fetch multiple users in one fetch request
    // Fetch multiple users on window load
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => users = data.results)
}

const consoleUsers = () => {
    console.log(users)
}

// Then list out all the users in your address book array by name and picture
const displayUsers = () => {
  const allUsers = document.getElementById('all-users')
  users.map((user) => {

    const li = document.createElement('li')
    const text = document.createTextNode(`${user.name.first} ${user.name.last}`)

    const img = document.createElement("img")
    img.src = user.picture.thumbnail

    
    const detailsBox = document.createElement("div")
    detailsBox.className = `details`
    detailsBox.style.display = "none"
    
    const button = document.createElement("button");
    button.innerText = "details" 
    button.onclick = () => details(detailsBox)

    const address = document.createElement("p")
    address.innerText = `${user.location.street.number} ${user.location.street.name}, ${user.location.city} `

    const dob = document.createElement("p")
    dob.innerText = `${user.dob.date}`

    detailsBox.appendChild(address)
    detailsBox.appendChild(dob)

    detailsBox.appendChild(address)
    li.appendChild(img)
    li.appendChild(text)
    li.appendChild(detailsBox)
    li.appendChild(button)
    allUsers.append(li)
  })
}
const detailList = document.getElementById("details")

const details = (detailsBox) => {
    // const elements = this.previousElementSibling
    // console.log(elements)
    console.log(detailsBox)
    detailsBox.style.display = "block"
}