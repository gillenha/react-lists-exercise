import React from 'react';

const ValidationComponent = (props) => {
		const inputLength = props.value.length;
		if (inputLength < 5) {
			return (
			<div>
				<p name="message">Type up to five characters</p>
			</div>
		)
	}
		return (
			<div>
				<p>AHH, THAT'S TOO MANY!</p>
			</div>
		)
}

export default ValidationComponent;