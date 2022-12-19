import express from "express"
import RoleController from "./controllers/RoleController"
import UserController from "./controllers/UserController"
import EventController from "./controllers/EventController"
import SaleController from "./controllers/SaleController"

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

router.post("/events", EventController.create)
router.get("/events", EventController.findAll)
router.get("/events/:eventId", EventController.findOne)
router.put("/events/:eventId", EventController.update)
router.delete("/events/:eventId", EventController.destroy)

router.post("/sales", SaleController.create)
router.get("/sales", SaleController.findAll)
router.get("/sales/:saleId", SaleController.findOne)
router.put("/sales/:saleId", SaleController.update)
router.delete("/sales/:saleId", SaleController.destroy)

export { router } 