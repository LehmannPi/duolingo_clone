import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default Loading;
