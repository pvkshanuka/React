import { Meta, Story } from "@storybook/react";
import { Image, ImageProps } from "./Image";


export default{
    component: Image,
    title: "Atoms/Image"
} as Meta

const Template: Story<ImageProps> = (args: ImageProps) => {
    return <Image {...args}></Image>
}

export const PLayground = Template.bind({})
PLayground.args = {
    src: "https://www.adequatetravel.com/Social/assets/images/noti3.png",
    alt: "sample image",
    variant: "sm"
}