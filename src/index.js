const express = require('express')
const bodyParser =  require('body-parser')
const {PORT} = require('./config/serverConfig')


const jobs = require('./utils/job');

// const {sendBasicEmail} = require('./services/EmailService')
const ticketController = require('./controller/Email-controller')
const {subscribeMessage , createChannel} = require('./utils/messageQueue')
const {REMINDER_BINDING_KEY} = require('./config/serverConfig')
const setupAndStartServer = async()=>{

  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.post('/api/v1/tickets' ,ticketController.create);
  app.delete('/api/v1/tickets/:id' ,ticketController.destroy);

  const channel = await createChannel();
  subscribeMessage(channel,undefined,REMINDER_BINDING_KEY)

  app.listen(PORT , ()=>{
    console.log(`server started at port : ${PORT}`)
    jobs();
    // sendBasicEmail(
    //   'sdhukjfn@gamil.com',
    //   'ujjwalofficial28@gmail.com',
    //   'helooloolo',
    //   'ujjwalllll'
    // )
  })
}

setupAndStartServer();