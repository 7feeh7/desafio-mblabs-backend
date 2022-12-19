import { DataTypes } from "sequelize"
import { db } from "../index"
import { UserModel } from "./UserModel"
import { EventModel } from "./EventModel"


export const SaleModel = db.define("sale", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: UserModel,
            key: 'id'
        },
    },
    event_id: {
        type: DataTypes.UUID,
        references: {
            model: EventModel,
            key: 'id'
        },
    },
    quantity_ticket: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
})