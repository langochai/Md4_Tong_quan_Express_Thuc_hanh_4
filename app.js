const express = require('express');
const PORT = 8000;
const app = express();
const multer = require('multer');
const upload = multer();

app.set('views','./views');
app.set('view engine','ejs');
app.get('/',(req, res)=>{
    res.render('register')
});
const arrayUser = [];
app.post('/user/register', upload.none(), (req, res) => {
    if (req.body.username && req.body.password) {
        const user = {
            username: req.body.username,
            password: req.body.password
        }

        arrayUser.push(user);
        console.log(arrayUser);
        res.render("success", { user: user });
    } else {
        res.render("error");
    }
});
app.listen(PORT,()=>{
    console.log(`segs at port ${PORT}`)
});