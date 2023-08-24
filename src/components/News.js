import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`
  }
  async updatenews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0283c2def3b24e4eadac30de8c6460c3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updatenews();
  }
  //   handlePrevClick = async () => {
  //     this.setState({ page: this.state.page - 1 });
  //     this.updateNews();
  // }
  // handleNextClick = async () => {
  //     this.setState({ page: this.state.page + 1 });
  //     this.updateNews()
  // }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0283c2def3b24e4eadac30de8c6460c3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };

  render() {
    return (
      <>
        <h1 className='text-center' style={{ marginTop: "70px" }}>
          NewsApp - Top Headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && this.state.articles.length === 0 ? (<Spinner />) : (

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className='container my-3'>
              <div className="row">
                {this.state.articles.map((element) => {
                  return <div className="col-md-3" key={element.url} >
                    <NewsItem tittle={element.title} description={element.description}
                      imgurl={element.urlToImage} newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        )}
      </>
    )
  }
}

export default News;
