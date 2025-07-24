import { lessons, units } from '@/db/schema';
import { UnitBanner } from './unit-banner';

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
    </>
  );
};
