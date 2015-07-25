'use strict';

import React from 'react';

export default class ImagePreview extends React.Component {
	constructor(props) {
		super(props);

		let {file} = this.props;

		this.state = {
			src: URL.createObjectURL(file)
		};

		// this.readImage(file);
	}
	componentWillUnmount() {
		URL.revokeObjectURL(this.state.src);
	}
	render() {
		let {props} = this.props;

		let imageStyles = {
			borderRadius: '5px',
			width: '100%',
			height: 'auto'
		};

		let wrapperStyles = {
			maxWidth: '125px',
			height: 'auto',
			display: 'inline-block',
			padding: '15px',
		};

		return (
			<div {...props} style={wrapperStyles} >
				<img {...props} style={imageStyles} src={this.state.src} />

			</div>
		);
	}
	// readImage(file) {
	// 	// let reader = new FileReader();
	// 	// reader.onloadend = () => {
	// 	// 	this.setState({
	// 	// 		src: reader.result
	// 	// 	});
	// 	// };
	// 	// reader.readAsDataURL(file);
	// 	this.setState({
	// 		src: URL.createObjectURL(file)
	// 	});
	// }

}
