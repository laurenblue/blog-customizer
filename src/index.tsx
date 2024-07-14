import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import './styles/index.scss';

import { App } from './components/app';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
