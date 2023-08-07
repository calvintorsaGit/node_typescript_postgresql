import {Sequelize} from "sequelize";
import User from "../Model/User";

const sequelizeConnection = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432
});

export const connectDB = async (): Promise<void> => {
    try {
        await sequelizeConnection.authenticate();
        await User.sync()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default sequelizeConnection;
