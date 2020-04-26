import React, {Component} from 'react';
import axios from 'axios';
import {Table,Button} from 'reactstrap';

export default class App extends Component {
  state = {
    books:[
      {id:1,title:"Harry potter",ratings:4.2}
    ]
  }
  
  componentWillMount(){
    axios.get('http://localhost:3000/books')
    .then((response)=>{
      this.setState({
        books:response.data
      })
    })
  }
  render() {
    const books = this.state.books.map((book)=>{
      return (
        <tr key={book.id}>
           <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.ratings}</td>
            <td>
              <Button color="success" size="sm" className="mr-2">Edit</Button>
              <Button color="danger" size="sm">Delete</Button>
            </td>
          </tr>
      )
    })
    return (
        <div className="App container">
      <Table>
        <thead>
          <th>S.no</th>
          <th>Title</th>
          <th>Ratigs</th>
          <th>Actoins</th>
        </thead>
        <tbody>
          {books}
        </tbody>
      </Table>
    </div>
    )
  }
}
