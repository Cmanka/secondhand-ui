import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '../src/components/Box';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const BoxStory = Template.bind({});
BoxStory.args = {
  backgroundColor: 'black',
  color: 'red',
  children: 'content',
};
