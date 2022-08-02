import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import myContext from '../createContext'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

export default function Content(props) {
    const changeItemName = useContext(myContext)
    const location = useLocation()
    const { state } = useLocation()
    const [value, setValue] = useState(`子菜单${1 - 1}`)
    useEffect(() => {
        setValue(`子菜单${state}`)
    }, [state])
    return (
        <div style={{margin: '50px',}}>
            <Input value={value} style={{ width: '20vw'}} onChange={(e) => setValue(e.target.value)} />
            <Button type="primary"
                onClick={() => changeItemName(state, value)}
            >
                修改
            </Button>
        </div>
    )
}
