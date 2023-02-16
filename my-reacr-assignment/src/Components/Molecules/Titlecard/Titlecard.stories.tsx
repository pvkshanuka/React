import { Meta, Story } from "@storybook/react";
import { Titlecard } from "./Titlecard";

export default {
  component: Titlecard,
  title: "Molecules/TitleCard",
} as Meta;

const Template: Story = () => {
  return <Titlecard />;
};

export const Playground = Template.bind({});
