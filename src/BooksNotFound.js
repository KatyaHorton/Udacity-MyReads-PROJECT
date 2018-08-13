/*
	* imports all the nesessary components 
*/
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Book from "./Book"

class BooksNotFound extends React.Component {


		
	
		
	
/*
	* renders BooksNotFound page search field (input) and resut of books searched 
	* is linked to '/search' URL
	* passes the event target value to the search function from BooksApp (onChange method)
	* creates an ordered list of books returned from search
	* passes 'book' and 'changeShelf' to Book component as props 
*/
  render() {
    return (

<div className="search-books-no-results">
		           Books not found
</div>

    )
  }
}

/*
	* exports BooksNotFound component 
*/

export default BooksNotFound
