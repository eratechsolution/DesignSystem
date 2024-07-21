import '../Skeleton.scss'
export interface SkeletonListI {
    numberOfList?: number;
}

export const SkeletonList = ({
    numberOfList = 5,
    ...props
}: SkeletonListI) => {


    //const ThumbnailSize = checkSize();

    return (
        <div className={`SkeletonList`}>
            {Array.from({ length: numberOfList }, () => (
                <div className="SkeletonList-item">
                    <div className="skeleton SkeletonList-item__thumbnail">
                        <div className="skeleton-inner"></div>
                    </div>
                    <div className="skeleton SkeletonList-item__content">
                        <div className="skeleton-inner"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default SkeletonList;

