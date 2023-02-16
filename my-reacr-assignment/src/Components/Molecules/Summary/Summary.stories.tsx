import { Meta, Story } from "@storybook/react";
import { Summary, SummaryProps } from "./Summary";

export default {
  component: Summary,
  title: "Molecules/Summary",
} as Meta;

const Template: Story<SummaryProps> = (args: SummaryProps) => {
  return <Summary {...args} />;
};

export const Playground = Template.bind({});

Playground.args = {
  orgCount: 20,
  userCount: 326,
};
