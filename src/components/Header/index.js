import React from 'react';
import styles from './index.styl';

export default function Header(props) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={require('./logo-icon.png')} alt="Logo" />
      </div>
    </header>
  );
}
