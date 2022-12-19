import { Request, Response } from "express"
import { EventModel } from "../database/models/EventModel"
import { Op } from "sequelize"

class EventController {
    async findAll(req: Request, res: Response) {
        const { name } = req.query

        let where = {}

        if(name) {
            where =  {
                name: { [Op.iLike]: `%${name}%` }
            }
        }

        const events = await EventModel.findAll({ where })

        return res.status(200).json(events)
    }
    async findOne(req: Request, res: Response) {
        const { eventId } = req.params

        const event = await EventModel.findOne({
            where: {
                id: eventId
            }
        })

        return res.status(200).json(event)
    }
    async create(req: Request, res: Response) {
        const { 
            name, 
            description, 
            start_date, 
            end_date, 
            quantity_ticket, 
            price, 
            active, 
            user_id 
        } = req.body

        const event = await EventModel.create({
            name,
            description,
            start_date,
            end_date,
            quantity_ticket,
            price,
            active,
            user_id
        })

        return res.status(201).json(event)
    }
    async update(req: Request, res: Response) {
        const { eventId } = req.params

        const { 
            name, 
            description, 
            start_date, 
            end_date, 
            quantity_ticket, 
            price, 
            active, 
            user_id 
        } = req.body

        await EventModel.update({
            name, 
            description, 
            start_date, 
            end_date, 
            quantity_ticket, 
            price, 
            active, 
            user_id
        }, {
            where: { id: eventId }
        })

        return res.status(204).send()
    }
    async destroy(req: Request, res: Response) {
        const { eventId } = req.params

        await EventModel.destroy({ where: { id: eventId } })

        return res.status(204).send()
    }
}

export default new EventController()