import React from 'react';
import { Dropdown as Drop } from 'antd';
import { Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Dropdown = ({menuArray, dropState, setDropState}) => {

  const handleMenu = (val) => {
    setDropState(val)
  }

  const menu = (
    <Menu>
      {
        menuArray.map( val => 
          <Menu.Item key={val} onClick={() => handleMenu(val)}>
            {val}
          </Menu.Item>
        )
      }
    </Menu>
  );

  return (
    <div>
      <Drop overlay={menu}>
        <Button size="large">
          {dropState} <DownOutlined />
        </Button>
      </Drop>
    </div>
  )
}

export default Dropdown;