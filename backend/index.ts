// Dependencies
// @ts-ignore
import dotenv from 'dotenv';

// Configurations
// @ts-ignore
import config from './config';

// Environment variables
dotenv.config();

// Types
type Db = {
  dialect: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

type Security = {
  secretKey: string;
  expiresIn: string;
}

type Server = {
  port: number;
}

// @ts-ignore
const {
  DB_DIALECT = '',
  DB_HOST = '',
  DB_PORT = 0,
  DB_USERNAME = '',
  DB_PASSWORD = '',
  DB_DATABASE = '',
}

const db:Db = {
  dialect: DB_DIALECT,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
}

// Configurations
const { security, server } = config;

export const $db = db;
export const $security: Security = security;
export const $server: Server = server;


