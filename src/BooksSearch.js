import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

//imports Link component
import { Link } from 'react-router-dom' 

//imports packages to update state to filter books
import escapeRegExp from 'escape-string-regexp' 
import sortBy from 'sort-by'

class BooksSearch extends React.Component {
 
//adds query property to our state to work with search	
 state = {
	  query: ''
  }

//updates query with setState() 
updateQuery = (query) => {
	this.setState({ query: query.trim() })
}

  render() {
	  
  let showBooks
  	if (this.state.query) {
		const match = new RegExp(escapeRegExp(this.state.query), 'i')
		showBooks = this.props.books.filter(
		(book) => match.test(book.title)
         									)
		} else {
			showBooks = this.props.books
		}
	  
//sorts books by name		
		showBooks.sort(sortBy('name'))
	  
    return (
      <div>
		          <div className="search-books">
            <div className="search-books-bar">
           

		<Link to='/' 
				className="close-search">
					Close
		</Link>

		<div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
		
                <input 
					type="text" 
					placeholder="Search by title or author"
//value always has to be 'this.state.query'
					value={this.state.query}
//when input field changes we want to update our query (create updateQuery function)
					onChange={(event) => this.updateQuery(event.target.value)}
			
		/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				 {showBooks.map((book) => (
					<li>
					<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url()' }}></div>
							<div className="book-shelf-changer"> 	    
								<select>
									<option value="move" disabled>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								</select>
							</div>        
						</div>
						 <div className="book-title">{book.title}</div>
						 <div className="book-authors">{book.authors}</div>
					</div>
					</li>
	))}
				  
				  
			  </ol>
            </div>
          </div>
		
	 </div>	
    )
  }
}


export default BooksSearch
