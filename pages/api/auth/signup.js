import { connectToDatabase } from '../../../lib/db';

import { hashPassword } from './auth';

async function handler(req, res) {
  if (req.method === !'POST') {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (!email || !email.includes('@') || !password || password.trim().length < 3) {
    res.status(422).json({ message: 'Invalid input' });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    // console.log('existingUser', existingUser);

    res.status(422).json({ message: 'User already exists' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({ email: email, password: hashedPassword });

  res.status(201).json({ message: 'Created user!' });
  client.close();
}

export default handler;
