import { useRef, useState } from "react";
import { Actionlist } from "./Actionlist";
import { Button } from "../Button/Button";
import { Crosshair, Download, FileText, RefreshCcw, Slash } from "react-feather";

export default {
  title: "Components/Actionlist",
  component: Actionlist,
  tags: ["autodocs"],
};

const Template = ({ ...rest }) => {
  const [active, setActive] = useState(false);
  const btnRef = useRef<any>(null);
  return (
    <Actionlist
      open={active}
      onClose={() => setActive(false)}
      ref={btnRef}
      activator={
        <Button ref={btnRef} onClick={() => setActive(!active)} children="ActionList" />
      }
      options={[
        {
          items: [
            {
              content: "Action 1",
              onClick: () => alert("Hello 1"),
              
            },
            {
              content: "Action 2",
              onClick: () => alert("Hello 2"),
            },
            {
              content: "Action 2",
              onClick: () => alert("Hello 3"),
            },
          ],
        },
      ]}
    />
  );
};

export const ActionList_with_GroupedOption: any = Template.bind({});

ActionList_with_GroupedOption.decorators = [
  () => {
    const [active1, setActive1] = useState(false);
    const btnRef1 = useRef<any>(null);

    return (
      <Actionlist
        onClose={() => setActive1(false)}
        ref={btnRef1}
        activator={
          <Button ref={btnRef1} variant="Tertiary" onClick={() => {
            setActive1(!active1)
          }} children="ActionList" />
        }
        open={active1}
        options={[
          {
            title: "title 1",
            items: [
              {
                content: "Action 1 1",
                onClick: () => alert("Hello 1 1"),
                prefixIcon: <Download size={15} />,
                description: "Lore ipsum",
                suffixIcon: <Download size={15} />,
                destructive: true,
              },
              {
                content: "Action 1 2",
                onClick: () => alert("Hello 1 2"),
                prefixIcon: <FileText size={15} />
              },
              {
                content: "Action 1 3",
                onClick: () => alert("Hello 1 3"),
                prefixIcon: <RefreshCcw size={15} />
              },
            ],
          },
          {
            title: "title 2",
            items: [
              {
                content: "Action 2 1",
                onClick: () => alert("Hello 2 1"),
              },
              {
                content: "Action 2 2",
                onClick: () => alert("Hello 2 2"),
              },
              {
                content: "Action 2 3",
                onClick: () => alert("Hello 2 3"),
              },
            ],
          },
          {
            title: "title 3",
            items: [
              {
                content: "Action 3 1",
                onClick: () => alert("Hello 2 1"),
              },
              {
                content: "Action 3 2",
                onClick: () => alert("Hello 2 2"),
              },
              {
                content: "Action 3 3",
                onClick: () => alert("Hello 2 3"),
              },
            ],
          },
          {
            title: "title 4",
            items: [
              {
                content: "Action 4 1",
                onClick: () => alert("Hello 2 1"),
              },
              {
                content: "Action 4 2",
                onClick: () => alert("Hello 2 2"),
              },
              {
                content: "Action 4 3",
                onClick: () => alert("Hello 2 3"),
              },
            ],
          },
        ]}
      />
    );
  },
];
export const Default = Template.bind({});

//Action list prefix icon
export const Action_list_with_prefix_icon: any = Template.bind({});
Action_list_with_prefix_icon.decorators = [
  () => {
    const [active, setActive] = useState(false);
    return (
      <Actionlist
        onClose={() => setActive(false)}
        activator={
          <Button variant="Tertiary" onClick={() => setActive(!active)} children="ActionList" />
        }
        open={active}
        options={[
          {
            items: [
              {
                content: "Download",
                onClick: () => alert("Download"),
                prefixIcon: <Download size={15} />,
              },
              {
                content: "Cancel",
                onClick: () => alert("Hello 1 2"),
                prefixIcon: <Crosshair size={15} />,
                destructive: true,
              },
              {
                content: "Action 1 3",
                onClick: () => alert("Hello 1 3"),
                prefixIcon: <RefreshCcw size={15} />
              },
            ],
          },
        ]}
      />
    );
  },
];

//Action list suffix icon
export const Action_list_with_suffix_icon: any = Template.bind({});
Action_list_with_suffix_icon.decorators = [
  () => {
    const [active, setActive] = useState(false);
    return (
      <Actionlist
        onClose={() => setActive(false)}
        activator={
          <Button variant="Tertiary" onClick={() => setActive(!active)} children="ActionList" />
        }
        open={active}
        options={[
          {

            items: [
              {
                content: "Download",
                onClick: () => alert("Download"),
                suffixIcon: <Download size={15} />,
              },
              {
                content: "Cancel",
                onClick: () => alert("Hello 1 2"),
                suffixIcon: <Crosshair size={15} />,
                destructive: true,
              },
              {
                content: "Action 1 3",
                onClick: () => alert("Hello 1 3"),
                suffixIcon: <RefreshCcw size={15} />
              },
              {
                content: "Dsbaled action",
                onClick: () => alert("Hello 1 3"),
                suffixIcon: <Slash size={15} />,
                isDisabled: true,
              },
            ],
          },
        ]}
      />
    );
  },
];
