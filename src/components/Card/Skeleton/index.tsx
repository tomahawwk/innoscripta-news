import Skeleton from 'react-loading-skeleton';

const SkeletonCard = ({...props}) => {
  return (
    <div className="skeleton-card">
      <Skeleton
        count={6}
        {...props}
        baseColor="#d5c8c5"
        highlightColor="#e5d2c6"
      />
    </div>
  );
};

export default SkeletonCard;
