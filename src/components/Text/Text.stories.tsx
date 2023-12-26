import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "Text/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    as: "span",
    children: "텍스트 컴포넌트 입니다.",
    display: "flex",
    color: "blue",
    lineHeight: "1.5",
    weight: "bold",
    size: "36px",
    align: "center",
    family: "sans-serif",
  },
};

export const Body: Story = {
  args: {
    as: "span",
    size: "16px",
    children: "텍스트 컴포넌트 입니다.",
  },
};
