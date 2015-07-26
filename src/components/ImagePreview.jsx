'use strict';

import React from 'react';

export default class ImagePreview extends React.Component {
	constructor(props) {
		super(props);

		let {file} = this.props;

		this.state = {
			src: URL.createObjectURL(file),
			thumbReady: false
		};

		// this.readImage(file);
	}
	componentDidMount() {
		let canvas = document.createElement('canvas');
		let img = this.refs.thumb.getDOMNode();

		img.onload = () => {
			this.resizeImage(canvas, img);
		};
	}
	componentWillUnmount() {
		URL.revokeObjectURL(this.state.src);
	}
	render() {
		let {props} = this.props;
		let thumbReady = this.state.thumbReady;

		let styles = {
			imageStyles: {
				borderRadius: '15px',
				width: '100%',
				height: 'auto',
				display: 'block'
			},
			wrapperStyles: {
				zIndex: '200',
				height: 'auto',
				display: thumbReady ? 'inline-block' : 'none',
				padding: '15px',
			}
		};

		let removeButton = (thumbReady) ? <button onClick={(e) => this.onClickRemove(e)}>Remove File</button> : '';

		return (
			<div {...props} style={styles.wrapperStyles} >
				<img ref="thumb" {...props} src={this.state.src} style={styles.imageStyles} />
				{ removeButton }
			</div>
		);
	}
	onClickRemove(e) {
		e.stopPropagation();
		this.props.onRemove(this.props.i);
	}

	resizeImage(canvas, img) {
		let srcWidth = img.width;
		let srcHeight = img.height;
		let srcRatio = srcWidth / srcHeight;

		let trgWidth = 200;
		let trgHeight = 200;
		let trgRatio = trgWidth / trgHeight;

		// horizontal src on more vertical target
		// fit height of src on height of target
		if(srcRatio > trgRatio) {
			srcWidth = srcHeight * trgRatio;
			srcHeight = img.height;
		}
		// Vertical src on more horizontal target
		// fit width from src to width of target
		else {
			srcWidth = img.width;
			srcHeight = srcWidth / trgRatio;
		}

		let srcX = (img.width - srcWidth) / 2;
		let srcY = (img.height - srcHeight) / 2;

		canvas.width = trgWidth;
		canvas.height = trgHeight;

		let ctx = canvas.getContext('2d');
		ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, trgWidth, trgHeight);
		let dataURL = canvas.toDataURL('image/jpeg');

		URL.revokeObjectURL(this.state.src);
		this.setState({
			src: dataURL,
			thumbReady: true
		});
	}
}
