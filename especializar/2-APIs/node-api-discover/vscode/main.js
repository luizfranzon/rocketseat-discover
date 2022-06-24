const url = "http://localhost:5505/api";

function getUsers() {
    axios.get(url)
    .then(response => {
        const data = response.data.users
        apiResult.textContent = JSON.stringify(data)
    })
    .catch()
}

const newUser = {
    name: "Luiz",
    avatar: "https://picsum.photos/300",
    city: "São Paulo"
}

function addNewUser() {
    axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

