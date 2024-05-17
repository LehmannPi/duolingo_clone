import db from '@/db/drizzle';
import { cache } from 'react';

// ? Makes it not care if it's called in many places throught the code. It calls the DB only once
export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();
  return data;
});
