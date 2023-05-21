import pl1 from './images/1.png'
import data from './dbs/data3'
import React, { useEffect, useState } from 'react'
import image from './images/bg1.jpg'
import { Link } from 'react-router-dom'
import { Button, Input, Layout } from 'antd'
import Title from 'antd/es/typography/Title'

function CreatePlantPage() {
    const [plants, setPlants] = useState([])
    const [name, setName] = useState('')
    const [data_capt, setData_capt] = useState('')
    const [data_are, setData_are] = useState('')
    const [data_eco, setData_eco] = useState('')
    const [data_res, setData_res] = useState('')
    const [data_him, setData_him] = useState('')
    const [data_farm, setData_farm] = useState('')

    const [arr, setArr] = useState([])
    const onSubmit = ()=> {
        const obj = {
            name:name,
            data_capt:data_capt,
            data_are:data_are,
            data_eco:data_eco,
            data_res:data_res,
            data_him:data_him,
            data_farm:data_farm
        }
        // plants.push(obj)

        if(arr!=null){
        // console.log(JSON.parse(localStorage.getItem('plants')))
        console.log(arr)
        arr.push(obj)
        localStorage.setItem("plants", JSON.stringify(arr))
        }
        else 
        localStorage.setItem("plants", JSON.stringify(obj))

        setName("")
        setData_capt("")
        setData_are("")
        setData_eco("")
        setData_res("")
        setData_him("")
        setData_farm("")
    }
    useEffect(()=>{
        setPlants(data)
    },[])
    return (
        <Layout style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{textAlign:'center'}}>
                <Title level={1}>Добавить новое растение</Title>
            </div>
            <div style={{backgroundColor:'white', padding:'2%', borderRadius:'20px'}}>
                <Title level={5}>Название растения</Title>
                <Input value={name} onChange={(e)=> setName(e.target.value)}/>
                <Title level={5}>Описание</Title>
                <Input value={data_capt} onChange={(e)=> setData_capt(e.target.value)}/>
                <Title level={5}>Ареал</Title>
                <Input value={data_are} onChange={(e)=> setData_are(e.target.value)}/>
                <Title level={5}>Экология</Title>
                <Input value={data_eco} onChange={(e)=> setData_eco(e.target.value)}/>
                <Title level={5}>Ресурсы</Title>
                <Input value={data_res} onChange={(e)=> setData_res(e.target.value)}/>
                <Title level={5}>Xимический состав</Title>
                <Input value={data_him} onChange={(e)=> setData_him(e.target.value)}/>
                <Title level={5}>Фармакологические  свойства</Title>
                <Input value={data_farm} onChange={(e)=> setData_farm(e.target.value)}/>
                <Button style={{marginTop:'4%', marginBottom:'2%', background:'#61B97E'}} type='primary' onClick={onSubmit}>Добавить</Button>
                </div>
                <Link to={'/results'} style={{ color: 'white', textDecoration: 'underline' }}><h2>Вернуться к поиску</h2></Link>
                <img src={'https://i.pinimg.com/564x/05/26/45/052645488d43e0a883bbbc90a78f5db1.jpg'} alt="BigCo Inc. logo" width={100} style={{position:'absolute', bottom:0,right:0, mixBlendMode:'multiply'}}></img>
        <img src={pl1} width={100} style={{position:'absolute', bottom:0, left:0, mixBlendMode:'multiply'}}></img>
        </Layout>


    )
}

export default CreatePlantPage