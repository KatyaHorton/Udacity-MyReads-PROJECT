import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

//import BooksSearch and BooksShelf componenets
import BooksSearch from './BooksSearch'
import BooksShelf from './BooksShelf'

//imports Route component
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
 
  }

  render() {
    return (

      <div className="app">

{/*Creates exact path to BooksShelf UI */}
        <Route exact path='/'
			render={() =>
			(<BooksShelf />	
		)}/>

{/*Creates a path to BooksSearch UI */}			 
		<Route path='/search'
			render={() =>
			(<BooksSearch />	
		)}/>
			 
      </div>
    )
  }
}

export default BooksApp
