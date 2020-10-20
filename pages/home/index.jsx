// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import { Layout, Image } from 'antd'
import Nav from '../../components/Nav'
import { apx } from '../../utils/devices'

const { Header, Footer, Sider, Content } = Layout

export default class Home extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    return (
      <Layout>
        <Nav />

        <Content>
          <img
            src="/home1.webp"
            alt=""
            style={{ width: apx(1920), height: apx(980) }}
          />
        </Content>
      </Layout>
    )
  }
}
