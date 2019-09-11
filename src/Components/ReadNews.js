import React, { useState, useEffect } from 'react'
import { Carousel } from "react-responsive-carousel"
import { withRouter } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Divide70 } from './News/StyleNews';
import { post } from '../api';
export const RenderNews = withRouter(({ match, id }) => {
    const [readDetailNews, setRead] = useState({ images: [], title: '', date: '', detail: '' })
    const [news_id, setNewsId] = useState(id)

    useEffect(() => {
        console.log(id)
        fetchRead(news_id)
    }, [news_id])

    useEffect(() => {
        console.log(readDetailNews)
    }, [readDetailNews])

    function renderImage() {
        return (
            <Carousel autoPlay infiniteLoop={true} className='-newsDetail-Carousel' >
                {renderNewDetail()}
            </Carousel>
        )
    }

    function renderNewDetail() {
        if (readDetailNews.images.length <= 0) {
            return null
        }

        return readDetailNews.images.map((el, i) => {
            return <img src={el} alt='' />

        })
    }

    async function fetchRead(news_id) {
        try {

            const readDetailNews = await post('/news/read', { news_id, })
            setRead(readDetailNews)
        } catch (error) {
            console.log(error)
        }
    }

    return <Divide70>
        {renderImage()}
        <div className='-newsDetail-70-text' >
            <h1>{readDetailNews.title}</h1>
            <span>{readDetailNews.date}</span>
            <p>{readDetailNews.detail}</p>
        </div>
    </Divide70>

})