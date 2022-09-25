import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../src/components/Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputStory = Template.bind({});
InputStory.args = {
  id: '1',
  label: 'label',
};
