// Display some detailed information about a particular pet
import React from 'react'
import { connect } from 'react-redux'

const PetsShow = ({ pet }) => 

  <div className="col-md-8">
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
  </div>

const mapStateToProps = (state, ownProps) => {
  /* 
  	access the :movieId from the URL via match.params on ownProps,
  	using the + sign to convert the movieId string to a number
  */
  const pet = state.pets.find(pet => pet.id === +ownProps.match.params.petId)

  if (pet) {
  	return {pet}
  } else {return {pet: {}}}
}

export default connect(mapStateToProps)(PetsShow)
