import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

//imports ReactRouted for easier navigation through the page
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter><App /></BrowserRouter>, 
document.getElementById('root'))
