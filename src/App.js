import React from 'react'
import './App.css'
import BooksSearch from './BooksSearch'
import BooksShelf from './BooksShelf'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {

	state = {
		searchedBooks: [],
		shelfBooks: []
	}

// {((response.map((b) => b.imageLinks.thumbnail)))*/}

	search = (query) => {
		BooksAPI.search(query.trim())
			.then(response => {
				 		if (response && response.length) {
					this.setState({
						searchedBooks: response
					})
				} else {
					this.setState({
						searchedBooks: []
					})
				}
			}).catch(error => {

/*

The search for query biography throws an error of Cannot read property 'thumbnail' of undefined. 

You should check if API response contains thumbnail property and handle the error. 

I also suggest you use placeholder image for the book not having thumbnail

*/			
	console.log('PLEASE HELP ME')
		
		})}
	


	componentDidMount() {
		BooksAPI.getAll().then((shelfBooks) => {
			this.setState({
				shelfBooks: shelfBooks
			})
		});
	}
		
	
	changeShelf = (newBook, newShelf) => {
		BooksAPI.update(newBook, newShelf).then(() => {
			newBook.shelf = newShelf
			this.setState(state => ({
				shelfBooks: state.shelfBooks.filter(b => b.id !== newBook.id).concat([newBook])
			}))
		})
	}
	
	updateSearch = () => {
		 this.setState({ searchedBooks: [] });
	}

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

export default BooksApp