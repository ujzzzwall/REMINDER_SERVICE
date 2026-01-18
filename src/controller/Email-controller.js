const TicketService = require('../services/EmailService')

const create = async(req,res)=>{
  try {
    const response = await TicketService.createNotification(req.body)
    return res.status(201).json({
      message : 'Successfully resgister an email reminder',
      data : response,
      err : {},
      success : true
    })
  } catch (error) {
    return res.status(500).json({
      message : 'Unable to  resgister an email reminder',
      data : {},
      err : error,
      success : false
    })
  }
}

const destroy = async(req,res)=>{
  try {
    const response = await TicketService.deleteNotification(req.params.id)
    return res.status(201).json({
      message : 'Successfully deleted an email reminder',
      data : response,
      err : {},
      success : true
    })
  } catch (error) {
    return res.status(500).json({
      message : 'Unable to  delete an email reminder',
      data : {},
      err : error,
      success : false
    })
  }
}

module.exports= {
  create,
  destroy
}