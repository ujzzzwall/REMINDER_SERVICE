const {NotificationTicket} = require('../models/index')
// const notificationticket = require('../models/notificationticket')
const {Op} = require('sequelize')
class TicketRepo{

  async getAll(){
    try {
      const tickets = await NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      console.log(error)
    }
  }

  async create(data){
    try {
      const ticket = await NotificationTicket.create(data)
      return ticket;
    } catch (error) {
      console.log(error)
    }
  }

  async get(filter){
    try {
      const response = await NotificationTicket.findAll({
        where:{
          status : filter.status,
          notificationTime : {
            [Op.lte]: new Date()
          }
        }
      })
      return response
    } catch (error) {
      throw error
    }
  }

  async update(ticketId , data){
    try {
      const ticket = await NotificationTicket.findByPk(ticketId);
      if(data.status){
        ticket.status = data.status;}
      await ticket.save();
      return ticket;
    } catch (error) {
      throw error
    }
  }

  async deleteById(id) {
  return await NotificationTicket.destroy({
    where: { id }
  });
}
}

module.exports = TicketRepo;