import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';
import type { InputFieldProps } from './InputField.types';

const meta: Meta<InputFieldProps> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    value: { control: 'text' },
    variant: { control: 'radio', options: ['filled', 'outlined', 'ghost'] },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    type: { control: 'radio', options: ['text', 'password'] },
    theme: { control: 'radio', options: ['light', 'dark'] },
  },
};
export default meta;
type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This is a helper text',
    variant: 'outlined',
    size: 'md',
    value: '',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    errorMessage: 'Invalid email',
    invalid: true,
    value: 'bad@',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Disabled input',
    disabled: true,
    value: '',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    value: '',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    loading: true,
    value: '',
  },
};
