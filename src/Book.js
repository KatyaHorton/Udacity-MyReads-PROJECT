import React from 'react'

//import './App.css'

//imports Link component
//import { Link } from 'react-router-dom' 

//imports packages to update state to filter books
//import escapeRegExp from 'escape-string-regexp' 
//import sortBy from 'sort-by'


class Book extends React.Component {
 
	
  render() {	  
    return (
	
		<div className='book' >
			<div className='book-top'>
				<div className='book-cover' style={{ width: 128, height: 193, backgroundImage: 'url()' }}></div>
				<div className='book-shelf-changer'></div>
				</div>
				 <div className='book-title'>{this.props.book.title}</div>
				 <div className='book-authors'>{this.props.book.authors}</div>
			
		</div>
	
	)} }
     

export default Book
