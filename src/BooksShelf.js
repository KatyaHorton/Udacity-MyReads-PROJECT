import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom' 
import Shelf from './Shelf'

class BooksShelf extends React.Component {

  state = { 
 	shelfBooks: []
  }


componentDidMount(){
		BooksAPI.getAll().then((shelfBooks) => {
		this.setState({ shelfBooks: shelfBooks})
	})}	 

getShelfBooks(shelfName){
	return this.state.shelfBooks.filter((book) => book.shelf === shelfName)
}


changeShelf = (newBook, newShelf) => {
	BooksAPI.update(newBook, newShelf).then(() => {
		newBook.shelf = newShelf;
		
	this.setState(state => ({
                shelfBooks: state.shelfBooks.filter(b => b.id !== newBook.id).concat([ newBook ])
            }));
	})
}
	
  render() {
    return (
     
		<div className="list-books">
			<div className="list-books-title">
				  <h1>MyReads</h1>
			</div>
			<div className="list-books-content">
{console.log("this is shelfBooks now:", this.state.shelfBooks)}
						<Shelf 
							title='Currently Reading'
							shelfBooks={this.getShelfBooks("currentlyReading")}
							changeShelf={ this.changeShelf }

						/>        

						<Shelf 
							title='Read' 
							shelfBooks={this.getShelfBooks("read")}
							changeShelf={ this.changeShelf }
						/>        

						<Shelf 
							title='Want To Read' 
							shelfBooks={this.getShelfBooks("wantToRead")}
							changeShelf={ this.changeShelf }
			/>   


						  <div className="open-search">
							<Link to='/search'>Add a book< /Link>
						  </div>
			</div>
		</div>
		
    )
  }
}

export default BooksShelf




