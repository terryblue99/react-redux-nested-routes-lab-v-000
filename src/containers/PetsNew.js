// Display a form to create a new Pet. 
// After create, the user should be redirected back to '/pets'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPet } from '../actions'

class PetsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
      // Check that all fields have been entered
      if(!this.state.name ||
         !this.state.description
        ) {
            alert('All field are required!')
          } else {
                    // Destructure addPet and history from the components prop
                    const { addPet, history } = this.props
                    // Create the pet with the Redux action
                    addPet(this.state)
                    // redirect to /pets route after adding a new pet
                    history.push('/pets')
                  }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>Add a Pet</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleOnChange} />
          <label> </label>  
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleOnChange} />
          <label> </label>
          <input
            type="submit"
            value="Add Pet" />
        </form>
      </div>
    )
  }
}

export default connect(null, { addPet })(PetsNew)
