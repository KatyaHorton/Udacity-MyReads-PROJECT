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


		 	shelfSet = () => {
			
					this.state.searchedBooks.forEach(searchedBook => {
						 this.state.shelfBooks.forEach(shelfBook=> 
														 { if
								(searchedBook.id === shelfBook.id) {
									
									this.setState({
										shelfBooks: []
									})
									
									alert('yesss')}	
														 }				
													)	
					})
				   
			
				}


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
				};
			
			this.shelfSet();
			
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