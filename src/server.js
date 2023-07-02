const app = require("./app");
app.get("/", (req, res) => require('./../package.json').version)
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
})