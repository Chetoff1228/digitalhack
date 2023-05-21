import React, { useState } from 'react'
import image from './images/bg1.jpg'
import pl1 from './images/1.png'
import UploadFileElem from './UploadFileElem'
import { Button, Col, Divider, Layout, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import { Image } from 'antd';
import AboutPage from './AboutPage';
const { Title } = Typography;
function TitlePage() {
  const navigate = useNavigate()
  const OnClick = () => navigate('/results')
  const [size, setSize] = useState('large');
  const titleColor ={
    color: '#ffffff',
    marginBottom: '1%',
  }
  return (
    <div >
      <Layout style={{
        textAlign:'center', 
        width:'100%'}}>
      </Layout>
      <Layout style={{
        height:'100vh', 
          }}>
      <Layout style={{
        backgroundImage: `url(${image})`, 
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        display:'flex',
        justifyContent:'center',
        alignItems:'center', 
        textAlign:'center',
      }}>
        <Row justify="center">
          <Col span={14}>
          <Title style={titleColor}>ИИ помогает фермерам</Title>
          <Title style={titleColor} level={3}> Уникальная система сбора данных о видах лекарственных трав из открытых источников</Title>
          <Button size={size} style={{marginTop:'1%', marginBottom:'3%', background:"#E1ED1C", color:"green"}} onClick={OnClick}>Начать работу</Button>
          <Link to={'/about'} style={{color:'white', textDecoration:'underline'}}><h2>О нас</h2></Link>
          </Col>
        </Row>
        <img src={'https://i.pinimg.com/564x/05/26/45/052645488d43e0a883bbbc90a78f5db1.jpg'} alt="BigCo Inc. logo" width={100} style={{position:'absolute', bottom:0,right:0, mixBlendMode:'multiply'}}></img>
        <img src={pl1} width={100} style={{position:'absolute', bottom:0, left:0, mixBlendMode:'multiply'}}></img>
      </Layout>
      </Layout>
      <img src={'https://i.pinimg.com/564x/05/26/45/052645488d43e0a883bbbc90a78f5db1.jpg'} alt="BigCo Inc. logo" width={100} style={{position:'absolute', bottom:0,right:0, mixBlendMode:'multiply'}}></img>
        <img src={pl1} width={100} style={{position:'absolute', bottom:0, left:0, mixBlendMode:'multiply'}}></img>
    </div>
  )
}

export default TitlePage