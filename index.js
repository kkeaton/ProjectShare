const express = require('express')
const app = express()
const port = 3000
//Folder for view files
app.set('views','./views')
//Templating engine set to pug
app.set('view engine','pug')
app.get('/', (req , res) => res.render('home'),{tittle: "Project Share"})



app.listen(port, () => console.log(`Example app listing on port ${port}!`))