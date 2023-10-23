import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    console.log("This is Constructor");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=2f4d6fe8d7114fc18cb952656e28245c";
      let data = await fetch(url);
      let parsedData = await data.json()
    //   console.log(parsedData)
      this.setState({articles: parsedData.articles})
  }

  render() {
    console.log("render");
    return (
      <div className="container my-4 ">
        <h1 className="text-center border border-3 border-primary p-4 m-4">Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 " key={element.imageUrl}>
                <NewsItem
                  title={element?.title?.slice(0, 40)}
                  description={element?.description?.slice(0, 100)}
                  imageUrl={element?.urlToImage}
                  newsUrl={element?.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
