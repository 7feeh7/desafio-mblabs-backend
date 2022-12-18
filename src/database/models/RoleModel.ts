import { DataTypes } from "sequelize"
import { db } from "../index"

export const RoleModel = db.define("role", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
