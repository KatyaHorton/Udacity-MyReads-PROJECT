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
	return this.state.shelfBooks.filter((b) => b.shelf === shelfName)
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
							shelf='currentlyReading'
						/>        

						<Shelf 
							title='Read' 
							shelfBooks={this.getShelfBooks("wantToRead")}
							shelf='read'
						/>        

						<Shelf 
							title='Want To Read' 
							shelfBooks={this.getShelfBooks("read")}
							shelf='wantToRead'
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




