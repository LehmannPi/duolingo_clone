'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import db from '@/db/drizzle';
import { getCourseById, getUserProgress } from '@/db/queries';
import { userProgress } from '@/db/schema';

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    // * Behave like it's an API call
    throw new Error('Unauthorized');
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error('Course not found');
  }

  // TODO: Enable when units & lessons present
  // if(!course.units.length || !course.units[0].lessons.length{
  //   throw new Error("Course is empty")
  // })

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || 'User', // ? As of the default on schema.ts
      userImageSrc: user.imageUrl || '/mascot.svg', // ? As of the default on schema.ts
    });

    revalidatePath('/courses');
    revalidatePath('/learn');
    redirect('/learn');
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || 'User',
    userImageSrc: user.imageUrl || '.mascot.svg',
  });

  revalidatePath('/courses');
  revalidatePath('/learn');
  redirect('/learn');
};
