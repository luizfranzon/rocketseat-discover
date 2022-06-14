Promise.all([
    fetch("https://api.github.com/users/luizfranzon"),
    fetch("https://api.github.com/users/luizfranzon/repos")
])
.then(responses => {
    console.log(responses[0].json())
    console.log(responses[1].json())
})