import React from 'react'
import useFireStore from '../../Firebase/useFireStore';
import styles from './header.module.css'

function Header() {
    const [,,,budget] = useFireStore();
    return (
        // <div className="no2_React_Firebase header">
        <div className={styles.header}>
            <div className={styles.header__title}>
                <h1>Budget Tracker<span>Using firebase firestore</span></h1>
            </div>
            <div className={styles.header__balance}>
                $ {budget}
            </div>
        </div>
    )
}

export default Header
