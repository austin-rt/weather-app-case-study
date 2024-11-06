import Lottie from 'lottie-react';
import LoadingAnimation from '../assets/lottie/LoadingAnimation.json';

export default function Loading() {
  return (
    <div className='flex w-1/2 flex-col items-center py-8'>
      <div className='w-72 rounded-3xl bg-slate-50 bg-opacity-5 shadow-2xl'>
        <Lottie animationData={LoadingAnimation} />
      </div>
    </div>
  );
}
