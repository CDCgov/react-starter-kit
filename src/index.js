import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Here is where you attach each instance of your React App to the page
 * If you have a repeating widget (more than one), you can modify the
 * query selector to look for a class or custom HTML element, rather than
 * finding just 1 element to hook to / build inside.
 *
 * Example:
 *   const element = document.querySelectorAll('.custom-element-class')
 */
const element = document.querySelector('#react-container');
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	element
);
