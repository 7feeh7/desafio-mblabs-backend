import { DataTypes } from "sequelize"
import { db } from "../index"
import { RoleModel } from "./RoleModel"

export const UserModel = db.define("user", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: RoleModel,
            key: 'id'
        },
        defaultValue: 1, // Por padrão o nivel de usuario é 1 (Cliente)
    }
})
