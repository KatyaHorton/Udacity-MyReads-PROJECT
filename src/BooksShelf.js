/*
	* imports all the nesessary components 
*/
import React from 'react'
import './App.css'
import { Link } from 'react-router-dom' 
import Shelf from './Shelf'


class BooksShelf extends React.Component {
	
constructor(props){
	super(props);
	this.shelves = [		
			{title: 'Currently Reading', getBooks: 'currentlyReading'},
			{title: 'Want to Read', getBooks: 'wantToRead'},
			{title: 'Read', getBooks: 'read'}
		]
}	

	
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


		 				{this.props.shelves.map((shelf) => (
							<div key={shelf.id}>
				 				<Shelf 
									title={ shelf.title }
									shelfBooks={ this.getShelfBooks( shelf.getBooks ) }
									changeShelf={ this.props.changeShelf }	
								/> 
							</div>
						))}
	
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