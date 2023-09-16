const express = require("express");
const authRouter=require("./routes/auth.js")
const app = express();

app.set("view engine", "ejs")

app.use("/auth", authRouter)

app.get("/", (req, res) => {
    // if(
    //     // User login information
    //     ){
    res.redirect("/auth/login");
    // }else{
    //     res.redirect("/login")
    // }
});

app.get("/urls", (req, res) => {
    res.render("urls.ejs")
});

app.post("/logout", (req,res)=>{
    res.clearCookie("user")
    res.redirect("/auth/login");
})

app.listen(3000, () => {
    console.log("Server running at 3000");
});
