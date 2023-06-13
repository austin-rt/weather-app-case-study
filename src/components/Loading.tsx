import Lottie from 'lottie-react';
import LoadingAnimation from '../assets/lottie/LoadingAnimation.json';

type Props = {
  className?: string;
};

export default function Loading({ className }: Props) {
  return (
    <div className={`${className}`}>
      <div className='w-72 rounded-3xl bg-slate-50 bg-opacity-5 shadow-2xl'>
        <Lottie animationData={LoadingAnimation} />
      </div>
    </div>
  );
}
