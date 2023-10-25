import React, { Component } from "react";
import Spinner from './Spinner'
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'


export default class News extends Component {
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

  constructor() {
    super();
    // console.log("This is Constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //   console.log(parsedData)
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //   console.log(parsedData)
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles, 
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //   console.log(parsedData)
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  }
  };

  render() {
    // console.log("render");
    return (
      <div className="container my-4 ">
        <h1 className="text-center border border-3 border-primary p-4 m-4">
          Top Headlines
        </h1>
        <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              <i className="fa-solid fa-left-long"></i> &nbsp; Previous
            </button>
            <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>
              Next &nbsp; <i className="fa-solid fa-right-long"></i>
            </button>
          </div>
          {this.state.loading && <Spinner />}
        <div className="row align-items-center p-md-5 p-sm-2">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 10) : ""}
                  description={
                    element.description ? element.description.slice(0, 50) : ""
                  }
                  imageUrl={element?.urlToImage}
                  newsUrl={element?.url}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              <i className="fa-solid fa-left-long"></i> &nbsp; Previous
            </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>
              Next &nbsp; <i className="fa-solid fa-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
