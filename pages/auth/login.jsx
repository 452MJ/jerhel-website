// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import { Input } from 'antd'
import { apx } from '../../utils/devices'

export default function Index() {
  return (
    <div
      className="row"
      style={{ overflow: 'hidden', width: apx(1920), height: '100vh' }}
    >
      <img
        src="/auth_bg.png"
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
          <span className="mouse" style={{ color: '#681F9A' }}>
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
          />

          <div className="button-primary">Get Started</div>

          <div
            className="button-primary"
            style={{
              background: '#fff',
              color: '#681f9a',
              fontWeight: '400',
              marginTop: apx(10),
            }}
          >
            Forgot password?
          </div>
        </div>
      </div>
    </div>
  )
}
