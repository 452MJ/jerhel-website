// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import Nav from '../../components/Nav'
import { apx } from '../../utils/devices'

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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  render = () => (
    <div className="column">
      <Nav />

      {this.state.imgs.map((url, index) => (
        <img
          key={index.toString()}
          ref={ref => {
            if (ref) {
              this.refImgs[index] = ref
            }
          }}
          src={url}
          alt=""
          style={{ width: apx(1920), height: apx(1080) }}
        />
      ))}

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
          onClick={() =>
            (document.documentElement.scrollTop = document.body.scrollTop = this.refImgs[
              index
            ].offsetTop)
          }
        />
      ))}
    </div>
  )

  handleScroll = () => {
    const currentTop = document.documentElement.scrollTop

    let navigationIndex

    this.refImgs.forEach((ref, index) => {
      if (ref.offsetTop <= currentTop) {
        navigationIndex = index
      }
    })

    if (navigationIndex !== this.state.navigationIndex) {
      this.setState({ navigationIndex })
    }

    // console.log(img)
  }
}
