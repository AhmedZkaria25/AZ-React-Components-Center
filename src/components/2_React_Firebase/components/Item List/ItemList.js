import React from 'react'
import useFireStore from '../../Firebase/useFireStore'
import Item from '../Item/Item';
import styles from './itemList.module.css'
function ItemList() {
    const [items] = useFireStore();
    return (
        <div className={styles['item-list']}>
            {
                items.map(item => {  return(
                    <Item item={item} key={item.id}/>
                ); })
            }            
        </div>
    )
}

export default ItemList
