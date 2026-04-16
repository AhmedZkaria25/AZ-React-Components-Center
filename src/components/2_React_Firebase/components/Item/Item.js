import React, { useRef } from 'react'
import styles from './item.module.css'
import useFireStore from '../../Firebase/useFireStore'

function Item({item}) {
    const [,, deleteItem ] = useFireStore();
    // const deleteItem = (id) => {
    //     console.log('Sure delete item '+id);
    // }
    const dltRef = useRef();
    return (
        <div className={styles.item} key={item.id}
            onMouseEnter={ () => dltRef.current.style.display = 'block' }
            onMouseLeave={ () => dltRef.current.style.display = 'none' }
        >
            <div className={styles.item__title}><h3>{item.title}</h3></div>
            <div className={styles.item__info}>
                {/* <p>{item.amount}</p> */}
                {/* condition class & remove - char */}
                <p className={item.amount < 0 ? styles.expense : styles.income}>${ Math.abs(item.amount) }</p>
                <p>{item.date}</p>
                <button className={styles.item__delete} onClick={ () => deleteItem(item.id) } ref={dltRef}>Delete</button>                
            </div>
        </div>
    )
}

export default Item
