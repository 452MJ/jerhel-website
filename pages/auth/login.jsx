// Custom DatePicker that uses Day.js instead of Moment.js
import React, { useState } from 'react'
import { Input } from 'antd'
import Link from 'next/link'
import { apx } from '../../utils/devices'
import { $router, Pages } from '../../utils/router'
import apis from '../../apis'

export default function Index() {
  const [params, setParams] = useState({
    email: '',
    password: '',
  })

  const onLoginClick = async () => {
    const res = await apis.user.login(params)
    if (res) {
      $router.replace(Pages.Home)
    }
  }

  const { email, password } = params

  return (
    <div
      className="row"
      style={{ overflow: 'hidden', width: apx(1920), height: '100vh' }}
    >
      <img
        src="/static/bg_login.png"
        alt=""
        style={{ width: apx(730), height: apx(1080) }}
      />
      <div className="column" style={{ flex: 1, alignSelf: 'stretch' }}>
        <span
          style={{
            position: 'absolute',
            top: apx(40),
            right: apx(60),
            fontSize: apx(16),
            color: '#333',
          }}
        >
          {'Not a member? '}

          <span
            className="mouse"
            style={{ color: '#681F9A' }}
            onClick={() => $router.push(Pages.SignUp)}
          >
            Sign up Now
          </span>
        </span>

        <div className="column">
          <span
            style={{
              fontWeight: 'bold',
              fontSize: apx(36),
              color: '#232323',
            }}
          >
            Log in to Jerhel
          </span>

          <Input
            style={{
              marginTop: apx(100),
              marginBottom: apx(20),
              width: apx(460),
              height: apx(60),
              borderRadius: apx(43),
              padding: `0 .26rem`,
            }}
            placeholder="Email"
            value={email}
            onChange={({ target: { value } }) => {
              setParams({
                ...params,
                email: value,
              })
            }}
          />
          <Input
            style={{
              marginBottom: apx(60),

              width: apx(460),
              height: apx(60),
              borderRadius: apx(43),
              padding: `0 .26rem`,
            }}
            placeholder="Password"
            value={password}
            onChange={({ target: { value } }) => {
              setParams({
                ...params,
                password: value,
              })
            }}
          />

          <div className="button-primary" onClick={onLoginClick}>
            Get Started
          </div>

          <a
            className="button-primary"
            onClick={() => {
              $router.push(Pages.ForgetPassword)
            }}
            style={{
              background: '#fff',
              color: '#681f9a',
              fontWeight: '400',
              marginTop: apx(10),
            }}
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  )
}
