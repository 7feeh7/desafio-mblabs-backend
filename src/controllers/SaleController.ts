import { Request, Response } from "express"
import { SaleModel } from "../database/models/SaleModel"
import { EventModel } from "../database/models/EventModel"

class SaleController {
    async findAll(req: Request, res: Response) {
        const events = await EventModel.findAll({})

        return res.status(200).json(events)
    }
    async findOne(req: Request, res: Response) {
        const { saleId } = req.params

        const event = await EventModel.findOne({
            where: {
                id: saleId
            }
        })

        return res.status(200).json(event)
    }
    async create(req: Request, res: Response) {
        const { 
            user_id, 
            event_id, 
            quantity_ticket,  
        } = req.body

        const event = await EventModel.findOne({
            where: {
                id: event_id
            }
        }).then(event => event?.toJSON())

        const amount = quantity_ticket * event.price

        const sale = await SaleModel.create({
            user_id, 
            event_id, 
            quantity_ticket,  
            amount
        })

        if(sale) {
            await EventModel.update({ quantity_ticket: event.quantity_ticket - quantity_ticket}, {
                where: { id: event_id }
            })
        }

        return res.status(201).json(sale)
    }
    async update(req: Request, res: Response) {
        const { saleId } = req.params

        const { 
            user_id, 
            event_id, 
            quantity_ticket, 
            amount 
        } = req.body

        await EventModel.update({
            user_id, 
            event_id, 
            quantity_ticket, 
            amount 
        }, {
            where: { id: saleId }
        })

        return res.status(204).send()
    }
    async destroy(req: Request, res: Response) {
        const { saleId } = req.params

        await EventModel.destroy({ where: { id: saleId } })

        return res.status(204).send()
    }
}

export default new SaleController()