import React from 'react'


class Book extends React.Component {
 
	
	    state = {
        currentShelf: this.props.book.shelf
    };

    changeShelf = (event) => {
        this.props.changeShelf(this.props.book, event.target.value);
        this.setState({
            currentShelf: event.target.value,
            updating: true
        });
    };

    componentWillReceiveProps(){
        // Remove the process indicator
        this.setState({
            updating: false
        });
    }
	
	
  render() {
	  
    return (
		<div className='book' >
			<div className='book-top'>
				<div className='book-cover' style={{ width: 128, height: 193, backgroundImage: 'url()' }}></div>
					<div className='book-shelf-changer'>
						<select>
							<option value="move" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
					 <div className='book-title'>{this.props.book.title}</div>
					 <div className='book-authors'>{this.props.book.authors}</div>
				</div>
	
	)} }
     

export default Book
