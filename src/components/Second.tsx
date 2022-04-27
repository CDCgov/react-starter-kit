import React, { useState } from 'react';

export default function SecondExample() {
	// Example of hook based state where we define the type as a boolean.
	const [showing, setShowing] = useState(true);

	return (
		<section className="second-component">
			{showing ? (
                <>
                    <h3>TypeScript Component</h3>
                    <p>Second component using TypeScript</p>
                </>
            ) : ''}
			<button type="button" className="btn btn-primary" onClick={() => setShowing(!showing)}>
				{showing ? 'Hide TypeScript Component' : 'Show TypeScript Component'}
			</button>
		</section>
	);
}
