import React, { useState } from 'react';
import { Card, TodoItems_1 } from '../data/dummyData';
import { TemplatesCardsData } from 'data/TemplatesCardsData';
import TodoHeader_1 from './1_Todo_List_2/components/TodoHeader';
import TodoItem_1 from './1_Todo_List_2/components/TodoItem';
import PopupModal from './PopupModal';
import styles from './TemplatesCards.module.css';
import { fetchComponents, fetchStyles } from '../helpers/helpers';


const TemplatesCards: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [activeTab, setActiveTab] = useState<'code' | 'style'>('code');

  const openModal = (card: Card) => {
    setSelectedCard(card);
    setActiveTab('code');
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const coms= [
    <TodoHeader_1 items={[]} addItem={()=>{}} />,
    <TodoItem_1 items={TodoItems_1} />
  ];


  fetchComponents('1_Todo_List_2', 'TodoHeader.js', TemplatesCardsData, 0, 'code');
  fetchComponents('1_Todo_List_2', 'TodoItem.js', TemplatesCardsData, 1, 'code');
  
  fetchStyles('1_Todo_List_2', 'Todo.module.css', TemplatesCardsData, 0, 'style');
  fetchStyles('1_Todo_List_2', 'Todo.module.css', TemplatesCardsData, 1, 'style');


  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {TemplatesCardsData.map((card, index) => (
          <div key={index} className={styles.card} onClick={() => openModal(card)}>
            <div className={styles.preview}>{coms[index]}</div>
            <div className={styles.body}>
              <h3 className={styles.title}>{card.title}</h3>
              <h6 className={styles.titleSmall}>#1 Todo List 2</h6>
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

export default TemplatesCards;