import React from 'react';
import type { InputFieldProps } from './InputField.types';
import styles from './InputField.module.css';

const InputField: React.FC<InputFieldProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  clearable = false,
  type = 'text',
  loading = false,
  theme = 'light',
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div className={`${styles.inputField} ${styles[variant]} ${styles[size]} ${styles[theme]}${disabled ? ' ' + styles.disabled : ''}${invalid ? ' ' + styles.invalid : ''}`}
      aria-disabled={disabled}
      aria-invalid={invalid}
    >
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          aria-label={label || placeholder}
        />
        {clearable && value && !disabled && (
          <button type="button" className={styles.clearBtn} onClick={() => onChange?.({ target: { value: '' } } as any)} aria-label="Clear input">×</button>
        )}
        {isPassword && (
          <button type="button" className={styles.toggleBtn} onClick={() => setShowPassword((s) => !s)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
        {loading && <span className={styles.loader} aria-label="Loading..." />}
      </div>
      {helperText && !invalid && <div className={styles.helperText}>{helperText}</div>}
      {invalid && errorMessage && <div className={styles.errorText}>{errorMessage}</div>}
    </div>
  );
};

export default InputField;
