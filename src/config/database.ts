import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Contact } from "../models/contact.model";
dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false, // Disable SQL query logging in console
  models: [Contact], // Register models
});

export default sequelize;
