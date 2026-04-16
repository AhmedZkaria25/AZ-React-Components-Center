import React from 'react';
import styles from './FullComponentPopupModal.module.css';
import type { Card } from '../data/dummyData';

interface Props {
  isOpen: boolean;
  card: Card | null;
  onClose: () => void;
}

const FullComponentPopupModal: React.FC<Props> = ({ isOpen, card, onClose }) => {
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
            className={styles.activeTab}
            type='button'
          >
            Component
          </button>
        </div>

        <div className={styles.preview}>{card.component}</div>
      </div>
    </div>
  );
};

export default FullComponentPopupModal;
