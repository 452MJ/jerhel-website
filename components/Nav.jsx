// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import { Drawer, Dropdown, Menu } from 'antd'
import { CloseOutlined, DownOutlined } from '@ant-design/icons'

import { apx } from '../utils/devices'

export default class Nav extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dropDownCategoryVisible: false,
      drawerVisible: false,
      drawerCategoryList: ['NEW PRODUCTS', 'JAR/BOTTLE', 'ECO-FRIENDLY SERIES'],
      drawerCategory: 'NEW PRODUCTS',
    }
  }

  renderDrawer() {
    return (
      <Drawer
        placement="right"
        closable={false}
        onClose={() => this.setState({ drawerVisible: false })}
        visible={this.state.drawerVisible}
        maskStyle={{ background: 'rgba(255,255,255,0.9)' }}
        width={apx(1400)}
        style={{
          backgroundColor: 'transparent',
          opacity: 0.96,
        }}
        drawerStyle={{ background: 'rgba(117,46,164,0.96)' }}
        bodyStyle={{ padding: 0 }}
      >
        <div
          className="column"
          style={{
            padding: `${apx(52)} ${apx(99)} 0 ${apx(99)}`,
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <div className="row main-between" style={{ alignSelf: 'stretch' }}>
            <Dropdown
              overlay={
                <Menu
                  theme="dark"
                  style={{ width: apx(300), padding: 0 }}
                  selectedKeys={[this.state.drawerCategory]}
                  onClick={e => {
                    this.setState({
                      drawerCategory: e.key,
                    })
                  }}
                >
                  {this.state.drawerCategoryList.map((item, idx) => (
                    <Menu.Item key={item} style={{ padding: 0 }}>
                      <div
                        className="column main-center cross-start"
                        style={{
                          width: apx(300),
                          height: apx(46),
                          paddingLeft: apx(12),
                        }}
                      >
                        <span
                          style={{
                            fontSize: apx(16),
                            color: '#fff',
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={['click']}
              onVisibleChange={newVisible =>
                this.setState({ dropDownCategoryVisible: newVisible })
              }
              visible={this.state.dropDownCategoryVisible}
            >
              <div
                className="row main-between mouse"
                style={{
                  width: apx(300),
                  height: apx(46),
                  backgroundColor: '#fff',
                  paddingLeft: apx(12),
                  paddingRight: apx(17),
                  borderTopLeftRadius: apx(10),
                  borderTopRightRadius: apx(10),
                  borderBottomLeftRadius: this.state.dropDownCategoryVisible
                    ? 0
                    : apx(10),
                  borderBottomRightRadius: this.state.dropDownCategoryVisible
                    ? 0
                    : apx(10),
                }}
              >
                <span style={{ fontSize: apx(16), color: '#333' }}>
                  {this.state.drawerCategory}
                </span>
                <DownOutlined />
              </div>
            </Dropdown>

            <div
              className="mouse"
              onClick={() => this.setState({ drawerVisible: false })}
            >
              <CloseOutlined style={{ color: '#fff', fontSize: apx(45) }} />
            </div>
          </div>
          <div
            className="row main-between"
            style={{
              flex: 1,
              marginTop: apx(140),
              flexWrap: 'wrap',
              paddingLeft: apx(23),
              paddingRight: apx(17),
              overflow: 'scroll',
            }}
          >
            {new Array(10).fill(0).map(() => (
              <div
                className="column"
                style={{ marginRight: apx(50), marginBottom: apx(108) }}
              >
                <img
                  style={{
                    width: apx(198),
                    height: apx(296),
                    background: '#fff',
                  }}
                />
                <span
                  style={{
                    color: '#fff',
                    fontSize: apx(16),
                    marginTop: apx(5),
                  }}
                >
                  Some contents...
                </span>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    )
  }

  render() {
    return (
      <>
        <div
          className="row main-between"
          style={{
            position: 'fixed',
            top: 0,
            backgroundColor: 'rgba(117,46,164,0.75)',
            width: '100%',
            height: apx(100),
            paddingLeft: apx(60),
            paddingRight: apx(89),
          }}
        >
          <div
            style={{
              width: apx(128),
              height: apx(76),
              backgroundColor: 'white',
            }}
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
                      NEW PRODUCTS
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
              onClick={() => this.setState({ drawerVisible: true })}
            />
          </div>
        </div>

        {this.renderDrawer()}
      </>
    )
  }
}
