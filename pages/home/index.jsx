// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import Scroll from 'react-scroll'
import { Input } from 'antd'
import Nav from '../../components/Nav'
import { apx } from '../../utils/devices'

const scroll = Scroll.animateScroll

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationIndex: 0, // 左侧导航栏
      imgs: [
        '/static/home1.webp',
        '/static/nav_tab_1.webp',
        '/static/nav_tab_2.webp',
        '/static/nav_tab_3.webp',
      ],
    }
  }

  componentDidMount() {}

  render = () => (
    <div className="column">
      <Nav />

      <Controller>
        {this.state.imgs.map((url, index) => (
          <Scene
            key={index.toString()}
            triggerHook={0}
            duration="100%"
            pin={index !== 0}
            indicators
          >
            {(progress, event) => {
              if (event.type === 'enter') {
                if (this.state.navigationIndex !== index) {
                  this.setState({ navigationIndex: index })
                }
              }

              return (
                <div
                  className="column"
                  style={{ width: apx(1920), height: apx(1080) }}
                >
                  <img
                    id={`#tab${index}`}
                    src={url}
                    alt=""
                    style={{ width: '100%', height: '100%' }}
                  />
                  <div className="absolute column">
                    <span>page {index}</span>
                    <span>{progress}</span>
                  </div>
                </div>
              )
            }}
          </Scene>
        ))}

        <Scene>
          {(progress, event) => {
            if (event.type === 'enter') {
              if (this.state.navigationIndex !== 4) {
                this.setState({ navigationIndex: 4 })
              }
            }
            return (
              <div
                className="column"
                style={{
                  width: apx(1920),
                  height: apx(1080),
                }}
              >
                <img
                  id="#tab5"
                  src="/static/home_connect.png"
                  alt=""
                  className="absolute"
                />
                <div
                  className="column"
                  style={{
                    width: apx(1077),
                    height: apx(820),
                    background: '#fff',
                    borderRadius: apx(20),
                  }}
                >
                  <div className="column">
                    <div className="column main-end">
                      <div
                        style={{
                          position: 'absolute',
                          bottom: apx(7),
                          left: 0,
                          right: 0,
                          height: apx(26),
                          background: '#DECCE3',
                        }}
                      />
                      <div className="column ">
                        <span
                          style={{
                            fontSize: apx(60),
                            lineHeight: apx(60),
                            color: '#333',
                            fontWeight: '900',
                            textAlign: 'center',
                            margin: `0 .26rem`,
                          }}
                        >
                          CONNECT WITH JERHÉL
                        </span>
                      </div>
                    </div>

                    <div
                      className="column main-end"
                      style={{ marginTop: apx(30) }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          bottom: apx(7),
                          left: 0,
                          right: 0,
                          height: apx(26),
                          background: '#DECCE3',
                        }}
                      />
                      <div className="column ">
                        <span
                          style={{
                            fontSize: apx(60),
                            lineHeight: apx(60),
                            color: '#333',
                            fontWeight: '900',
                            textAlign: 'center',
                            margin: `0 .26rem`,
                          }}
                        >
                          TO GET STARTED
                        </span>
                      </div>
                    </div>
                  </div>

                  <Input
                    className="ant-input"
                    style={{
                      background: '#fff',
                      borderBottom: `1px solid red`,
                      marginTop: apx(100),
                      marginBottom: apx(20),
                      width: apx(460),
                      height: apx(60),
                      borderRadius: apx(43),
                      padding: `0 .26rem`,
                    }}
                    placeholder="Email"
                  />
                </div>
              </div>
            )
          }}
        </Scene>
      </Controller>

      {this.renderNavigation()}

      <style jsx>{`
        .ant-input,
        .ant-input-focused {
          font-size: 0.16rem;
          /*border:0;*/
          background: #fff;
          border: 1px solid #fff;
        }

        .ant-input:focus,
        .ant-input-focused {
          background: #fff;
          border: 1px solid #681f9a;
          outline: 0;
          box-shadow: 0 0 0 3px #faf3fc;
        }

        .ant-input:hover,
        .ant-input-focused {
          background: #fff;
          border: 1px solid #681f9a;
          outline: 0;
          box-shadow: 0 0 0 3px #faf3fc;
        }

        .ant-input::placeholder {
          color: #b899c2;
        }

        .ant-input:hover::placeholder {
          color: #333;
        }

        .ant-input:focus::placeholder {
          color: #333;
        }
      `}</style>
    </div>
  )

  renderNavigation = () => (
    <div
      className="column"
      style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}
    >
      {[0, 0, 0, 0, 0].map((item, index) => (
        <div
          key={index.toString()}
          className="mouse"
          style={{
            width: apx(100),
            height: apx(100),
            background: index === this.state.navigationIndex ? 'red' : 'yellow',
          }}
          onClick={() => {
            const elementId = `#tab${index}`
            const img = document.getElementById(elementId)

            const offsetTop = {
              0: img.height * 0,
              1: img.height * 1,
              2: img.height * 3,
              3: img.height * 5,
              4: img.height * 6,
            }[String(index)]

            scroll.scrollTo(offsetTop, {
              duration: 500 * Math.abs(this.state.navigationIndex - index),
              smooth: true,
            })
          }}
        />
      ))}
    </div>
  )
}
