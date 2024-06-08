import { redirect } from 'next/navigation';

import FeedWrapper from '@/components/feed-wrapper';
import SickyWrapper from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import { getUnits, getUserProgress } from '@/db/queries';

import Header from './header';

const LearnPage = async () => {
  const unitsDataPromise = getUnits();
  const userUserProgressPromise = getUserProgress();

  const [units, userProgress] = await Promise.all([
    unitsDataPromise,
    userUserProgressPromise,
  ]);

  // ! This clause enables us to not have to use optional chain in UserProgress props
  if (!userProgress || !userProgress.activeCourse) return redirect('/courses');

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
              description={unit.description}
              lessons={unit.lessons}
              activeLesson={null}
              activeLessonPercentage={0}
            />
            {JSON.stringify(unit)}
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
