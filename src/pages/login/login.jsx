import React, { useState, useEffect} from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less'
import logo from './imgs/logo.png';

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[
          {required: true,message: 'Please input your username!',},
          {max:12 ,message: '用户名小于12位'},
          {min: 4,message: '用户名大于4位'},
          {pattern: /^\w+$/,message: '用户名必须是字母数字下划线'},
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {required: true,message: 'Please input your password!',},
          {max:12 ,message: '密码小于12位'},
          {min: 4,message: '密码大于4位'},
          {pattern: /^\w+$/,message: '密码必须是字母数字下划线'},
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item shouldUpdate={true} className= "button_style">
        {() => (
          <Button
            
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            登录
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default class Login extends React.Component{
  render() {
    return (
      <div className="login">
        <header>
            <img src={logo} alt="logo"/>
            <h1>商品管理系统</h1>
        </header>
        <section>
          <h1>用户登录</h1>
          <HorizontalLoginForm />
        </section>
      </div>
    )
  }
}

