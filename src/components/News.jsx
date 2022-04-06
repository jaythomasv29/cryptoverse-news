import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card, Image } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title, Text } = Typography;
const { Option } = Select;

const demoImage = 'https://static.independent.co.uk/2022/03/28/09/bitcoin%20price%20latest%202022%20btc.jpg?quality=75&width=640&auto=webp&crop=982:726,smart';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data } = useGetCryptosQuery(100)
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: simplified? 6: 12 })
  console.log('data',  data)
  if(!cryptoNews?.value) return 'Loading...'
  return (
    <>
      <Row gutter={[24, 24]}>
        {
          !simplified && (
            <Col span={24}>
              <Select
                showSearch
                className="select-news"
                placeholder="Select a Crypto"
                
                onChange={(value) => setNewsCategory(value)}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="Cryptocurrency">Cryptocurrency</Option>
                { data?.data?.coins?.map(coin => (
                  <Option value={coin.name} key={coin.uuid}>{coin.name}</Option>
                ))}
              </Select>
            </Col>
          )
        }
        {
        cryptoNews.value.map((article, idx) => (
          <Col xs={24} sm={12} lg={8} key={idx}>
            <Card 
              
              hoverable
              className="news-card"
            >
              <a href={article.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={5}>{article.name}</Title>
                  <Image src={article?.image?.thumbnail?.contentUrl || demoImage } alt="news-article"/>
                </div>
                <p>
                  { article.description > 100 ? `${article.description.substring(0,100)}...` : article.description }
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar src={article.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news-avatar"/>
                    <Text type="secondary" style={{fontSize: '0.7rem'}}className="provider-name">{article?.provider[0]?.name} {moment(article.datePublished).startOf('ss').fromNow()}</Text>
                  </div>

                </div>
              </a>
            </Card>
          </Col>
        ))
        }
      </Row>
    </>
  )
}

export default News