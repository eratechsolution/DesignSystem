import { SkeletonCustom } from "./SkeletonCustom";
export default {
    title: "components(Done)/Skeleton/SkeletonCustom",
    component: SkeletonCustom,
    tags: ["autodocs"],
    argTypes: {

    },
};
const Template = ({ ...rest }) => {
    return (
        <SkeletonCustom width={rest.width} height={rest.height} radius={rest.radius}  />
    );
};
export const Primary = Template.bind({});

