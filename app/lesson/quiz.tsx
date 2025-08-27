'use client';

import { challengeOptions, challenges } from '@/db/schema';
import React, { useState } from 'react';
import { Header } from './header';
import { QuestionBubble } from './question-bubble';
import { Challenge, ChallengeStatus } from './challenge';

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any; // TODO: Replace with subs DB type
};

export const Quiz = ({
  initialHearts,
  initialLessonChallenges,
  initialLessonId,
  initialPercentage,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = initialLessonChallenges.findIndex(
      (c) => !c.completed
    );
    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<ChallengeStatus>(ChallengeStatus.None);

  const challenge = challenges[activeIndex];
  const options = challenge.challengeOptions ?? [];

  const onSelect = (id: number) => {
    if (status !== ChallengeStatus.None) return;

    setSelectedOption(id);
  };

  const title =
    challenge.type === 'ASSIST'
      ? 'Select the correct meaning'
      : challenge.question;

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[250px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              {title}
            </h1>
            <div>
              {challenge.type === 'ASSIST' && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challenge
                onSelect={onSelect}
                options={options}
                status={ChallengeStatus.None}
                type={challenge.type}
                isDisabled={false}
                selectedOption={selectedOption}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
