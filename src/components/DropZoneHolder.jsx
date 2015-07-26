'use strict';

import React from 'react';
import Dropzone from 'react-dropzone';
import ImagePreview from './ImagePreview';

export default class DropZoneHolder extends React.Component {
	constructor() {
		super();

		this.state = {
			files: []
		};
	}

	render() {
		const theFiles = this.state.files;
		return (
			<div>
				<Dropzone onDrop={ (files) => this.onDrop(files)} size={'100%'}>
					<div> Testing testing </div>
					{theFiles.map((file, i) =>
						<ImagePreview onRemove={() => this.onRemoveFile(i)} file={file} key={i} />
					)}
				</Dropzone>
			</div>
		);
	}

	onDrop(files) {
		this.setState({
			files: this.state.files.concat(files.map(file => {
				return file;
			}))
		});
	}
	onRemoveFile(index){
		this.setState({
			files: this.state.files.filter((value, i) => {
				return i !==k
			})
		});
		console.log('remove file at ', index);
	}
}
