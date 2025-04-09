import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ContentSkeletonProps {
  count: number;
}

export default function ContentSkeleton({ count }: ContentSkeletonProps) {
  return Array(count)
    .fill(0)
    .map((_, index) => <Skeleton height={155} key={index} />);
}
