// Custom DatePicker that uses Day.js instead of Moment.js
import React, { useState } from 'react'
import { Drawer, Dropdown, Menu } from 'antd'
import { apx } from '../utils/devices'

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
          height: apx(100),
          paddingLeft: apx(60),
          paddingRight: apx(89),
        }}
      >
        <div
          style={{ width: apx(128), height: apx(76), backgroundColor: 'white' }}
        />

        <div className="row main-between">
          <Dropdown
            overlay={
              <Menu style={{ top: apx(20), right: apx(100) }}>
                <Menu.Item key="0">
                  <span
                    style={{
                      width: apx(200),
                      height: apx(70),
                      fontSize: apx(26),
                      fontWeight: 500,
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
                      width: apx(200),
                      height: apx(70),
                      fontSize: apx(26),
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
                width: apx(54),
                height: apx(54),
                backgroundColor: 'white',
                borderRadius: '50%',
                marginRight: apx(69),
              }}
            />
          </Dropdown>

          <button
            type="button"
            style={{
              width: apx(62),
              height: apx(54),
              backgroundColor: 'white',
            }}
            onClick={showDrawer}
          />
        </div>
      </div>

      <div style={{ background: '#fff', opacity: 0.5 }}>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          maskStyle={{ background: 'rgba(255,255,255,0.6)' }}
          width={apx(1400)}
          bodyStyle={{ background: '#752EA4' }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </>
  )
}
