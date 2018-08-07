import React from 'react'

//import './App.css'

//imports Link component
//import { Link } from 'react-router-dom' 

//imports packages to update state to filter books
//import escapeRegExp from 'escape-string-regexp' 
//import sortBy from 'sort-by'

import Book from './Book'

class Shelf extends React.Component {
 
	
  render() {	  
    return (
	
        <div className="bookshelf">
		
                <h2 className="bookshelf-title">{this.props.title}</h2>
		
                <div className="bookshelf-books">
		
                    <ol className="books-grid">
		
          
                    
	</ol>
                
</div>

            </div>

	
	)} }
     

export default Shelf
