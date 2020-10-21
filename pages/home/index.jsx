// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import Scroll from 'react-scroll'
import Nav from '../../components/Nav'
import { apx } from '../../utils/devices'

const scroll = Scroll.animateScroll

export default class Home extends React.Component {
  refImgs = [null, null, null, null]

  constructor(props) {
    super(props)
    this.state = {
      navigationIndex: 0, // 左侧导航栏
      imgs: [
        '/home1.webp',
        '/nav_tab_1.webp',
        '/nav_tab_2.webp',
        '/nav_tab_3.webp',
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
            ref={ref => {
              try {
                if (ref) {
                  this.refImgs[index] = ref
                }
              } catch (e) {}
            }}
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
                    id={`#img${index}`}
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
      </Controller>

      {this.renderNavigation()}
    </div>
  )

  renderNavigation = () => (
    <div
      className="column"
      style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}
    >
      {this.refImgs.map((item, index) => (
        <div
          key={index.toString()}
          className="mouse"
          style={{
            width: apx(100),
            height: apx(100),
            background: index === this.state.navigationIndex ? 'red' : 'yellow',
          }}
          onClick={() => {
            const elementId = `#img${index}`
            const img = document.getElementById(elementId)

            const offsetTop = {
              0: img.height * 0,
              1: img.height * 1,
              2: img.height * 3,
              3: img.height * 5,
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
