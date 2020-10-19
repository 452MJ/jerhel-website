// Custom DatePicker that uses Day.js instead of Moment.js
import React, { useState } from 'react'
import { Drawer, Dropdown, Menu } from 'antd'

export default function Nav() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <div
        className="row main-between"
        style={{
          backgroundColor: '#752EA4',
          width: '100%',
          height: 63,
          paddingLeft: 60,
          paddingRight: 90,
        }}
      >
        <div style={{ width: 80, height: 48, backgroundColor: 'white' }} />

        <div className="row main-between">
          <Dropdown
            overlay={
              <Menu style={{ top: 20, right: 100 }}>
                <Menu.Item key="0">
                  <span
                    style={{
                      width: 125,
                      height: 44,
                      fontSize: 16,
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
                      width: 125,
                      height: 44,
                      fontSize: 16,
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
                width: 34,
                height: 34,
                backgroundColor: 'white',
                borderRadius: '50%',
                marginRight: 43,
              }}
            />
          </Dropdown>

          <button
            type="button"
            style={{ width: 39, height: 34, backgroundColor: 'white' }}
            onClick={showDrawer}
          />
        </div>
      </div>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        maskStyle={{ background: '#fff' }}
        width={875}
        style={{ opacity: 0.96 }}
        bodyStyle={{ background: '#752EA4' }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}
