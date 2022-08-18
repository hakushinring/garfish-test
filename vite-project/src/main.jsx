import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { reactBridge } from '@garfish/bridge-react-v18'

export const provider = reactBridge({
  el: '#root',
  rootComponent: <App />,
  errorBoundary: () => <div />,
})

if (!window.__GARFISH__) {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container)
  root.render(
    <App />
  );
}
