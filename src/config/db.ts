import {Sequelize} from "sequelize-typescript";
import {User} from "../Model/User";

const connection = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    database: 'user',
    password: '1234',
    port: 5432,
    models: [User]
});

const connectDB = async (): Promise<void> => {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDB;
