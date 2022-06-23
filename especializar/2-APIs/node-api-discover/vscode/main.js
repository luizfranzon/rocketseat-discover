const url = "http://localhost:5505/api";

function getUsers() {
    axios.get(url)
    .then(response => {
        const data = response.data.users
        apiResult.textContent = JSON.stringify(data)
    })
    .catch()
}

getUsers()
