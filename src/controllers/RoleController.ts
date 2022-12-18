import { Request, Response } from "express"
import { RoleModel } from "../database/models/RoleModel"

class RoleController {
    async findAll(req: Request, res: Response) {
        const roles = await RoleModel.findAll()
        return res.status(200).json(roles)
    }
    async findOne(req: Request, res: Response) {
        const { roleId } = req.params

        const role = await RoleModel.findOne({
            where: {
                id: roleId
            }
        })

        return res.status(200).json(role)
    }
    async create(req: Request, res: Response) {
        const { name } = req.body
        
        const role = await RoleModel.create({ name })

        return res.status(201).json(role)
    }
    async update(req: Request, res: Response) {
        const { roleId } = req.params

        const { name } = req.body

        await RoleModel.update({ name }, {
            where: { id: roleId }
        })

        return res.status(204).send()
    }
    async destroy(req: Request, res: Response) {
        const { roleId } = req.params

        await RoleModel.destroy({ where: { id: roleId } })
        
        return res.status(204).send()
    }
}

export default new RoleController()