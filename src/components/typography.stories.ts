import type {Meta, StoryObj} from '@storybook/react';
import {H1} from "./typography";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Typography',
  component: H1,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Hello World',
  },
};
