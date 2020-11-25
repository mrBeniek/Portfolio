import React from 'react';
import { Dropdown as Drop } from 'antd';
import { Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Dropdown = ({menuArray, dropState, setDropState}) => {

  const handleMenu = (val) => {
    setDropState(val)
  }

  const menu = (
    <Menu
    style={{
      color: "white",
       background: "transparent",
       borderColor: "white",
       border: "1px solid"      
    }}
    >
      {
        menuArray.map( val => 
          <Menu.Item
            key={val}
            onClick={() => handleMenu(val)}
            style={{
              color: "white",
              borderColor: "white",
              textShadow: "1px 1px black"
               
            }}
            className="menu-item"
          >
            {val}
          </Menu.Item>
        )
      }
    </Menu>
  );

  return (
    <div>
      <Drop overlay={menu}>
        <Button
          size="large"
          style={{
            color: "white",
            borderColor: "white",
            backgroundColor: "transparent"
          }}
        >
          {dropState} <DownOutlined />
        </Button>
      </Drop>
    </div>
  )
}

export default Dropdown;