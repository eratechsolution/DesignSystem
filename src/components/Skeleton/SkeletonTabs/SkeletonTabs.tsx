import '../Skeleton.scss'
export interface SkeletonTabsI {
  numberOfTabs?: number;
}

export const SkeletonTabs = ({
  numberOfTabs = 5,
  ...props
}: SkeletonTabsI) => {


  //const ThumbnailSize = checkSize();

  return (
    <div className={`SkeletonTabs`}>
      {Array.from({ length: numberOfTabs }, () => (
        <div className="skeleton SkeletonTabs-item">
          <div className="skeleton-inner"></div>
        </div>
      ))}
    </div>
  );
}
export default SkeletonTabs;

