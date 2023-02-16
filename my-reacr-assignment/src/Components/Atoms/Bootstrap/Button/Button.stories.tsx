import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { Meta, Story } from "@storybook/react";

export default {
  component: Button,
  title: "Material/Button",
  argTypes: {
    variant: {
      options: ["text", "contained", "outlined"],
      control: {
        type: "select",
      },
    },
    color: {
      options: ["info", "error", "inherit", "error", "primary", "secondary", "success"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "select",
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>{args.value}</Button>;
};

export const Playground = Template.bind({});
Playground.args = {
  variant: "contained",
  color: "info",
  value: "Button",
  disabled: false,
  size: "medium"
};
