import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Book from "./Book"
import * as BooksAPI from './BooksAPI'

class BooksSearch extends React.Component {

	 state = {
		 searchedBooks: []
	 }

	search = (query) => {
		BooksAPI.search(query.trim())
		  .then(response => {
			if (response && response.length) {
				this.setState({ searchedBooks: response })
			} else {
				this.setState({ searchedBooks: [] })
			}
		  })
	}
 
	
changeShelf = (newBook, newShelf) => {
	BooksAPI.update(newBook, newShelf).then(() => {
		newBook.shelf = newShelf;
		
		var updatedShelf = this.state.books.filter( book => book.id !== newBook.id ).push(newBook)
	
		
		this.setState({ shelfBooks: updatedShelf })
	})
}


  render() {
 
    return (
		<div className="search-books">
            <div className="search-books-bar">
				<Link to='/' 
				   	  className="close-search">
						Close
				</Link>

				<div className="search-books-input-wrapper">
                	<input 
						type="text" 
						placeholder="Search by title or author"
						value={this.state.query}
						onChange={(event) => {
							this.search(event.target.value)
						}}
					/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				 {this.state.searchedBooks.map((book) => (
					<li key={book.id}>
				 <Book book={ book } 
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


export default BooksSearch
