import { neon } from '@neondatabase/serverless';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Seeding the database');

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      { id: 1, title: 'German', imageSrc: './de.svg' },
      { title: 'Portuguese', imageSrc: './br.svg' },
      { title: 'English', imageSrc: './us.svg' },
      { title: 'Italian', imageSrc: './it.svg' },
      { title: 'Spanish', imageSrc: './es.svg' },
    ]);

    console.log('Seeding finished');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed the database');
  }
};

main();