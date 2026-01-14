const express = require('express')
const bodyParser =  require('body-parser')
const {PORT} = require('./config/serverConfig')
const {sendBasicEmail} = require('./services/EmailService')
const cron = require('node-cron')

const setupAndStartServer = ()=>{
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.listen(PORT , ()=>{
    console.log(`server started at port : ${PORT}`)

    // sendBasicEmail(
    //   'sdhukjfn@gamil.com',
    //   'ujjwalofficial28@gmail.com',
    //   'helooloolo',
    //   'ujjwalllll'
    // )
    cron.schedule('*/2 * * * *',()=>{
      console.log('running a task every 2 min')
    });
  })
}

setupAndStartServer();