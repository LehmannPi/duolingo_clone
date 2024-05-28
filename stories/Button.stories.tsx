import { Button } from '@/components/ui/button';
import { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'primary',
        'primaryOutline',
        'secondary',
        'secondaryOutline',
        'danger',
        'dangerOutline',
        'super',
        'superOutline',
        'ghost',
        'sidebar',
        'sidebarOutline',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon', 'rounded'],
    },
    asChild: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const PrimaryOutline: Story = {
  args: {
    variant: 'primaryOutline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: 'secondaryOutline',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const DangerOutline: Story = {
  args: {
    variant: 'dangerOutline',
  },
};

export const Super: Story = {
  args: {
    variant: 'super',
  },
};

export const SuperOutline: Story = {
  args: {
    variant: 'superOutline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Sidebar: Story = {
  args: {
    variant: 'sidebar',
  },
};

export const SidebarOutline: Story = {
  args: {
    variant: 'sidebarOutline',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🔍',
  },
};

export const Rounded: Story = {
  args: {
    size: 'rounded',
    children: '🔍',
  },
};
