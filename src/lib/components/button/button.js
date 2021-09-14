import React from 'react';

// styles
import styles from './button.module.scss';

export default function Button({
  children,
  disabled,
  type = '',
  inverted,
  forwardRef,
  className = '',
  style,
  onClick,
}) {
  const _style = {
    ...style,
  };

  switch (type) {
    case 'save':
      _style.background = '#42ab56';
      break;
    case 'edit':
      _style.background = '#f0ad4e';
      break;
    case 'delete':
      _style.background = '#e51937';
      break;
    case 'cancel':
      _style.background = '#b93ab9';
      break;
    default:
      _style.background = '#fffff';
  }

  return (
    <button
      className={`${styles.button} ${className} ${inverted && styles.inverted}`}
      disabled={disabled}
      ref={forwardRef}
      style={_style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
