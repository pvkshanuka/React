import { Meta, Story } from "@storybook/react";
import { NavbarProps } from "react-bootstrap";
import { Label } from "../../Atoms/Label/Label";
import { Navbar } from "./Navbar";


export default {
  component: Navbar,
  title: "Molecules/Navbar",
} as Meta;

const Template: Story<NavbarProps> = (args: NavbarProps) => {
  return <Navbar {...args}><Label text="User Jems" variant="title2"></Label></Navbar>;
};

export const Playground = Template.bind({});
