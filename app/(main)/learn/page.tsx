import { redirect } from 'next/navigation';

import { lessons, units as unitsSchema } from '@/db/schema';
import FeedWrapper from '@/components/feed-wrapper';
import SickyWrapper from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';

import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from '@/db/queries';

import Header from './header';
import { Unit } from './unit';

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();

  const [units, userProgress, courseProgress, lessonPercentage] =
    await Promise.all([
      unitsData,
      userProgressData,
      courseProgressData,
      lessonPercentageData,
    ]);

  // ! This clause enables us to not have to use optional chain in UserProgress props
  if (!userProgress || !userProgress.activeCourse || !courseProgress)
    return redirect('/courses');

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <SickyWrapper>
        <UserProgress
          activeCourses={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </SickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              title={unit.title}
              description={unit.description}
              lessons={unit.lessons}
              activeLesson={
                courseProgress.activeLesson as
                  | (typeof lessons.$inferSelect & {
                      unit: typeof unitsSchema.$inferSelect;
                    })
                  | undefined
              }
              activeLessonPercentage={lessonPercentage}
            />
            {/* {JSON.stringify(unit)} */}
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
