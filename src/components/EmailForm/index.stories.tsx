//write a storybook for the email 

import React from 'react';
import { Story, Meta } from '@storybook/react';
import EmailForm from './index';

export default {
    title: 'Components/Molecules/Email',
    component: EmailForm,
} as Meta;

const Template: Story = (args) => <EmailForm {...args} />;
export const Email = Template.bind({});
Email.args = {
    /*👇 The args you need here will depend on your component */
};

//write a test for the email
