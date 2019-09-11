import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Main from '../Components/Main'
import Block from '../Components/Block'
import { newsToday } from '../Components/Static/static'
import { get, path } from '../api'
import { SetMinHeight } from '../Asset/styled'
import { HeadPanel, BlockToday, ImageToday, HeadToday, DetailToday, Divide7030, Divide70, Divide30 } from '../Components/News/StyleNews'
export default class News extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newsToday: newsToday,
        }
    }
    componentDidMount = () => {
        window.scroll(0, 0)
        this.fetchNews()
    }
    // ------------------------------------------------------------------------------------------------------------------
    gotoRead = () => {
        this.props.history.push({ pathname: '/newsdetial/' + 1 })
    }

    // ------------------------------------------------------------------------------------------------------------------
    fetchNews = async () => {
        try {
            const news = await get(`/news/`);
            // console.log('news', news)
            this.setState({ newsToday: news }, () => console.log('news', this.state.newsToday))
            // this.setState({ newsToday: news })
        } catch (error) {
            console.log(error)
        }
    }
    // ------------------------------------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------------------------------------

    render() {
        // console.log('newsToday1', this.state.newsToday.length)
        return (
            <Main>
                <Block>
                    <Divide7030>
                        <Divide70>
                            {
                                this.state.newsToday.length === 0 ?
                                    <p style={{ color: '#bbb', textAlign: 'center' }} >ยังไม่มีเนื่อหาข่าว</p>
                                    : null
                            }
                            <div className='page-news-70' >
                                {this.renderNewsBig()}
                            </div>
                            <div className='page-news-mid'
                                style={this.state.newsToday.length < 4 ? { display: 'none' } : {}}>
                                <HeadPanel>ข่าวล่าสุด</HeadPanel>
                                <div className='dp-flex'>
                                    {this.renderNewsToday()}
                                </div>
                            </div>

                            <div className='page-news-bottom'
                                style={this.state.newsToday.length < 7 ? { display: 'none' } : {}}>
                                <HeadPanel>ข่าวทั้งหมด</HeadPanel>
                                <SetMinHeight high={900} className={"styleScroll"}>
                                    {this.renderNewsLatest()}
                                </SetMinHeight>
                            </div>
                        </Divide70>
                        <Divide30>
                            <div className='page-news-30'
                                style={this.state.newsToday.length < 2 ? { display: 'none' } : {}}>
                                {this.renderNewsSmall()}
                            </div>
                            <div className='panel-facebook' >
                                <div class="fb-page"
                                    data-href="https://www.facebook.com/&#xe28;&#xe39;&#xe19;&#xe22;&#xe4c;&#xe14;&#xe33;&#xe23;&#xe07;&#xe18;&#xe23;&#xe23;&#xe21;&#xe08;&#xe31;&#xe07;&#xe2b;&#xe27;&#xe31;&#xe14;&#xe02;&#xe2d;&#xe19;&#xe41;&#xe01;&#xe48;&#xe19;-1492922827625207/"
                                    data-tabs="timeline"
                                    data-small-header="false"
                                    data-adapt-container-width="true"
                                    data-hide-cover="false"
                                    data-show-facepile="false">
                                    <blockquote
                                        cite="https://www.facebook.com/&#xe28;&#xe39;&#xe19;&#xe22;&#xe4c;&#xe14;&#xe33;&#xe23;&#xe07;&#xe18;&#xe23;&#xe23;&#xe21;&#xe08;&#xe31;&#xe07;&#xe2b;&#xe27;&#xe31;&#xe14;&#xe02;&#xe2d;&#xe19;&#xe41;&#xe01;&#xe48;&#xe19;-1492922827625207/"
                                        class="fb-xfbml-parse-ignore">
                                        <a href="https://www.facebook.com/&#xe28;&#xe39;&#xe19;&#xe22;&#xe4c;&#xe14;&#xe33;&#xe23;&#xe07;&#xe18;&#xe23;&#xe23;&#xe21;&#xe08;&#xe31;&#xe07;&#xe2b;&#xe27;&#xe31;&#xe14;&#xe02;&#xe2d;&#xe19;&#xe41;&#xe01;&#xe48;&#xe19;-1492922827625207/">
                                            ศูนย์ดำรงธรรมจังหวัดขอนแก่น </a>
                                    </blockquote>
                                </div>
                            </div>
                        </Divide30>
                    </Divide7030>
                </Block>
            </Main >
        )
    }
    renderNewsBig() {
        let item = this.state.newsToday.slice(0, 1);
        return item.map((el, i) => {
            // console.log('newsToday', el.image)
            return (
                <React.Fragment>
                    <div className='page-news-70-title' >
                        <div className='-news-title'>
                            <h1>{el.title}</h1>
                            <p>{el.date}</p>
                        </div>
                        <div className='-news-read'>
                            <Link to={`/newsdetial/${+el.news_id}`} className='btn-news-read'>อ่านต่อ..</Link>
                            {/* <button onClick={this.gotoRead} >อ่านต่อ</button> */}
                        </div>
                    </div>
                    <img src={path + el.path} alt='' />
                </React.Fragment>
            )
        })
    }
    renderNewsSmall() {
        let item = this.state.newsToday.slice(1, 3);
        return item.map((el, i) => {
            return (
                <div className='page-news-30-block' >
                    <div className='page-news-30-title'>
                        <div className='-news-title'>
                            <h1>{el.title}</h1>
                            <p>{el.date}</p>
                        </div>
                        <div className='-news-read'>
                            <Link to={`/newsdetial/${+el.news_id}`} className='btn-news-read'>อ่านต่อ..</Link>
                        </div>
                    </div>
                    <img src={path + el.path} alt='' />
                </div>
            )
        })
    }
    renderNewsToday() {
        let item = this.state.newsToday.slice(3, 6);
        return item.map((el, i) => {
            return (
                <BlockToday>
                    <ImageToday>
                        <img src={path + el.path} alt='' />
                    </ImageToday>
                    <HeadToday>
                        <h1>{el.title}</h1>
                        <p>{el.date}</p>
                    </HeadToday>
                    <DetailToday> <div className="-ellipsis" dangerouslySetInnerHTML={{ __html: el.detail }} /></DetailToday>
                    <Link to={`/newsdetial/${+el.news_id}`} className='btn-readmore'>อ่านต่อ..</Link>
                </BlockToday>
            )
        })
    }
    renderNewsLatest() {
        let item = this.state.newsToday.slice(6);
        return item.map((el, i) => {
            return (
                <BlockToday>
                    <ImageToday>
                        <img src={path + el.path} alt='' />
                    </ImageToday>
                    <HeadToday>
                        <h1>{el.title}</h1>
                        <span>{el.date}</span>
                        {/* <p>{el.detail}</p> */}
                        <div className="-ellipsis" dangerouslySetInnerHTML={{ __html: el.detail }} />
                        <Link to={`/newsdetial/${+el.news_id}`} className='btn-readmore'>อ่านต่อ..</Link>
                    </HeadToday>
                </BlockToday>

            )
        })
    }
}