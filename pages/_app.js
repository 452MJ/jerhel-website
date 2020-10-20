import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import { Component } from 'react'

export default class MyApp extends Component {
  componentDidMount() {
    fnResize()
    window.onresize = function () {
      fnResize()
    }
    function fnResize() {
      const designSize = 1920 // 设计图尺寸
      const html = document.documentElement
      let windowWidth = html.clientWidth // 窗口宽度
      if (windowWidth < 1200) {
        windowWidth = 1200
      }
      const rem = (windowWidth * 100) / designSize
      document.documentElement.style.fontSize = `${rem}px`
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
