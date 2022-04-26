const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "esenvolver de forma rapida",
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML.",
        },
        {
            title: "M",
            message: "uito fácil de usar.",
        },
        {
            title: "A",
            message: "gil",
        },
        {
            title: "I",
            message: "Ncrivel",
        },
        {
            title: "S",
            message: "uper eficiente",
        },
    ];

    const subtitle = "EJS";

    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle,
    });
    
});

app.get("/about", function (req, res) {
    res.render("pages/about");
});

app.get("*", function (req, res) {
    res.render("pages/404");
});

app.listen(8080);
console.log("Servidor iniciado na porta 8080");
