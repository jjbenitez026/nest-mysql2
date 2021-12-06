export interface NestMysql2Options {
  user: string;
  host: string;
  database: string;
  waitForConnections: boolean;
  password: string;
  port: number;
  connectionLimit: number;
  queueLimit: number;
}
