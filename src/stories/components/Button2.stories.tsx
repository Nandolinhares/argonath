import { Meta } from '@storybook/react';
import React from 'react';
import Button from '../../components/button/button.component';

export default {
  title: 'Example/Button2',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Button2 = () => <Button>Botão</Button>
