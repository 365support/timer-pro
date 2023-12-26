import type { Meta, StoryObj } from "@storybook/react";
import CustomText from "./CustomText";

const meta = {
  title: "Text/CustomText",
  component: CustomText,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CustomText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    as: "title",
    size: "xxs",
    children: "텍스트 컴포넌트 입니다.",
    display: "flex",
    color: "blue",
    lineHeight: "1.5",
    weight: "bold",
    align: "center",
    family: "sans-serif",
  },
};

export const Body: Story = {
  args: {
    as: "body",
    size: "xs",
    children: "텍스트 컴포넌트 입니다.",
  },
};

export const Caption: Story = {
  args: {
    as: "caption",
    size: "xs",
    children: "텍스트 컴포넌트 입니다.",
  },
};
