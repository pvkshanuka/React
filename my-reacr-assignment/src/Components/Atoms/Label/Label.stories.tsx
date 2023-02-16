import { Meta, Story } from "@storybook/react";
import { Label, LabelProps } from "./Label";

export default {
  component: Label,
  title: "Atoms/Label",
} as Meta;

const Template: Story<LabelProps> = (args: LabelProps) => {
  return <Label {...args}></Label>;
};

export const Playground = Template.bind({});

Playground.args = {
  text: "Label One",
  variant: "title1",
};
