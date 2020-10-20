// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import Nav from '../../components/Nav'
import { apx } from '../../utils/devices'

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className={this.props.className}>
          <h3>Title</h3>
          <p>This is a text that will appear.</p>
        </div>
        <style jsx>{`
          .show {
            position: absolute;
            left: ${apx(-100)};
            width: 30em;
            height: 20em;
            -webkit-animation: slide-in 1s forwards;
            animation: slide-in 1s forwards;
          }
          @-webkit-keyframes slide-in {
            100% {
              left: ${apx(100)};
            }
          }
          @keyframes slide-in {
            100% {
              left: ${apx(100)};
            }
          }
        `}</style>
      </div>
    )
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationIndex: 0, //左侧导航栏
      imgs: [
        '/home1.webp',
        '/nav_tab_1.webp',
        '/nav_tab_2.webp',
        '/nav_tab_3.webp',
      ],
      className: 'hidden',
    }
  }

  refImgs = [null, null, null, null]

  refAbout = null

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  renderNavigation = () => (
    <div
      className={'column'}
      style={{ position: 'fixed', left: 0, top: 0, bottom: 0 }}
    >
      {this.refImgs.map((item, index) => (
        <div
          className={'mouse'}
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

  render() {
    return (
      <div className="column">
        <Nav />

        {this.state.imgs.map((url, index) => (
          <img
            key={index}
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

        <div
          ref={ref => {
            this.refAbout = ref
          }}
        >
          <About className={this.state.className} />
        </div>

        {this.renderNavigation()}
      </div>
    )
  }

  handleScroll = () => {
    if (this.refAbout) {
      console.log(this.refAbout)
      this.setState({
        className:
          document.documentElement.scrollTop > this.refAbout.offsetTop - 800
            ? 'show'
            : 'hidden',
      })
    }

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
