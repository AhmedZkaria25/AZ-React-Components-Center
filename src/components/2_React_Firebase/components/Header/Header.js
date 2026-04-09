import React from 'react'
import useFireStore from '../../Firebase/useFireStore';
import './header.module.css'

function Header() {
    const [,,,budget] = useFireStore();
    return (
        <div className="header">
            <div className={'header__title'}>
                <h1>Budget Tracker<span>Using firebase firestore</span></h1>
            </div>
            <div className={'header__balance'}>
                $ {budget}
            </div>
        </div>
    )
}

export default Header
