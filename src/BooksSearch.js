/*
	* imports all the nesessary components 
*/
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Book from "./Book"
import BooksSearchResults from './BooksSearchResults'
import BooksNotFound from './BooksNotFound'

class BooksSearch extends React.Component {


	
	
state = {
	searchQuery: ''
}
		
checkResults = () => {
	if (!this.props.booksNotFound) {
		return 	<BooksSearchResults 
						searchedBooks = { this.props.searchedBooks }
						search = { this.search }
						changeShelf = { this.props.changeShelf }
						shelfBooks = { this.props.shelfBooks }
						book = { this.props.book }
			/>
 
		
			
	} else if (this.props.booksNotFound && this.state.searchQuery.length > 0){
		
		return <BooksNotFound />
	}
}

	
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
							this.setState({searchQuery: event.target.value})
				
						}}
					/>
              </div>

            </div>

	<div className="search-books-results">
		
{this.checkResults()}
{console.log(this.state)}
	</div>
          </div>
	
    )
  }
}

/*
	* exports BooksSearch component 
*/

export default BooksSearch
