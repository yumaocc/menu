import React from 'react'
import {QuestionCircleOutlined } from '@ant-design/icons';
import './Header.css'
export default function Header() {
    return (
        <div className='container'>
            <div className='content'>
            <img  className='img' src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
                <h2>react</h2>
            </div>
            <div className='content'>
                <QuestionCircleOutlined  className='icon'/>
                <h3>admin</h3>
            </div>
        </div>
    )
}
