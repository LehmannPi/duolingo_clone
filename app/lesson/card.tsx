import { challenges } from '@/db/schema';

type Props = {
  id: number;
  imageSrc: string | null;
  audioSrc: string | null;
  text: string;
  shortcut: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  status?: 'correct' | 'wrong' | 'none';
  type: (typeof challenges.$inferSelect)['type'];
};

export const Card = ({
  audioSrc,
  id,
  imageSrc,
  shortcut,
  text,
  type,
  disabled,
  onClick,
  selected,
  status,
}: Props) => {
  return <div>Card</div>;
};
