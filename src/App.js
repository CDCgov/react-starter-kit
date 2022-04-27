import React, { useState, useEffect } from 'react';
import Context from './context';
import Example from './components/Example';

import './scss/styles.scss';

export default function App() {
	const [pageTitle, setPageTitle] = useState('CDC React Starter Kit');

    // useEffect watches specific state variables
	useEffect( () => {
        // here, this is run just once when the component renders
	}, [] );

	return (
		<Context.Provider value={{ pageTitle, setPageTitle }}>
			<Example backgroundColor="#F5F5F5" />
		</Context.Provider>
	);
}
