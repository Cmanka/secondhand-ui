import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from '../src/components/List';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const ListStory = Template.bind({});
ListStory.args = {
  data: ['1', '2', '3'],
  children: (str) => <div key={str}>{str}</div>,
};
