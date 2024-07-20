import { Card } from "../../Card/Card";
import { TextStyle } from "../../TextStyle/TextStyle";
import { HorizontalFlex } from "../../HorizontalFlex/HorizontalFlex";
import CopyClipboard from "../../CopyClipboard/CopyClipboard";
import UsedColor from "./UsedColor";

export default {
    title: "Foundation/UsedColor",

    decorators: [(Story: any) => <Story />],
    component: UsedColor,
    parameters: {
        docs: {},
        controls: { hideNoControlsWarning: true },
        design: {
            type: "figma",
            url: "",
        },
    },
};

const Template = () => {
    // const useToasts = useToast();

    return (
        <>
            <UsedColor />
        </>
    );
};
export const Primary: any = Template.bind({});
