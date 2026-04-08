import React, { useState } from 'react';
import { FormCards, Card } from '../data/dummyData';
import PopupModal from './PopupModal';
import styles from './GridCards.module.css';

const GridCards: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [activeTab, setActiveTab] = useState<'code' | 'style'>('code');

  const openModal = (card: Card) => {
    setSelectedCard(card);
    setActiveTab('code');
  };

  const closeModal = () => {
    setSelectedCard(null);
    console.log('ccccccccc', activeTab);
  };

  const coms= [
    <button
      style={{
        padding: '10px 20px',
        backgroundColor: '#61dafb',
        color: '#282c34',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 500,
      }}
      type='button'
    >
      Click Me
    </button>,
    <input
      type="text"
      placeholder="Enter text..."
      style={{
        padding: '10px',
        border: '2px solid #61dafb',
        borderRadius: '4px',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: '#f7f7f7',
        color: '#282c34',
      }}
    />
  ]

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {FormCards.map((card, index) => (
          <div key={card.id} className={styles.card} onClick={() => openModal(card)}>

            {/* <div className={styles.preview}>{card.component}</div>  */}
            <div className={styles.preview}>{coms[index]}</div>
            <div className={styles.body}>
              <h3 className={styles.title}>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <PopupModal
        isOpen={Boolean(selectedCard)}
        card={selectedCard}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onClose={closeModal}
      />
    </div>
  );
};

export default GridCards;