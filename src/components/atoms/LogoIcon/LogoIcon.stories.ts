import type { Meta, StoryObj } from '@storybook/react';
import LogoIcon from './LogoIcon';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LogoIcon> = {
  component: LogoIcon,
};

export default meta;
type Story = StoryObj<typeof LogoIcon>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
