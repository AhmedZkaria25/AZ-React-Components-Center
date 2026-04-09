import React, { useState } from 'react';
import { BudgetTrackerItems_2, Card, TodoItems_1 } from '../data/dummyData';
import { TemplatesCardsData } from 'data/TemplatesCardsData';

import TodoHeader_1 from './1_Todo_List_2/components/TodoHeader';
import TodoItem_1 from './1_Todo_List_2/components/TodoItem';

import Login_2 from './2_React_Firebase/components/Auth/Login';
import SignUp_2 from './2_React_Firebase/components/Auth/SignUp';
import UserAuth_2 from './2_React_Firebase/components/Auth/UserAuth';
import Header_2 from './2_React_Firebase/components/Header/Header';
import Input_2 from './2_React_Firebase/components/Input/Input';
import Item_2 from './2_React_Firebase/components/Item/Item';
import ItemList_2 from './2_React_Firebase/components/Item List/ItemList';
import Navbar_2 from './2_React_Firebase/components/Navbar/Navbar';
import PhotoGrid_2 from './2_React_Firebase/components/Photo Grid/PhotoGrid';

import PopupModal from './PopupModal';
import styles from './TemplatesCards.module.css';
import { fetchComponents, fetchComponentsStyles, fetchStyles } from '../helpers/helpers';


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
    <TodoItem_1 items={TodoItems_1} />,
    <Login_2 />,
    <SignUp_2 />,
    <UserAuth_2 />,
    <Header_2 />,
    <Input_2 />,
    <Item_2 item={BudgetTrackerItems_2[0]} />,
    <ItemList_2 />,
    <Navbar_2 />,
    <PhotoGrid_2 />
  ];


  fetchComponents('1_Todo_List_2', 'TodoHeader.js', TemplatesCardsData, 0, 'code');
  fetchStyles('1_Todo_List_2', 'Todo.module.css', TemplatesCardsData, 0, 'style');
  
  fetchComponents('1_Todo_List_2', 'TodoItem.js', TemplatesCardsData, 1, 'code');  
  fetchStyles('1_Todo_List_2', 'Todo.module.css', TemplatesCardsData, 1, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Auth', 'Login.js', TemplatesCardsData, 2, 'code');
  fetchComponentsStyles('2_React_Firebase', 'Auth', 'SignUp.js', TemplatesCardsData, 3, 'code');
  fetchComponentsStyles('2_React_Firebase', 'Auth', 'UserAuth.js', TemplatesCardsData, 4, 'code');
  [2, 3, 4].map(fileObjectIndex => {
    fetchComponentsStyles('2_React_Firebase', 'Auth', 'account.module.css', TemplatesCardsData, fileObjectIndex, 'style');
  });
  
  fetchComponentsStyles('2_React_Firebase', 'Header', 'Header.js', TemplatesCardsData, 5, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Header', 'header.module.css', TemplatesCardsData, 5, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Input', 'Input.js', TemplatesCardsData, 6, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Input', 'input.module.css', TemplatesCardsData, 6, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Item', 'Item.js', TemplatesCardsData, 7, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Item', 'item.module.css', TemplatesCardsData, 7, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Item%20List', 'ItemList.js', TemplatesCardsData, 8, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Item%20List', 'itemList.module.css', TemplatesCardsData, 8, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Navbar', 'Navbar.js', TemplatesCardsData, 9, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Navbar', 'navbar.module.css', TemplatesCardsData, 9, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Photo%20Grid', 'PhotoGrid.js', TemplatesCardsData, 10, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Photo%20Grid', 'photoGrid.module.css', TemplatesCardsData, 10, 'style');



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