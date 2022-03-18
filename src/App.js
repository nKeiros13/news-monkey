import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";

export class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<NewsComponent />
			</div>
		);
	}
}

export default App;
