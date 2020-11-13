// Custom DatePicker that uses Day.js instead of Moment.js
import React, { useState } from 'react'
import { Checkbox, Input } from 'antd'
import { apx } from '../../utils/devices'
import { $router, Pages } from '../../utils/router'
import apis from '../../apis'

export default function Index() {
  const [params, setParams] = useState({
    firstName: 'test',
    lastName: 'test',
    email: 'test@qq.com',
    password: '123456',
  })

  const onSignUp = async () => {
    const res = await apis.user.signUp(params)
    if (res.result) {
      $router.replace(Pages.Login)
    } else {
      alert(res.msg)
    }
  }

  const { firstName, lastName, email, password } = params

  return (
    <div
      className="row"
      style={{ overflow: 'hidden', width: apx(1920), height: '100vh' }}
    >
      <img
        src="/static/bg_signup.png"
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
          {'Already a member? '}
          <span
            className="mouse"
            style={{ color: '#681F9A' }}
            onClick={() => $router.replace(Pages.Login)}
          >
            Sign in
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
            Sign up to Jerhel
          </span>

          <div
            className="row"
            style={{
              marginTop: apx(100),
              marginBottom: apx(20),
            }}
          >
            <Input
              style={{
                marginRight: apx(20),
                width: apx(220),
                height: apx(60),
                borderRadius: apx(43),
                padding: `0 .26rem`,
              }}
              placeholder="Name"
              value={firstName}
              onChange={({ target: { value } }) => {
                setParams({
                  ...params,
                  firstName: value,
                })
              }}
            />
            <Input
              style={{
                width: apx(220),
                height: apx(60),
                borderRadius: apx(43),
                padding: `0 .26rem`,
              }}
              placeholder="Username"
              value={lastName}
              onChange={({ target: { value } }) => {
                setParams({
                  ...params,
                  lastName: value,
                })
              }}
            />
          </div>

          <Input
            style={{
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
              marginBottom: apx(20),
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

          <div
            className="row main-between"
            style={{ width: apx(460), marginBottom: apx(80) }}
          >
            <Checkbox />

            <span
              style={{ width: apx(436), fontSize: apx(14), color: '#8c8c8c' }}
            >
              Creating an account means you’re okay eith our{' '}
              <span className="mouse" style={{ color: '#681F9A' }}>
                Terms of Service
              </span>
              {`, `}
              <span className="mouse" style={{ color: '#681F9A' }}>
                Privacy Policy
              </span>
              , and our default{' '}
              <span className="mouse" style={{ color: '#681F9A' }}>
                Notification Settings
              </span>
              .
            </span>
          </div>

          <div className="button-primary" onClick={onSignUp}>
            Create Account
          </div>
        </div>
      </div>
    </div>
  )
}
