import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
const baseUrl =
	"https://newsapi.org/v2/top-headlines?country=in&apiKey=c12b2d943f7c4f049b3461da8b83a6aa";
export class NewsComponent extends Component {
	constructor() {
		super();
		this.state = { articles: [] };
	}
	async componentDidMount() {
		await axios
			.get(baseUrl)
			.then((res) => {
				this.setState({ articles: res.data.articles });
				console.log(this.state.articles);
				console.log(typeof this.state.articles.title);
				console.log(typeof this.state.articles.description);
			})
			.catch((err) => console.log(`Errors are : ${err}`));
	}
	render() {
		return (
			<div className="container my-5">
				<h1>News Monkey - Top Headlines!!</h1>

				<div className="row">
					{this.state.articles.map((element) => {
						return (
							<div key={element.url} className="col-md-4">
								<NewsItem
									title={element.title}
									description={element.description}
									imgUrl={element.urlToImage}
									newsUrl={element.url}
								/>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default NewsComponent;
