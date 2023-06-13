import Lottie from 'lottie-react';
import ClearNight from '../assets/lottie/ClearNight.json';

type Props = {
  className?: string;
};

export default function Loading({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className='w-64 rounded-3xl bg-slate-50 bg-opacity-10 p-1 px-2 shadow-2xl'>
        <Lottie animationData={ClearNight} />
      </div>
    </div>
  );
}
