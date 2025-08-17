import React from 'react';
import type { DataTableProps, Column } from './DataTable.types';
import styles from './DataTable.module.css';

function sortData<T>(data: T[], column: Column<T>, direction: 'asc' | 'desc') {
  return [...data].sort((a, b) => {
    const aValue = a[column.dataIndex];
    const bValue = b[column.dataIndex];
    if (aValue === bValue) return 0;
    if (direction === 'asc') return aValue > bValue ? 1 : -1;
    return aValue < bValue ? 1 : -1;
  });
}

function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('asc');
  const [selected, setSelected] = React.useState<Set<number>>(new Set());

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    const col = columns.find((c) => c.key === sortKey && c.sortable);
    if (!col) return data;
    return sortData(data, col, sortDir);
  }, [data, columns, sortKey, sortDir]);

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const handleSelect = (idx: number) => {
    const newSelected = new Set(selected);
    if (newSelected.has(idx)) newSelected.delete(idx);
    else newSelected.add(idx);
    setSelected(newSelected);
    onRowSelect?.(Array.from(newSelected).map((i) => sortedData[i]));
  };

  return (
    <div className={styles.dataTable} aria-busy={loading}>
      <table>
        <thead>
          <tr>
            {selectable && <th></th>}
            {columns.map((col) => (
              <th key={col.key}>
                <button
                  className={styles.sortBtn}
                  onClick={() => col.sortable && handleSort(col.key)}
                  aria-label={col.sortable ? `Sort by ${col.title}` : undefined}
                  disabled={!col.sortable}
                >
                  {col.title}
                  {sortKey === col.key && (sortDir === 'asc' ? ' ▲' : ' ▼')}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan={columns.length + (selectable ? 1 : 0)} className={styles.loading}>Loading...</td></tr>
          ) : sortedData.length === 0 ? (
            <tr><td colSpan={columns.length + (selectable ? 1 : 0)} className={styles.empty}>No data</td></tr>
          ) : (
            sortedData.map((row, idx) => (
              <tr key={idx} className={selected.has(idx) ? styles.selected : ''}>
                {selectable && (
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.has(idx)}
                      onChange={() => handleSelect(idx)}
                      aria-label={`Select row ${idx + 1}`}
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td key={col.key}>{row[col.dataIndex]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
