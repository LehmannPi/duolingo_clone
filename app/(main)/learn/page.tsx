import FeedWrapper from '@/components/feed-wrapper';
import SickyWrapper from '@/components/sticky-wrapper';
import { UserProgress } from '@/components/user-progress';
import Header from './header';

type Props = {};

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <SickyWrapper>
        <UserProgress
          activeCourses={{ title: 'German', imageSrc: 'de.svg' }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </SickyWrapper>
      <FeedWrapper>
        <Header title="German" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
