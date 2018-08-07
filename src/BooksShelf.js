import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

//imports Link component
import { Link } from 'react-router-dom' 
import Book from './Book'

import Shelf from '.Shelf'

class BooksShelf extends React.Component {
  state = {
	  
  }

  render() {
    return (

		

            <div className="open-search">
			
			<Link
 				to='/search'
 					className=''> 
					Add a book
			< /Link>
			
            </div>
          </div></div>
    )
  }
}

export default BooksShelf
