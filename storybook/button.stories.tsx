import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  label: 'label',
};
