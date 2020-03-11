import { Form, Input, Button, message, Row, Col, Card } from 'antd';
import Link from 'next/link'
import axios from 'axios'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const key = 'secred'

const Demo = () => {
    const [form] = Form.useForm();
    const onFinish = values => {
        message.loading({ content: 'Loading...', key, duration: 999999 })
        axios.post('http://localhost:5003/register', { values }).then( ({ data }) => {
            message.success({ content: data.message , key, duration: 1 });
            form.resetFields();
        }).catch(err => {
            message.error({ content: err.response.data.message, key, duration: 1 });
        })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div style={{ backgroundColor: '#F0F0F0', height: '800px' }}>
            <Row>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 24, offset: 0 }} style={{textAlign: '-webkit-center' ,marginTop:'50px'}}>
                    <Card title="Register" bordered={10} style={{ width: 400 ,textAlign:'center'}}>
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="name"
                                name="name"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked" style={{ textAlign: 'end' }}>
                                <Link href='/login' >Login</Link>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                            </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>

        </div>

    )
}

export default Demo
