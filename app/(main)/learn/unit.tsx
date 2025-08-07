import { lessons, units } from '@/db/schema';
import { UnitBanner } from './unit-banner';
import { LessonButton } from './lesson-button';

type Lesson = typeof lessons.$inferSelect;

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (Lesson & { completed: boolean })[];
  activeLesson: (Lesson & { unit: typeof units.$inferSelect }) | undefined;
  activeLessonPercentage: number;
};

export const Unit = ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
