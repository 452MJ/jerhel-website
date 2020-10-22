// Custom DatePicker that uses Day.js instead of Moment.js
import React from 'react'
import {Checkbox, Input} from 'antd'
import {apx} from '../../utils/devices'
import Link from "next/link";

export default function Index() {
  return (
      <div
          className="row"
          style={{overflow: 'hidden', width: apx(1920), height: '100vh'}}
      >
        <img
            src="/static/bg_signup.png"
            alt=""
            style={{width: apx(730), height: apx(1080)}}
        />
        <div className="column" style={{flex: 1, alignSelf: 'stretch'}}>
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
             <span className="mouse" style={{color: '#681F9A'}}>
            Sign in
          </span>
          </Link>

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

            <div className={'row'} style={{
              marginTop: apx(100), marginBottom: apx(20),
            }}>
              <Input
                  style={{
                    marginRight: apx(20),
                    width: apx(220),
                    height: apx(60),
                    borderRadius: apx(43),
                    padding: `0 .26rem`,
                  }}
                  placeholder="Name"
              />
              <Input
                  style={{
                    width: apx(220),
                    height: apx(60),
                    borderRadius: apx(43),
                    padding: `0 .26rem`,
                  }}
                  placeholder="Username"
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
            />

            <div className={'row main-between'} style={{width:apx(460),marginBottom:apx(80)}}>
              <Checkbox/>

              <span style={{width: apx(436), fontSize: apx(14), color: '#8c8c8c'}}>Creating an account means you’re okay eith our <span
                  className={'mouse'}
                  style={{color: '#681F9A'}}>Terms of Service</span>{`, `}
                <span
                    className={'mouse'}
                    style={{color: '#681F9A'}}>Privacy Policy</span>
                , and our default <span
                    className={'mouse'}
                    style={{color: '#681F9A'}}>Notification Settings</span>.</span>
            </div>

            <div className="button-primary">Create Account</div>
          </div>
        </div>
      </div>
  )
}
