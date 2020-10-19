// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import { Dropdown, Menu } from 'antd'

export default function Index() {
  return (
    <div
      className="row main-between"
      style={{
        backgroundColor: '#752EA4',
        width: '100%',
        height: 100,
        paddingLeft: 60,
        paddingRight: 90,
      }}
    >
      <div style={{ height: 76, width: 128, backgroundColor: 'white' }} />

      <div className="row main-between">
        <Dropdown
          overlay={
            <Menu style={{ top: 20, right: 100 }}>
              <Menu.Item key="0">
                <span
                  style={{
                    width: 200,
                    height: 37,
                    fontSize: 26,
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  Leo zhang
                </span>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="1">
                <span
                  style={{
                    width: 200,
                    height: 37,
                    fontSize: 26,
                    fontWeight: 500,
                    color: '#333',
                  }}
                >
                  Drop out
                </span>
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <div
            className="mouse"
            style={{
              width: 54,
              height: 54,
              backgroundColor: 'white',
              borderRadius: '50%',
              marginRight: 69,
            }}
          />
        </Dropdown>

        <div style={{ width: 62, height: 54, backgroundColor: 'white' }} />
      </div>
    </div>
  )
}
