import useToast from "../useToast";
import AppProvider from "../../../utilities/context/AppContext";
import Toast from "../component/Toast";
import { Button } from "../../Button/Button";
import { Home } from "react-feather";
import { HorizontalFlex } from "../../HorizontalFlex/HorizontalFlex";

export default {
  title: "components/Toast",
  component: Toast,
  decorators: [
    (Story: any) => (
      <AppProvider>
        <Story />
      </AppProvider>
    ),
  ],
  argTypes: {
    content: {
      description: `Message to be displayed inside toast (<b style="color:red">required</b>)`,
      control: {
        type: "text",
      },
      defaultValue: "Welcome",
    },
    duration: {
      description: "set timer for toast",
      control: {
        type: "number",
      },
      defaultValue: 3000,
    },
    hasDestroyIcon: {
      description: "Close toast on button click",
      control: {
        type: "boolean",
      },
      defaultValue: true,
    }
  },
};

const Template = ({ ...rest }) => {
  const showToast = useToast();
  return (
    <HorizontalFlex gap={12}>
      <Button
        color="Waiting"
        onClick={() =>
          showToast({
            content: "Welcome",
            duration: rest.duration,
            hasDestroyIcon: true,
            color: "information",
            action: { children: "Okay" },
            prefixIcon: <Home size={16} color="#ffffff" />,
          })
        }
        children=" information"
      />
      <Button
       color="Positive"
        onClick={() =>
          showToast({
            content: "Welcome",
            duration: rest.duration,
            hasDestroyIcon: true,
            color: "positive",
            action: { children: "Okay" },
            prefixIcon: <Home size={16} color="#ffffff" />,
          })
        }
        children=" positive"
      />
      <Button
        color="Negative"
        onClick={() =>
          showToast({
            content: "Welcome",
            duration: rest.duration,
            hasDestroyIcon: true,
            color: "negative",
            action: { children: "Okay" },
            prefixIcon: <Home size={16} color="#ffffff" />,
          })
        }
        children=" negative"
      />
      <Button
        color="Waiting"
        onClick={() =>
          showToast({
            content: "Welcome",
            duration: rest.duration,
            hasDestroyIcon: true,
            color: "notice",
            action: { children: "Okay" },
            prefixIcon: <Home size={16} color="#ffffff" />,
          })
        }
        children=" notice"
      />
        <Button
        onClick={() =>
          showToast({
            content: "Welcome",
            duration: rest.duration,
            hasDestroyIcon: true,
            color: "neutral",
            action: { children: "Okay" },
            prefixIcon: <Home size={16} color="#ffffff" />,
          })
        }
        children=" neutral"
      />
    </HorizontalFlex>
  );
};
export const Primary = Template.bind({});
