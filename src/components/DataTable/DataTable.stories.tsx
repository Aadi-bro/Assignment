import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';
import type { DataTableProps, Column } from './DataTable.types';

interface User {
  id: number;
  name: string;
  email: string;
}

const columns: Column<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];

const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

const meta: Meta<DataTableProps<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    onRowSelect: { action: 'row selected' },
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = {
  args: {
    data,
    columns,
    loading: false,
    selectable: false,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
    selectable: false,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
    loading: false,
    selectable: false,
  },
};

export const Selectable: Story = {
  args: {
    data,
    columns,
    loading: false,
    selectable: true,
  },
};
