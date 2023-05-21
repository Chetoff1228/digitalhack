import image from './images/bg1.jpg'
import pl1 from './images/1.png'
import data from './dbs/data3'
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete } from 'antd';
import React, { useEffect, useState } from 'react'
import UploadFileElem from './UploadFileElem'
import { Col, Input, Layout, Row } from 'antd'
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const { Search } = Input;
const { TextArea } = Input;

function WorkingPage() {
  const [searchResults, setSearchResults] = useState([])
  const [selectedPlant, setSelectedPlant] = useState({
    name: "",
  })
  const [plants, setPlants] = useState([])
  const titleColor = { color: '#12D6A7' }
  const styleColLeft = { background: '#ffffff', borderRadius: '10px', padding: '1%', textAlign: 'center', height: '50vh', overflowY:"scroll" }
  const styleColRight = { background: '#ffffff', borderRadius: '10px', padding: '1%', height: '75vh', overflowY:"scroll" }
  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: '#61B97E',
      }}
    />
  );
  const onSearch = (value) => {
    let k = JSON.parse(localStorage.getItem("plants"))
    if(k!=null)
    k.forEach(el => {plants.push(el)});
    console.log(plants)//доработать добавление из л сторадж
    if(plants.length>0 && value!=""){
      setSearchResults(plants.filter(item => item.name.toLowerCase().includes(value.toLowerCase())))
    }
  }
  // console.log(searchResults)

  // function onSelect(value) {
  //   console.log('onSelect', value);
  // }
  useEffect(() => {
    setPlants(data)
  }, [])
  console.log(plants)
  return (
    <div>
      <Layout style={{ height: '100vh' }}>
        <Layout style={{
          backgroundImage: `url(${image})`, 
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Row>
            <Col span={10} style={styleColLeft} offset={1}>
              {/* <Title level={4}>Загрузите изображение для выявления нарушений и нахождение несанкционированных навалов отходов</Title> */}
              <Search
                placeholder="Ищем растение"
                allowClear
                enterButton="Поиск"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
                />
              {/* <AutoComplete
                dataSource={searchResults}
                allowClear
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="input here"
              /> */}

              {searchResults.length==0 ? <Title level={4}>Результаты поиска появятся здесь</Title> : 
              searchResults.map((item, index)=> {
                return <h1 style={{cursor:'pointer', color:'#61B97E'}} onClick={()=>{setSelectedPlant(item)}} key={index}>{item.name}</h1>}
              )}
                
              {searchResults.length!=0 && <Title level={5}>Нажмите на нужное растение из списка выше</Title>}
              <Link to='/plant'>Нет нужного растения? Добавьте новое!</Link>
              {/* <UploadFileElem OnSuccess={setUploaded} /> */}
            </Col>
            <Col span={10} style={styleColRight} offset={2}>
              {/* <Title level={4}>Добавить новое растение в базу</Title>
              <Input placeholder="Название растения" allowClear defaultValue={selectedPlant.name}/>
              <TextArea placeholder="Описание растения" allowClear /> */}
              
              {selectedPlant.name=="" ? <Title level={4}>Информация о растении появится здесь</Title> :
                <div>
                  <Title level={4}>Информация о растении</Title>
                  <Title level={5}>Название: <u>{selectedPlant.name}</u></Title>
                  <Title level={5}>Описание: <u>{selectedPlant.data_capt.split('.')[1]}</u></Title>
                  <Title level={5}>Ареал: <u>{selectedPlant.data_are.split('.')[1]}</u></Title>
                  <Title level={5}>Экология: <u>{selectedPlant.data_eco.split('.')[1]}</u></Title>
                  <Title level={5}>Ресурсы: <u>{selectedPlant.data_res.split('.')[1]}</u></Title>
                  <Title level={5}>Xимический состав: <u>{selectedPlant.data_him.split('.')[1]}</u></Title>
                  <Title level={5}>Фармакологические  свойства: <u>{selectedPlant.data_farm.split('.')[1]}</u></Title>
                </div>}
            </Col>
          </Row>
        <img src={pl1} width={100} style={{position:'absolute', bottom:0, left:0, mixBlendMode:'multiply'}}></img>
        </Layout>
      </Layout>

    </div>
  )
}

export default WorkingPage