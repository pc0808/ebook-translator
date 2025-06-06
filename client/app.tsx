import { createRoot } from 'react-dom/client';
import * as React from "react";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
console.log('Cleared HTML content');

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);