import { cn } from '@/lib/utils';
import { ChallengeStatus } from './challenge';
import { Button } from '@/components/ui/button';
import { useKey, useMedia } from 'react-use';
import { CheckCircle, XCircle } from 'lucide-react';

type Props = {
  onCheck: () => void;
  status: ChallengeStatus;
  disabled?: boolean;
  lessonId?: boolean;
};

export const Footer = ({ onCheck, status, disabled, lessonId }: Props) => {
  useKey('Enter', onCheck, {}, [onCheck]);
  const isMobile = useMedia('(max-width: 1024px)');
  return (
    <footer
      className={cn(
        'lg:-h[140px] h-[100px] border-t-2',
        status === ChallengeStatus.Correct &&
          'border-transparent  bg-green-100',
        status === ChallengeStatus.Wrong && 'border-transparent bg-rose-100'
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-8 19:px-10">
        {status === ChallengeStatus.Correct && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Nicely done!
          </div>
        )}
        {status === ChallengeStatus.Wrong && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Try again.
          </div>
        )}
        {status === ChallengeStatus.Completed && (
          <Button
            variant={'default'}
            size={isMobile ? 'sm' : 'lg'}
            onClick={() => (window.location.href = `/lessoon/${lessonId}`)}
          >
            Practice again
          </Button>
        )}
        <Button
          disabled={disabled}
          className="ml-auto"
          size={isMobile ? 'sm' : 'lg'}
          variant={status === ChallengeStatus.Wrong ? 'danger' : 'secondary'}
        >
          {status === ChallengeStatus.None && 'Check'}
          {status === ChallengeStatus.Correct && 'Next'}
          {status === ChallengeStatus.Wrong && 'Retry'}
          {status === ChallengeStatus.Completed && 'Continue'}
        </Button>
      </div>
    </footer>
  );
};
