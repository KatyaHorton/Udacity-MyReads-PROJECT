import React from 'react'
import './App.css'
import BooksSearch from './BooksSearch'
import BooksShelf from './BooksShelf'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
	

  render() {
    return (

      <div className="app">

        <Route exact path='/'
			render={() =>
			(<BooksShelf 
			 />	
		)}/>


		<Route path='/search'
			render={() =>
			(<BooksSearch 	
					/>	
		)}/>
			 

 
      </div>

    )
  }
}

export default BooksApp
