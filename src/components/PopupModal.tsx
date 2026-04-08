import React from 'react';
import styles from './PopupModal.module.css';
import type { Card } from '../data/dummyData';

interface Props {
  isOpen: boolean;
  card: Card | null;
  activeTab: 'code' | 'style';
  onTabChange: (value: 'code' | 'style') => void;
  onClose: () => void;
}

const PopupModal: React.FC<Props> = ({ isOpen, card, activeTab, onTabChange, onClose }) => {
  if (!isOpen || !card) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{card.title}</h2>
          <button className={styles.close} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.tabs}>
          <button
            className={activeTab === 'code' ? styles.activeTab : styles.tab}
            onClick={() => onTabChange('code')}
            type='button'
          >
            JavaScript
          </button>
          <button
            className={activeTab === 'style' ? styles.activeTab : styles.tab}
            onClick={() => onTabChange('style')}
            type='button'
          >
            CSS
          </button>
        </div>

        <div className={styles.body}>
          <pre className={styles.pre}>
            <code className={styles.code}>{activeTab === 'code' ? card.code : card.style}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
