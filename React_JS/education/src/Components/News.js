import React, {useEffect, useState} from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import { useEffect } from "react";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${this.capitalizeFirstLetter(props.category)} - News API`; 

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updateButton =  async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    //   console.log(parsedData)
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updateButton();
  }, [])
  // async componentDidMount() {
  //   this.updateButton();
    // props.setProgress(10);
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    // // 2f4d6fe8d7114fc18cb952656e28245c
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // props.setProgress(50);
    // //   console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    // props.setProgress(100);
  // }

  // handlePrevClick = async () => {
  //   console.log("Previous");
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=${this.state.page-1}&pageSize=${props.pageSize}`;
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
  //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2f4d6fe8d7114fc18cb952656e28245c&page=${this.state.page+1}&pageSize=${props.pageSize}`;
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

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    //   console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
      <div style={{marginTop:"100px"}}>
        <h1 className="text-center border border-3 border-primary p-4 m-4">
          Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
      </div>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            <i className="fa-solid fa-left-long"></i> &nbsp; Previous
          </button> */}
        {loading && <Spinner />}
        {/* <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &nbsp; <i className="fa-solid fa-right-long"></i>
          </button>
        </div> */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container-fluid">
            <div className="row p-md-5 p-sm-2">
              {articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={index}>
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
              Math.ceil(this.state.totalResults / props.pageSize)
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
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  // totalResults: 0,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

