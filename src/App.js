/*
	* imports all the nesessary components 
*/
import React from 'react'
import './App.css'
import BooksSearch from './BooksSearch'
import BooksShelf from './BooksShelf'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {

/*
	* states to change array of books in both BooksSearch and BooksShelf UI
*/
state = {
		searchedBooks: [],
		shelfBooks: []
	}

/* 
	* function based on search() method from BooksAPI 
  	* will be passed to BooksSearched component
	* takes in string (query) 
*/
	search = (query) => {
		BooksAPI.search(query.trim())
			.then(response => {
/*
	* checks if any books returned from search are also in booksShelf
	* if yes, assigns the shelf property to them
*/
				response.map((book) => {
                    this.state.shelfBooks.map((pbook) => {
                        (pbook.id === book.id ? book.shelf = pbook.shelf : "none");
                    })
                }) 			
/*
	* checks if there are results which match our search
	* if there are non - return and empty array
*/
			if (response && response.length) {
					this.setState({
						searchedBooks: response
					})
				} else {
					this.setState({
						searchedBooks: []
					})
				};

			})}


/*
	* gets called automatically straight after componet 
	* method calls getAll() method from BookAPI
	* returns a collection of book objects, which are currently on the shelves
*/
	componentDidMount() {
		BooksAPI.getAll().then((shelfBooks) => {
			this.setState({
				shelfBooks: shelfBooks
			})
		});
	}
		
	
/*
	* function based on update() method from BooksAPI 
	* will be passed to both SearchedBooks and ShelfBooks components (as has to be accessed from both)
	* take book (object) as a first argument
	* takes shelf (string) as second argument 
*/
	changeShelf = (newBook, newShelf) => {
		BooksAPI.update(newBook, newShelf).then(() => {
			newBook.shelf = newShelf
			this.setState(state => ({
				shelfBooks: state.shelfBooks.filter(b => b.id !== newBook.id).concat([newBook])
			}))
		})
	}

/*
	* sets list of searched books to an upty array
	* will be passed to BooksSearched component and called each time it will mount
*/
	updateSearch = () => {
		 this.setState({ searchedBooks: [] });
	}

	
/*
	* renders app with 2 main component 
	* BooksShelf and BooksSearch are passed props and methods they need
*/	
	render() {
		return (
				
			<div className = "app" >
				<Route exact path = '/' render = {() => ( 
					<BooksShelf 
						shelfBooks = { this.state.shelfBooks }
						changeShelf = { this.changeShelf }
						updateSearch = { this.updateSearch }
					/>	
														)}
				/>

			<Route path = '/search'
			render = {() => ( 
					  <BooksSearch 
					  	searchedBooks = { this.state.searchedBooks }
						search = { this.search }
						changeShelf = { this.changeShelf }
						shelfBooks = { this.state.shelfBooks }
					  />	
							)}
			/>
			</div>
		)
	}
}

/*
	* exports BooksApp component 
*/

export default BooksApp