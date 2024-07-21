import '../Skeleton.scss'
export interface SkeletonThumbnailI {
    size?: "ExtraSmall" | "Small" | "Medium" | "Large";
}

export const SkeletonThumbnail = ({
    size = "Medium",
    ...props
}: SkeletonThumbnailI) => {
    const checkSize = (): string => {
        switch (size) {
            case "ExtraSmall":
                return "skeletonThumbnail--extraSmall";
            case "Small":
                return "skeletonThumbnail--small";
            case "Medium":
                return "skeletonThumbnail--medium";
            case "Large":
                return "skeletonThumbnail--large";
            default:
                return "skeletonThumbnail--medium";
        }
    };

    const ThumbnailSize = checkSize();

    return (
        <div className={`skeleton skeletonThumbnail ${ThumbnailSize}`}>
            <div className="skeleton-inner"></div>
        </div>
    );
}

export default SkeletonThumbnail
