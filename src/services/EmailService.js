const sender = require('../config/emailConfig');
const TicketRepo = require('../repository/Email-repository');

const repo = new TicketRepo();

const sendBasicEmail = async(mailFrom , mailTo , mailSubject , mailBody)=>{
  try {
    const response  = await sender.sendMail({
      from: mailFrom,
      to : mailTo,
      Subject : mailSubject,
      text :mailBody
    });
    return response;
  } catch (error) {
    console.log(error)
  }
}

const fetchPendingEmails = async(timestamp)=>{
  try {
    const response = await repo.get({status : "PENDING"});
    return response;
  } catch (error) {
    console.log(error)
  }
}

const createNotification = async(data)=>{
  try {
    const result = await repo.create(data);
    return result;
  } catch (error) {
    console.log(error) 
  }
}

const deleteNotification = async(id)=>{
  try {
    return await repo.deleteById(id);
  } catch (error) {
    throw error
  }
}

const updateTicket = async(ticketId , data)=>{
  try {
    const result = await repo.update(ticketId,data);
    return result;
  } catch (error) {
    console.log(error) 
  }
}

module.exports = {
  sendBasicEmail, 
  fetchPendingEmails,
  createNotification,
  deleteNotification,
  updateTicket
}