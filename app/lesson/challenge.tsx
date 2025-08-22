import { challengeOptions, challenges } from '@/db/schema';
import { cn } from '@/lib/utils';
import React from 'react';
import { Card } from './card';

type Props = {
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: 'correct' | 'wrong' | 'none';
  selectedOption?: number;
  isDisabled?: boolean;
  type: (typeof challenges.$inferSelect)['type'];
};

export const Challenge = ({
  onSelect,
  options,
  status,
  type,
  isDisabled,
  selectedOption,
}: Props) => {
  return (
    <div
      className={cn(
        'grid gap-2',
        type === 'ASSIST' && 'grid-cols-1',
        type === 'SELECT' &&
          'grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]'
      )}
    >
      {options.map((option, i) => (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          imageSrc={option.imageSrc ?? null}
          audioSrc={option.audioSrc ?? null}
          shortcut={`${i + 1}`}
          type={type}
          selected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
          disabled={isDisabled}
          status={status} // Show status only for the selected option
        />
      ))}
    </div>
  );
};
