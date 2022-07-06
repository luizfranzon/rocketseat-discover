async function start() {
    const url = "https://api.github.com/users/luizfranzon";
    const userData = await fetch(url).then((response) => response.json());
    console.log(userData);
}

start();
