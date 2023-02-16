import { Meta, Story } from "@storybook/react";
import { Navbaritem, NavbaritemProps } from "./Navbaritem";

export default {
  component: Navbaritem,
  title: "Molecules/Navbaritem",
} as Meta;

const Template: Story<NavbaritemProps> = (args: NavbaritemProps) => {
  return <Navbaritem {...args} />;
};

export const Playground = Template.bind({});
Playground.args = {
  text: "Organization",
  refer: "",
};
