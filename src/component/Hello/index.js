import React from 'react'
import style from './index.css'
import logo from '@/assets/images/logo.svg'

export default class Hello extends React.Component {

    render(){
        return (
            <div className={ style.container }>
                <img src={ logo } className={ style.logo } alt="logo" />
                <h2>Welcome to React-cli</h2>
            </div>
        )
    }
}

