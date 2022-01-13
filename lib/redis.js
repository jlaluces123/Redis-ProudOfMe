import { Client } from 'redis-om';

// create new client
export const client = new Client();

// create a create function to open client
export async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
    console.log('client opened');
  }
}
