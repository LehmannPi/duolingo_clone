import { getLesson, getUserProgress } from '@/db/queries';
import { redirect } from 'next/navigation';
import { Quiz } from './quiz';

type Props = {};

const LessonPage = async () => {
  const lessonData = getLesson();
  const userprogressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userprogressData,
  ]);

  if (!userProgress || !lesson) redirect('/learn');

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialHearts={userProgress.hearts}
      initialLessonChallenges={lesson.challenges}
      initialLessonId={lesson.id}
      initialPercentage={initialPercentage}
      userSubscription={null}
    />
  );
};

export default LessonPage;
