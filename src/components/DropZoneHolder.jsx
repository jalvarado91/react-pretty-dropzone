'use strict';

import React from 'react';
import Dropzone from 'react-dropzone';
import ImagePreview from './ImagePreview';
import uuid from 'node-uuid';

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
					{theFiles.map((fileObj) =>
						<ImagePreview id={fileObj.id} onRemove={this.onRemoveFile.bind(this)} file={fileObj.file} key={'file-' + fileObj.id} />
					)}
				</Dropzone>
			</div>
		);
	}

	onDrop(files) {
		this.setState({
			files: this.state.files.concat(files.map(file => {
				return {
					id: uuid.v4(),
					file: file,
				};
			}))
		});
	}
	onRemoveFile(id){
		this.setState({
			files: this.state.files.filter((fileObj) => {
				return fileObj.id !== id;
			})
		});
	}
}
