import React, { useState } from 'react'
import { useRef } from 'react';
import useFireStore from '../../Firebase/useFireStore';
import styles from './input.module.css'

const initialItem = {title: '', type: '', date: ''};
const Input = () => {
  // const { addItem } = useFireStore();
  const [, addItem ] = useFireStore();
  const [item, setItem] = useState(initialItem);
  const [amount, setAmount] = useState('');
  const selectedOpt = useRef(null);
  
  const handleChange = ({target}) =>{
    setItem({
      ...item, 
      [target.name]: target.value,
      type: selectedOpt.current.value,
    });
  }

  const handleAmount = ({target}) =>{
    setAmount(target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let actualAmount = 
      selectedOpt.current.value === 'expense'
      ? -Math.abs(parseInt(amount)) 
      : parseInt(amount);
    
    await addItem(item, actualAmount);
    setItem(initialItem);
    setAmount('');
  };

    return (
      <div className={styles.input}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleChange}
            value={item.title}
            autoComplete="off"
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={handleAmount}
            value={amount}
            autoComplete="off"
            required
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            placeholder="Date"
            value={item.date}
            required
          />

          <div>
          <label htmlFor="type">Type</label>
          <select name="type" onChange={handleChange} ref={selectedOpt}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          </div>

          <input type="submit" value="ADD" />
        </form>
      </div>
    )
}

export default Input