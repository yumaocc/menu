
import Menu from '../component/Menu'
import { Layout } from 'antd';
import React, { useState } from 'react';
import './Home.css'
import { Outlet } from 'react-router-dom'
import myContext from '../createContext';
import Header from '../component/Header';
function App() {
  const {  Sider, Content } = Layout;
  const [prams, setPrams] = useState([
    {
      title: '子菜单1-1',
      key: "1-1"
    }, {
      title: '子菜单1-2',
      key: "1-2"
    },
    {
      title: '子菜单2-1',
      key: "2-1"
    }, {
      title: '子菜单2-2',
      key: "2-2"
    },
  ])
  const changeItemName = (key, value) => {
    let newPrams = prams.map(item => item.key === key ? { ...item, title: value } : item)
    setPrams(newPrams)
  }


  return (
    <myContext.Provider value={changeItemName}>
      <Layout>
        <Header />
        <Layout>
          <Sider className='sider'><Menu prams={prams} /></Sider>
          <Content className='content'><Outlet /></Content>
        </Layout>
      </Layout>
    </myContext.Provider>
  );
}

export default App;
