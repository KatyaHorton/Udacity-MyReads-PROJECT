/*
	* imports all the nesessary components 
*/
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Shelf from './Shelf'

class BooksShelf extends React.Component {

	
/*
	* assigns a shelf to the book 
*/	
getShelfBooks(shelfName){
	return this.props.shelfBooks.filter((book) => book.shelf === shelfName)
}

/*
	* sets list to an empty array each time component mounts
*/	
componentDidMount(){
	this.props.updateSearch();
}	
	
	
/*
	* renders BooksShelves (main page)
	* linked to '/' URL
	* passes it's shelfBooks and changeShelf props further to Shelf component 
*/	
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

/*
	* exports BooksShelf component 
*/

export default BooksShelf