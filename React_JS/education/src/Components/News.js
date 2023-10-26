import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    totalResults: 0,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    // console.log("This is Constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News API`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    //   console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async updateButton() {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      //   console.log(parsedData)
      this.setState({
        page: this.state.page,
        articles: parsedData.articles,
        loading: false,
      });
    }
  }

  // handlePrevClick = async () => {
  //   console.log("Previous");
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading : true});
  // let data = await fetch(url);
  // let parsedData = await data.json();
  // //   console.log(parsedData)
  // this.setState({
  //   page: this.state.page - 1,
  //   articles: parsedData.articles,
  //   loading: false,
  // });
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateButton();
  // };

  // handleNextClick = async () => {
  //   console.log("Next");
  //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading : true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   //   console.log(parsedData)
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // }
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateButton();
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    //   console.log(parsedData)
    this.setState({
      page: this.state.page,
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
    });
  };

  render() {
    // console.log("render");
    return (
      <>
        <h1 className="text-center border border-3 border-primary p-4 m-4">
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            <i className="fa-solid fa-left-long"></i> &nbsp; Previous
          </button> */}
        {/* {this.state.loading && <Spinner />} */}
        {/* <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &nbsp; <i className="fa-solid fa-right-long"></i>
          </button>
        </div> */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner />}
        >
          <div className="container-fluid">
            <div className="row p-md-5 p-sm-2">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 10) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 50)
                          : ""
                      }
                      imageUrl={element?.urlToImage}
                      source={
                        element.source.name ? element.source.name : "Media"
                      }
                      newsUrl={element?.url}
                      author={element.author ? element.author : "Unknown"}
                      date={
                        element.publishedAt ? element.publishedAt : "No Fix"
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            <i className="fa-solid fa-left-long"></i> &nbsp; Previous
          </button> */}
        {/* {this.state.loading && <Spinner />} */}
        {/* <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &nbsp; <i className="fa-solid fa-right-long"></i>
          </button>
        </div> */}
      </>
    );
  }
}
