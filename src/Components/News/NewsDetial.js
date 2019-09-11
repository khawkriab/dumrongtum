import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { get, post, path } from '../../api'
import { newsToday, newsDetail } from '../Static/static'
import Main from '../Main'
import Block from '../Block'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { HeadNews, Divide7030, Divide70, Divide30, } from '../News/StyleNews'

export default class NewsDetial extends Component {
    constructor(props) {
        super(props)

        this.state = {
            news_id: '',
            newsToday: [],
            readDetailNews: { images: [], title: '' },
            images: [],
            title: '',
            date: '',
            detail: '',
        }
    }
    // ------------------------------------------------------------------------------------------------------------------ 
    componentDidMount = async () => {
        window.scroll(0, 0)
        this.fetchNews();
        this.fetchRead(this.props.match.params.id);
        console.log('this.props', this.props.match.params.id)
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextProps.match.params.id !== this.props.match.params.id || nextState.readDetailNews.title !== this.state.readDetailNews.title) {
            this.fetchRead(nextProps.match.params.id)
        }

        return true
    }

    // ------------------------------------------------------------------------------------------------------------------
    fetchNews = async () => {
        try {
            const news = await get(`/news/`);
            this.setState({ newsToday: news }, () => console.log('newsToday', this.state.newsToday))
        } catch (error) {
            console.log(error)
        }
    }
    // ------------------------------------------------------------------------------------------------------------------
    fetchRead = async (news_id) => {
        try {
            console.log(news_id)
            const readDetailNews = await post('/news/read', { news_id, })
            this.setState({ readDetailNews: readDetailNews })
        } catch (error) {
            console.log(error)
        }
    }
    // ------------------------------------------------------------------------------------------------------------------
    readNews = () => {
        this.props.history.push({ pathname: `/newsdetial/` + this.props.match.params.id })
    }
    // ------------------------------------------------------------------------------------------------------------------
    render() {
        const { news_id, readDetailNews, } = this.state
        return (
            <Main>
                <Block>
                    <Divide7030>
                        <Divide70>
                            {this.renderImage()}
                            <div className='-newsDetail-70-text' >
                                <h1>{readDetailNews.title}</h1>
                                <span>{readDetailNews.date}</span>
                                <div className="-ellipsis" dangerouslySetInnerHTML={{ __html: readDetailNews.detail }} />
                                {/* <p>{readDetailNews.detail}</p> */}
                            </div>
                        </Divide70>
                        <Divide30>
                            <HeadNews>ข่าวทั้งหมด</HeadNews>
                            <div className='scrollnewsDe styleScroll' >
                                {this.renderNewsAll()}
                            </div>
                        </Divide30>
                    </Divide7030>
                </Block>
            </Main>
        )
    }
    renderImage() {
        return (
            <Carousel autoPlay infiniteLoop={true} className='-newsDetail-Carousel' >
                {
                    this.state.readDetailNews.images.map((el, i) => {
                        return <img src={path + el.path} alt='' key={i} />
                    })
                }
            </Carousel>
        )
    }
    renderNewsAll() {
        return this.state.newsToday.map((el, i) => {
            return (
                <Link to={`/newsdetial/${+el.news_id}`} className='-newsDetail'>
                    <div className='-newsDetail-pic'>
                        <img src={path + el.path} alt='' />
                    </div>
                    <div className='-newsDetail-text'>
                        <h1>{el.title}</h1>
                        <p>{el.date}</p>
                    </div>
                </Link>
            )
        })
    }
}
