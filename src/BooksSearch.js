/*
	* imports all the nesessary components 
*/
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Book from "./Book"

class BooksSearch extends React.Component {

/*
	* renders BooksSearch page search field (input) and resut of books searched 
	* is linked to '/search' URL
	* passes the event target value to the search function from BooksApp (onChange method)
	* creates an ordered list of books returned from search
	* passes 'book' and 'changeShelf' to Book component as props 
*/
  render() {
    return (
		<div className="search-books">
            <div className="search-books-bar">
				<Link to='/' className="close-search">
						Close
				</Link>
				<div className="search-books-input-wrapper">
                	<input 
						type="text" 
						placeholder="Search by title or author"
						onChange={(event) => {
							this.props.search(event.target.value)
						}}
					/>
              </div>

            </div>
            <div className="search-books-results">
              <ol className="books-grid">
{/*
	* maps over each returned object, assigns a key based on the id and returns a new array
	* creates a list elements using Books components 
	* passes 'book' and 'changeShelf' to Book component as props 
*/}
				  
				  {this.props.searchedBooks.map((book) => (
					<li key={book.id}>
						<Book 
							  book={ book } 
							  changeShelf={this.props.changeShelf}

						/>
					</li>
														))}
			  </ol>
            </div>
          </div>
    )
  }
}

/*
	* exports BooksSearch component 
*/

export default BooksSearch
