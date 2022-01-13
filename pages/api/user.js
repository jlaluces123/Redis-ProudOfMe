import { createUser } from '../../lib/entities/User';

export default async function handler(req, res) {
  const id = await createUser(req.body);
  console.log('id: ', id);
  res.status(201).json({ id });
}
