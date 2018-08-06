import React from 'react'

import * as BooksAPI from './BooksAPI'
import './App.css'


//import BooksSearch and BooksShelf componenets
import BooksSearch from './BooksSearch'
import BooksShelf from './BooksShelf'

//imports Route component
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
	
	
//creates an empty books array 
  state = { 
 	books: []
  }

//this function is going to invoked by react whenever that component is mounted to the view 	
componentDidMount(){
//calling BooksAPI.getAll() will return us a promise
		BooksAPI.getAll().then((books) => {
		this.setState({ books: books})
	})}	

  render() {
    return (

      <div className="app">

		{console.log(this.state.books)}
	
	  
{/* creates exact path to BooksShelf UI */}
        <Route exact path='/'
			render={() =>
			(<BooksShelf 
// adds props to BooksShelf so we will be able to access books 
			  books={this.state.books}
			 />	
		)}/>

{/*Creates a path to BooksSearch UI */}			 
		<Route path='/search'
			render={() =>
			(<BooksSearch 
// adds props to BooksSearch so we will be able to access books 
			  books={this.state.books}					
					/>	
		)}/>
			 
 
      </div>

    )
  }
}

export default BooksApp
