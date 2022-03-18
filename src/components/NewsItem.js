import React, { Component } from "react";
const imgNotFound =
	"https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png";
export class NewsItem extends Component {
	render() {
		let { title, description, imgUrl, newsUrl } = this.props;
		return (
			<div>
				<div className="card my-3" style={{ width: "18rem" }}>
					<img
						src={imgUrl ? imgUrl : imgNotFound}
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						<a
							href={newsUrl}
							target="_blank"
							rel="noreferrer"
							className="btn btn-sm btn-primary"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
