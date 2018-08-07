import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import escapeRegExp from 'escape-string-regexp' 
import sortBy from 'sort-by'
import Book from "./Book"


class BooksSearch extends React.Component {

 state = {
	  query: ''
  		}

updateQuery = (query) => {
	this.setState({ query: query.trim() })
}
 

  render() {

  let showBooks
 
  	if (this.state.query) {
		const match = new RegExp(escapeRegExp(this.state.query), 'i')
		showBooks = this.props.books.filter(
		(book) => match.test(book.title) || 
			match.test(book.authors) ||
			match.test(book.publisher) ||
			match.test(book.subtitle)
         									)
	} else {
			showBooks = []
		}
	  

	  
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
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				 {showBooks.map((book) => (
					<li>
				 <Book book={ book } />
					</li>
	))}
			  </ol>
            </div>
          </div>
		

    )
  }
}


export default BooksSearch
