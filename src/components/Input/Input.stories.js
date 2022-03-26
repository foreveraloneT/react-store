import React from 'react'

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: true },
    onClick: { action: true },
    onFocus: { action: true },
    onBlur: { action: true },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 640 }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args, { argTypes }) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  value: '',
  placeholder: 'Keyword...',
};
