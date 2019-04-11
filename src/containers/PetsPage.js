// Nested routes
// Displays the PetsPage component and renders the list of pets
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchPets } from '../actions'
import PetsNew from './PetsNew'
import PetsShow from './PetsShow'
import PetsList from '../components/PetsList'

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets()
  }

  render() {

    const { match, pets } = this.props

    return (
      <div>
        <PetsList pets={pets} />
        {/* The Switch component uniquely renders a route exclusively.
            Wrap all of Routes as children of the Switch component.
        */}
        <Switch> 
          /* Define the /pets/new route first otherwise the /:id route handler  
             would catch it first and assess "new"to be the id 
          */
          <Route path={`${match.url}/new`} component={PetsNew} />
          <Route path={`${match.url}/:petId`} component={PetsShow} />
          <Route exact path={match.url} render={() => (
              <h3>Please select a pet from the list.</h3>
          )} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pets: state.pets
  }
}

export default connect(mapStateToProps, { fetchPets })(PetsPage)
