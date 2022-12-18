import { Request, Response } from "express"
import { UserModel } from "../database/models/UserModel"

class UserController {
    async findAll(req: Request, res: Response) {
        const roles = await UserModel.findAll()
        return res.status(200).json(roles)
    }
    async findOne(req: Request, res: Response) {
        const { userId } = req.params

        const role = await UserModel.findOne({
            where: {
                id: userId
            }
        })

        return res.status(200).json(role)
    }
    async create(req: Request, res: Response) {
        const { name, password, address, email, phone_number, role_id } = req.body

        const user = await UserModel.create({
            name,
            password,
            address,
            email,
            phone_number,
            role_id
        })

        return res.status(201).json(user)
    }
    async update(req: Request, res: Response) {
        const { userId } = req.params

        const { 
            name,
            password,
            address,
            email,
            phone_number, 
            role_id 
        } = req.body

        await UserModel.update({
            name,
            password,
            address,
            email,
            phone_number,
            role_id
        }, {
            where: { id: userId }
        })

        return res.status(204).send()
    }
    async destroy(req: Request, res: Response) {
        const { userId } = req.params

        await UserModel.destroy({ where: { id: userId } })

        return res.status(204).send()
    }
}

export default new UserController()