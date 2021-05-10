import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ArgoButton, ArgoButtonProps } from '../../components/button/button.component';

export default {
  title: 'Components/Button',
  component: ArgoButton,
} as Meta;

const Template: Story<ArgoButtonProps> = (args) => <ArgoButton {...args}>Texto aqui</ArgoButton>

export const Primary = Template.bind({});
Primary.args = {
  variant: 'outlined',
  colorType: 'primary'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
