import React from 'react';
import { Card, Row, Col, Statistic, Progress, Layout } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './Account.css';
const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <div style={{ color: '#fff', fontSize: '20px' }}>Amatip IT Dashboard</div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Active Projects"
                value={11}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="projects"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="New Clients"
                value={9}
                precision={0}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="clients"
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Completed Projects"
                value={85}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card title="Project Progress">
              <Progress percent={75} status="active" />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Customer Satisfaction">
              <Progress type="circle" percent={70} />
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Amatip IT ©2024 Created to Empower</Footer>
    </Layout>
  );
};

export default Dashboard;
