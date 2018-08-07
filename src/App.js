import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksSearch from './BooksSearch'
import BooksShelf from './BooksShelf'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
	
  state = { 
 	books: []
  }


componentDidMount(){
		BooksAPI.getAll().then((books) => {
		console.log("Books are: ", books)
		this.setState({ books: books})
	})}	
 

  render() {
    return (

      <div className="app">

		{console.log(this.state.books)}
	

        <Route exact path='/'
			render={() =>
			(<BooksShelf 
			  books={this.state.books}
			 />	
		)}/>


		<Route path='/search'
			render={() =>
			(<BooksSearch 
			  books={this.state.books}					
					/>	
		)}/>
			 

 
      </div>

    )
  }
}

export default BooksApp
