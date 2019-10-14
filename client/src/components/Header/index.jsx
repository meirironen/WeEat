import React, { PureComponent } from "react";
import Darken from "../Darken";

import styles from "./styles.module.scss";

const initialState = {
	value: "",
	isLoading: false,
	results: []
};

class Header extends PureComponent {
	state = initialState;

	render() {
		const { isLoading, results, value } = this.state;

		return (
			<header className={styles.header}>
				<Darken percentage={15} />
				<h1>
					<a href="/">WeEat</a>
				</h1>
				<h2>It’s 12:00 and you’re hungry...</h2>
			</header>
		);
	}
}

export default Header;
