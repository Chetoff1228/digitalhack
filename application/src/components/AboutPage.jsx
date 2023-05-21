import { Layout } from 'antd'
import image from './images/bg1.jpg'
import React from 'react'
import { Link } from 'react-router-dom'
import Title from 'antd/es/typography/Title'
import pl1 from './images/1.png'

function AboutPage() {
    return (
        <div>
           
            <Layout style={{
                height: '100vh',
                // width: '60%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding:'6%'
            }}>
                 <Layout style={{backgroundColor:"white", borderRadius:'30px', padding: '3%'}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Title level={1}>О нас</Title>
                    <Link to={'/'} style={{ color: 'black', textDecoration: 'underline' }}><h2>На главную</h2></Link>
                    </div>
                    <br/>
                    <Title level={4}>Мы представляем сервис поиска информации о лекарственных культурах на территории России.
                    Наш сервис позволяет быстро находить информацию по следующим категориям:
                    - Ареал произрастания культур, в том числе по регионам РФ;
                    - Долгота дня и количество солнечных дней по регионам РФ;
                    - Нахождение видов в Красной книге и Государственной фармакопее;
                    - Тип почвы, период посева и сбора урожая;
                    - Химический состав;
                    - Использование в медицинских препаратах и ежегодная потребность в сырье.
                    Помимо этого, сервис позволяет расширять список культур и обновлять актуальные данным по ним.
                    Стек решения (python, SQL):
                    - Сбор информации: tesseract, pypdf2, tabula, pdf2image
                    - Классификация: datetime, pandas, suntime, регулярные выражения, NLP, суммаризация текста
                    - Интеграционные интерфейсы: postgres, django, flask
                    Уникальность нашего решения заключается в возможности агрегирования информации из pdf-файлов при помощи ИИ и предоставлении данных по отдельным видам в коротком и удобном формате.</Title>
                </Layout>
            </Layout>
            <img src={'https://i.pinimg.com/564x/05/26/45/052645488d43e0a883bbbc90a78f5db1.jpg'} alt="BigCo Inc. logo" width={100} style={{position:'absolute', bottom:0,right:0, mixBlendMode:'multiply'}}></img>
        <img src={pl1} width={100} style={{position:'absolute', bottom:0, left:0, mixBlendMode:'multiply'}}></img>
        </div>
    )
}

export default AboutPage