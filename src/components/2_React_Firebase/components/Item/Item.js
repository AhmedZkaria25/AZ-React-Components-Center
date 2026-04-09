import React, { useRef } from 'react'
import './item.module.css'
import useFireStore from '../../Firebase/useFireStore'

function Item({item}) {
    const [,, deleteItem ] = useFireStore();
    // const deleteItem = (id) => {
    //     console.log('Sure delete item '+id);
    // }
    const dltRef = useRef();
    return (
        <div className={'item'} key={item.id}
            onMouseEnter={ () => dltRef.current.style.display = 'block' }
            onMouseLeave={ () => dltRef.current.style.display = 'none' }
        >
            <div className={'item__title'}><h3>{item.title}</h3></div>
            <div className={'item__info'}>
                {/* <p>{item.amount}</p> */}
                {/* condition class & remove - char */}
                <p className={item.amount < 0 ? 'expense' : 'income'}>${ Math.abs(item.amount) }</p>
                <p>{item.date}</p>
                <button className={'item__delete'} onClick={ () => deleteItem(item.id) } ref={dltRef}>Delete</button>                
            </div>
        </div>
    )
}

export default Item
