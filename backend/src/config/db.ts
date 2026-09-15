import { setDefaultResultOrder, setServers } from "node:dns";
import mongoose from "mongoose";
import { env } from "./env";

setServers(["8.8.8.8", "1.1.1.1"]);
setDefaultResultOrder("ipv4first");

export async function connectDatabase(): Promise<void> {
  mongoose.set("strictQuery", true);

  await mongoose.connect(env.MONGODB_URI, {
    serverSelectionTimeoutMS: 10_000,
    maxPoolSize: 10,
    family: 4,
  });
}

export async function disconnectDatabase(): Promise<void> {
  await mongoose.disconnect();
}

export function isDatabaseConnected(): boolean {
  return mongoose.connection.readyState === 1;
}
