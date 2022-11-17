import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import { GithubOutlined } from "@ant-design/icons";
import MenuTop from '../components/MenuComponents/MenuTop';
import MenuSider from '../components/MenuComponents/MenuSider';

import "./GeneralLayout.scss";
import SignIn from '../pages/Admin/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';

export default function GeneralLayout(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  const user = null;

  if(!user) {
    return (
      <>
        <SignIn />
        <Routes>
          <Route path='/admin/login/*' element={<SignIn />} />
        </Routes>
      </>
    );
  }
  return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout style={{ marginLeft: menuCollapsed ? "80px" : "200px"}}>
          <Header className='layout-admin__header'>
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className='layout-admin__content'>{children}</Content>
          <Footer className='layout-admin__footer'>
            <Button type='link' onClick={() => console.log("Github")}>
              <GithubOutlined style={{ fontSize: "17px" }}/> FelipeLC
            </Button>
          </Footer>
        </Layout>
      </Layout>
  );
}

