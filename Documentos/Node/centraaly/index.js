 const express = require('express');
 const app = express();
 const port = 8080;
 const chalk = require('chalk');


 //rutas
 app.get('/', (req, res) => {
    res.send('Estoy respondiendo algo');
 });

 //app.post()
 //app.put()
 //app.delete()

//escuchar peticiones en un puerto
 app.listen(port /*8080*/, () => {
     console.log(`Escuchando en el puerto ${port}`);
     console.log(``)

 })
// express.listen()
