// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import { Layout, Image } from 'antd'
import Nav from '../../components/Nav'

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
        <Header
          style={{
            height: 63,
            padding: 0,
            margin: 0,
            border: 0,
          }}
        >
          <Nav />
        </Header>
        <Content>
          <img
            src="/home1.webp"
            alt=""
            width={'100%'}
            // height={1000}
            // style={{ width: '100%' }}
          />
        </Content>
      </Layout>
    )
  }
}
