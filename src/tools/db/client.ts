import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

//import { Pool, neonConfig } from '@neondatabase/serverless'
//import { PrismaNeon } from '@prisma/adapter-neon'
//import { PrismaClient } from '@prisma/client'
//import dotenv from 'dotenv'
//import ws from 'ws'
//
//dotenv.config()
//neonConfig.webSocketConstructor = ws
//const connectionString = `${process.env.DATABASE_URL}`
//
//const pool = new Pool({ connectionString })
//const adapter: any = new PrismaNeon(pool)
//// @ts-ignore
//const prisma = new PrismaClient({ adapter })
//
//export default prisma