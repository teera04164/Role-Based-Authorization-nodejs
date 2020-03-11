import { Form, Input, Button, Checkbox, Row, Col, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link'
import router from 'next/router'
import axios from 'axios'
// import "../style.less";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const key = 'updatable';

const Demo = () => {
  const onFinish = async values => {
    // await new Promise((resolve) => {
      message.loading({ content: 'Loading...', key });
    //   setTimeout(() => { resolve() }, 1000);
    // })

    axios.post('http://localhost:5003/login', { values }).then( ({ data }) => {
      message.success({ content: data.message , key, duration: 1 });
        router.push('/dashbord')
    }).catch(err => {
      message.error({ content: err.response.data.message, key, duration: 1 });
  })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ backgroundColor: '#F0F0F0', height: '800px'}}>
      <Row>
        <Col span={24} style={{textAlign: '-webkit-center' ,marginTop:'50px'}}>
          <Card title="Login" bordered={10} style={{ width: 400 }}>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                &emsp; Or <Link href="/register">register now!</Link>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>

  )
}

export default Demo
