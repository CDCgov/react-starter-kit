import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
import testImage from '../assets/test-image.png';
import SecondComponent from './Second.tsx';

const Example = ({ backgroundColor }) => {
	/**
	 * A simple piece of state that is a number we display on the page.
	 * This code creates the actual state variable `number` and `setNumber`
	 * The method `setNumber` is used to update this piece of state.
	 */
	const [number, setNumber] = useState(0);

	/**
	 * Here, we're pulling a bit of state from the global context instead
	 * of passing it down. To see how this is passed down, check App.js.
	 */
	const { pageTitle, setPageTitle } = useContext(Context);

	/**
	 * You can set inline styles by declaring a regular
	 * object and passing it to the element in the JSX.
	 * Generally you should only do this when the styles
	 * need to change on the fly and stick to regular SASS
	 * and class names.
	 * Learn more: https://reactjs.org/docs/dom-elements.html#style
	 */
	let styleObj = {};

    /**
     * Including the background color prop that was passed to
     * this component in index.js. See below where it's defined as
     * an expected prop value
     */
    if ( backgroundColor ) {
        styleObj.backgroundColor = backgroundColor;
    }

    // here we're watching number
	useEffect( () => {
        if (10 === number) {
            alert('You\'ve reached 10 clicks.');
        } else if (20 < number) {
            alert('You\'re at ' + number + ' clicks. Resetting.');
            setNumber(0);
        }
	}, [number] );

	/**
	 * Functional components always return a JSX object, which is
	 * the templating language React uses. It's a modified form of HTML
	 * usually surrounded by parenthesis. There are some differences,
	 * usually in attribute names.
	 * Learn more: https://reactjs.org/docs/introducing-jsx.html
     * Also important to note for anyone new to React, this HTML is rerendered
     * on every change to state, by design.
	 */
	return (
		<section style={styleObj} className="demo-react-app container mt-5">
			<img src={testImage} alt="Test" />
			<h2 className="mb-3">{pageTitle}</h2>
			<p>
				This is an example component showing foundational React concepts like state, props and JSX. View the
				source code for more helpful information.
			</p>
			<p>
				Before using this starter kit it&apos;s very important that you read the{' '}
				<a href="https://github.com/CDCgov/react-starter-kit/blob/master/README.md">documentation</a> which
				contains helpful tips and guidelines to adhere to when creating your codebase that keep things easy to
				understand and maintainable for the entire team.
			</p>
			<h4 className="mt-4 mb-2">Example 1 - Local State</h4>
			<p>
				This example is simple. There&apos;s a piece of state held in the <code>Example.js</code> component that
				is a number. Clicking the first button increments by one. Clicking the reset button simply sets the
				state to 0.
			</p>
			<p className="h5 mt-3">
				<strong>You&apos;ve clicked the button: {number} times.</strong>
			</p>
			<div className="mt-3 mb-5">
				<button onClick={() => setNumber(number + 1)} type="button" className="btn btn-primary btn-lg mr-2">
					Add One
				</button>
				<button onClick={() => setNumber(0)} type="button" className="btn btn-outline-danger btn-lg">
					Reset Counter
				</button>
			</div>
			<h4 className="mt-6 mb-2">Example 2 - Context API</h4>
			<p>
				Here&apos;s an example on how to hook up a text field that also uses React&apos;s{' '}
				<a href="https://reactjs.org/docs/context.html">Context API</a>. The text based piece of state that is
				the title is stored in the parent component, <code>App.js</code> but you can access it and change it
				here. Refer to the README for more information.
			</p>
			<form>
				<label htmlFor="changeTitle">
					<strong>Change Title</strong>
					<input
						type="text"
						name="changeTitle"
						id="changeTitle"
                        className="form-control"
						value={pageTitle}
						onChange={(e) => setPageTitle(e.target.value)}
					/>
				</label>
			</form>
			<SecondComponent />
		</section>
	);
}

// Detail expected props
Example.propTypes = {

    // See here for more details on propTypes:
    // https://reactjs.org/docs/typechecking-with-proptypes.html
    // https://www.npmjs.com/package/prop-types
    backgroundColor: PropTypes.string,
}

// Finally export your component function
export default Example;
