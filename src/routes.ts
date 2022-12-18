import express from "express"
import RoleController from "./controllers/RoleController"
import UserController from "./controllers/UserController"

const router = express.Router()

router.post("/roles", RoleController.create)
router.get("/roles", RoleController.findAll)
router.get("/roles/:roleId", RoleController.findOne)
router.put("/roles/:roleId", RoleController.update)
router.delete("/roles/:roleId", RoleController.destroy)


router.post("/users", UserController.create)
router.get("/users", UserController.findAll)
router.get("/users/:userId", UserController.findOne)
router.put("/users/:userId", UserController.update)
router.delete("/users/:userId", UserController.destroy)

export { router } 