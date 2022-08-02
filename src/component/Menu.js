import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React ,{useState}from 'react';
import { useNavigate} from 'react-router-dom'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}



const App = (props) => {
  const navigate = useNavigate()
  const { prams } = props
  const onClick = ({key}) => {
    setCurrent(key)
    navigate('/content',{state:key})
  };
  
  const items = [
    getItem('菜单一', 'sub1', <MailOutlined />, [
      getItem(prams[0].title,  prams[0].key),
      getItem(prams[1].title, prams[1].key),
    ]),
    getItem('菜单二', 'sub2', <AppstoreOutlined />, [
      getItem(prams[2].title, prams[2].key),
      getItem(prams[3].title, prams[3].key),
    ]),
  ];
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  return (
    <Menu
    theme={theme}
    onClick={onClick}
    style={{
      width: '100%',
    }}
    defaultOpenKeys={['sub1']}
    selectedKeys={[current]}
    mode="inline"
    items={items}
  />
  );
};

export default App;