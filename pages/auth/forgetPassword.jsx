// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import { Input } from 'antd'
import Link from 'next/link'
import { apx } from '../../utils/devices'

export default function Index() {
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
          {'Already a member? '}
          <Link href="/auth/login">
            <a className="mouse" style={{ color: '#681F9A' }}>
              Sign in
            </a>
          </Link>
        </span>

        <div className="column">
          <span
            style={{
              fontWeight: 'bold',
              fontSize: apx(36),
              color: '#232323',
              marginBottom: apx(30),
            }}
          >
            Forgot Password?
          </span>

          <span
            style={{
              width: apx(460),
              fontSize: apx(16),
              color: '#8c8c8c',
              marginBottom: apx(30),
              textAlign: 'center',
            }}
          >
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </span>

          <span
            style={{
              width: apx(460),
              textAlign: 'center',
              fontSize: apx(16),
              color: '#8c8c8c',
              marginBottom: apx(60),
            }}
          >
            For security reasons, we do NOT store your password. So rest assured
            that we will never send your password via email.
          </span>

          <span
            style={{
              fontWeight: 'bold',
              fontSize: apx(20),
              color: '#232323',
              marginBottom: apx(20),
            }}
          >
            Email Address
          </span>

          <Input
            style={{
              marginBottom: apx(30),
              width: apx(460),
              height: apx(60),
              borderRadius: apx(43),
              padding: `0 .26rem`,
            }}
            placeholder="Email"
          />

          <div className="button-primary">Send Reset lnstructions</div>
        </div>
      </div>
    </div>
  )
}
