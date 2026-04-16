import React, { useState } from 'react';
import { BudgetTrackerItems_2, Card, TodoItems_1 } from '../data/dummyData';
import { OrganismsCardsData } from '../data/OrganismsCardsData';

import TodoHeader_1 from './1_Todo_List_2/components/TodoHeader';
import TodoItem_1 from './1_Todo_List_2/components/TodoItem';

import Login_2 from './2_React_Firebase/components/Auth/Login';
import SignUp_2 from './2_React_Firebase/components/Auth/SignUp';
// import UserAuth_2 from './2_React_Firebase/components/Auth/UserAuth';
import Header_2 from './2_React_Firebase/components/Header/Header';
import Input_2 from './2_React_Firebase/components/Input/Input';
import Item_2 from './2_React_Firebase/components/Item/Item';
import ItemList_2 from './2_React_Firebase/components/Item List/ItemList';
import Navbar_2 from './2_React_Firebase/components/Navbar/Navbar';
import PhotoGrid_2 from './2_React_Firebase/components/Photo Grid/PhotoGrid';

import PopupModal from './PopupModal';
import FullComponentPopupModal from './FullComponentPopupModal';
import styles from './OrganismsCards.module.css';
import { fetchComponents, fetchComponentsStyles, fetchStyles } from '../helpers/helpers';


const OrganismsCards: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [activeTab, setActiveTab] = useState<'code' | 'style'>('code');

  const openModal = (card: Card) => {
    setSelectedCard(card);
    setActiveTab('code');
  };

  const closeModal = () => {
    setSelectedCard(null);
  };
  
  const openComponentModal = (card: Card) => {
    setSelectedCard(card);
  };

  const closeComponentModal = () => {
    setSelectedCard(null);
  };

  const coms= [
    [<TodoHeader_1 items={[]} addItem={()=>{}} />, "w-full",],
    [<TodoItem_1 items={TodoItems_1} />, "w-not-full",],
    [<Login_2 />, "w-not-full",],
    [<SignUp_2 />, "w-not-full",],
    // [<UserAuth_2 />, "w-not-full",],
    [<></>, "w-not-full",],
    [<Header_2 />, "w-full",],
    [<Input_2 />, "w-full",],
    [<Item_2 item={BudgetTrackerItems_2[0]} />, "w-full",],
    [<ItemList_2 />, "w-full",],
    [<Navbar_2 />, "w-full",],
    [<PhotoGrid_2 />, "w-full",],
  ];


  fetchComponents('1_Todo_List_2', 'TodoHeader.js', OrganismsCardsData, 0, 'code');
  fetchStyles('1_Todo_List_2', 'Todo.module.css', OrganismsCardsData, 0, 'style');
  
  fetchComponents('1_Todo_List_2', 'TodoItem.js', OrganismsCardsData, 1, 'code');  
  fetchStyles('1_Todo_List_2', 'Todo.module.css', OrganismsCardsData, 1, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Auth', 'Login.js', OrganismsCardsData, 2, 'code');
  fetchComponentsStyles('2_React_Firebase', 'Auth', 'SignUp.js', OrganismsCardsData, 3, 'code');
  // fetchComponentsStyles('2_React_Firebase', 'Auth', 'UserAuth.js', OrganismsCardsData, 4, 'code');
  // [2, 3, 4].map(fileObjectIndex => {
  [2, 3].map(fileObjectIndex => {
    fetchComponentsStyles('2_React_Firebase', 'Auth', 'account.module.css', OrganismsCardsData, fileObjectIndex, 'style');
  });
  
  fetchComponentsStyles('2_React_Firebase', 'Header', 'Header.js', OrganismsCardsData, 5, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Header', 'header.module.css', OrganismsCardsData, 5, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Input', 'Input.js', OrganismsCardsData, 6, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Input', 'input.module.css', OrganismsCardsData, 6, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Item', 'Item.js', OrganismsCardsData, 7, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Item', 'item.module.css', OrganismsCardsData, 7, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Item%20List', 'ItemList.js', OrganismsCardsData, 8, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Item%20List', 'itemList.module.css', OrganismsCardsData, 8, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Navbar', 'Navbar.js', OrganismsCardsData, 9, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Navbar', 'navbar.module.css', OrganismsCardsData, 9, 'style');
  
  fetchComponentsStyles('2_React_Firebase', 'Photo%20Grid', 'PhotoGrid.js', OrganismsCardsData, 10, 'code');  
  fetchComponentsStyles('2_React_Firebase', 'Photo%20Grid', 'photoGrid.module.css', OrganismsCardsData, 10, 'style');



  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {OrganismsCardsData.map((card, index) => (
          <div key={index} className={`${styles.card} ${coms[index][1] == 'w-full' ? styles.cardFull : styles.cardNotFull}`}>
            <div className={styles.preview}>{coms[index][0]}</div>
            <div className={styles.body}>
              <h3 className={styles.title}>{card.title}
                <button className={styles.codeButton} onClick={() => openModal(card)}>
                  Code
                </button>
                <button className={styles.codeButton} onClick={() => openComponentModal(card)}>
                  Component
                </button>
              </h3>
              <h6 className={styles.titleSmall}>{card.titleSmall}</h6>
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
      {
        selectedCard?.id 
        ?<FullComponentPopupModal
          isOpen={Boolean(selectedCard)}
          card={{...selectedCard, component: coms[selectedCard?.id-1][0]}}
          onClose={closeComponentModal}
        />
        :<></>
      }
    </div>
  );
};

export default OrganismsCards;