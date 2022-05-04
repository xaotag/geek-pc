import { Card, Form, Input, Button, Checkbox, message } from 'antd';
import logo from '@/assets/logo.png';
import './index.scss';
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { loginStore } = useStore();
  async function onFinish(values) {
    try {
      await loginStore.getToken({
        mobile: values.phone,
        code: values.code,
      });
      message.success('登陆成功');
      navigate('/', { replace: true });
    } catch (error) {
      message.error(error);
    }
    console.log(values);
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        <Form onFinish={onFinish}>
          <Form.Item
            initialValue="18438570098"
            name="phone"
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="code" initialValue="246810">
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item name="check" valuePropName="checked">
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={onFinish}
              type="primary"
              htmlType="submit"
              size="large"
              block
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
