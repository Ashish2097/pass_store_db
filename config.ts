import { ConnectionOptions } from "mysql2";

const config: ConnectionOptions = {
  host: "54.255.143.218",
  port: 22,
  user: "ashish",
  password: "Pass@123",
  database: "pass-store-db",
};

export default config;

// root -> ec2-Dev-pass
// ashish -> Pass@123
