import express from "express"
import RoleController from "./controllers/RoleController"

const router = express.Router()

router.post("/roles", RoleController.create)
router.get("/roles", RoleController.findAll)
router.get("/roles/:roleId", RoleController.findOne)
router.put("/roles/:roleId", RoleController.update)
router.delete("/roles/:roleId", RoleController.destroy)

export { router } 