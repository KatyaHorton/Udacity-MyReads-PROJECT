import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Book from "./Book"

class BooksSearch extends React.Component {


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
				 {this.props.searchedBooks.map((book) => (
					<li key={book.id}>
						<Book 
							  book={ book } 
							  changeShelf={this.props.changeShelf}
							  assignShelf = { this.props.assignShelf }

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
