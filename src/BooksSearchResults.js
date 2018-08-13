/*
	* imports all the nesessary components 
*/
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Book from "./Book"

class BooksSearchResults extends React.Component {


		
	
		
	
/*
	* renders BooksSearchResult page search field (input) and resut of books searched 
	* is linked to '/search' URL
	* passes the event target value to the search function from BooksApp (onChange method)
	* creates an ordered list of books returned from search
	* passes 'book' and 'changeShelf' to Book component as props 
*/
  render() {
    return (


		              <ol className="books-grid">
{/*
	* maps over each returned object, assigns a key based on the id and returns a new array
	* creates a list elements using Books components 
	* passes 'book' and 'changeShelf' to Book component as props 
*/} 		
	
{ this.props.searchedBooks.map((book) => (
					<li key={book.id}>
						<Book 
							  book={ book } 
							  changeShelf={this.props.changeShelf}
						/>
					</li>
														))}

			  </ol>


    )
  }
}

/*
	* exports BooksSearch component 
*/

export default BooksSearchResults
