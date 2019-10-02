import React from "react";

const style = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0
};

const Darken = ({ percentage = 0 }) => (
	<div style={{ ...style, backgroundColor: `rgba(0,0,0,.${percentage})` }} />
);

export default Darken;