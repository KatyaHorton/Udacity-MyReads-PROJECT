/*
	* imports all the nesessary components 
*/
import React from 'react'
import img from './book.png'

class Book extends React.Component {
 
state = {
	currentShelf: this.props.book.shelf
}

changeShelf = (event) => {
	this.props.changeShelf(this.props.book, event.target.value);
	this.setState({
		currentShelf: event.target.value
        		  });
    						}

  render() {	  
    return (
		<div className='book' >
			<div className='book-top'>
				<div className="book-cover">
					<img src={this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : img } alt={`book cover of ${this.props.book.title}`}/>
			</div>

					<div className='book-shelf-changer'>
						<select
							value={this.state.currentShelf}
							onChange={this.changeShelf}
						>
		<option value="none">None</option>					
		<option value="move" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							
						</select>
					</div>
				</div>
				<div className='book-title'>{this.props.book.title}</div>
				<div className='book-authors'>{this.props.book.authors}</div>
			</div>
	)}}
     

export default Book
