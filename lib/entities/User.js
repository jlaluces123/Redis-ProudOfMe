import { Client, Entity, Schema, Repository } from 'redis-om';
import { connect, client } from '../redis';

// TODO: add default photo later

class User extends Entity {}
let schema = new Schema(User, {
  username: {
    type: 'string',
  },
  password: {
    type: 'string',
  },
});

export async function createUser(data) {
  await connect();
  const repository = new Repository(schema, client);
  const user = repository.createEntity(data);
  const id = await repository.save(user);
  return id;
}
