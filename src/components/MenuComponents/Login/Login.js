import React from "react";
import { Form, Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "./Login.scss";
export default function Login() {
  return (
    <Form className="login-form">
      <Form.Item>
        <Input 
        prefix={
          <UserOutlined />
        }
        type="email"
        name="email"
        placeholder="Correo electronico"
        className="login-form_input"
        />
      </Form.Item>
      <Form.Item>
      <Input 
        prefix={
          <UserOutlined />
        }
        type="password"
        name="password"
        placeholder="Contraseña"
        className="login-form_input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form_button" to="/crud" style={{ width: '100%', backgroundColor: '#E7E7E7' }}>
          Entrar
        </Button>
        <Link style={{ width: '100%', position: 'absolute', right: '0px', top: '5px'}} to="/crud">Entrar</Link>
      </Form.Item>
    </Form>
  );
}