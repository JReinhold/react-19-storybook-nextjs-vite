import type { Meta, StoryObj } from "@storybook/react";
import {Card} from "./card.tsx";

const meta = {
    title: "Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    decorators: (story) => (
        <div className="grid">
            {story()}
        </div>
    )
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Search",
        children: "Find in-depth information online via Google",
        href: "https://google.com",
    },
};
