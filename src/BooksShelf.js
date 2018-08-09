/*
	* imports all the nesessary components 
*/
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Shelf from './Shelf'

class BooksShelf extends React.Component {

getShelfBooks(shelfName){
	return this.props.shelfBooks.filter((book) => book.shelf === shelfName)
}

	
componentDidMount(){
	this.props.updateSearch();
}	
	
  render() {
    return (
     
		<div className="list-books">
			<div className="list-books-title">
				  <h1>MyReads</h1>
			</div>
			<div className="list-books-content">
						<Shelf 
							title='Currently Reading'
							shelfBooks={this.getShelfBooks("currentlyReading")}
							changeShelf={ this.props.changeShelf }
						/>        

						<Shelf 
							title='Read' 
							shelfBooks={this.getShelfBooks("read")}
							changeShelf={ this.props.changeShelf }
						/>        

						<Shelf 
							title='Want To Read' 
							shelfBooks={this.getShelfBooks("wantToRead")}
							changeShelf={ this.props.changeShelf }
						/>   


						  <div className="open-search">
							<Link to='/search' 
								 	
>Add a book< /Link>
						  </div>
					</div>
			</div>
		
    )
  }
}

export default BooksShelf