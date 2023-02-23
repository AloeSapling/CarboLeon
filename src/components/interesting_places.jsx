import React, { Component } from "react";
import "./App.css";
import { MapElem } from "./MapElem.jsx";
import { constants } from "./models/constants";
import { SearchSidebar } from "./components/sidebar/SearchSidebar";
import { Modal } from "./components/modal/Modal";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: {
        ok: true,
        msg: ``
      },
      places: [...this.getAllPlaces()],
      isSidebarVisible: false,
      clickedPlace: undefined,
    };
  }
  
  getAllPlaces = () => constants.places;

  getFilteredPlaces = (typedPlace) => {
    const matchesPlace = (place, typedPlace) => place.name
      .toLocaleLowerCase()
      .includes(
        typedPlace.toLocaleLowerCase())

    return this.getAllPlaces()
      .filter(place => matchesPlace(place, typedPlace))
  }

  onTypedPlaceChanged = typedPlace => {
    this.setState({
      ...this.state,
      places: typedPlace.length 
        ? this.getFilteredPlaces(typedPlace) 
        : [...this.getAllPlaces()]
    });
  }

  onPlaceClicked = (place) => {
    this.setState({
      ...this.state,
      clickedPlace: place
    });
  }

  onSidebarToggled = () => {
    this.setState({
      ...this.state,
      isSidebarVisible: !this.state.isSidebarVisible
    });
  }

  onError = (msg) => {
    this.setState({
      status: {
        msg,
        ok: false,
      }
    })
  }

  onModalClosed = () => {
    this.setState({
      status: {
        msg: ``,
        ok: true,
      }
    })
  }

  render() {
    return (
      <main className="app" tabIndex="0">
        <Modal 
          msg={this.state.status.msg}
          onModalClosed={this.onModalClosed}/>

        <SearchSidebar
          places={this.state.places}
          isSidebarVisible={this.state.isSidebarVisible}
          onTypedPlaceChanged={this.onTypedPlaceChanged}
          onSidebarToggled={this.onSidebarToggled}
          onPlaceClicked={this.onPlaceClicked}/>

        <MapElem 
          places={this.state.places}
          clickedPlace={this.state.clickedPlace}
          onError={this.onError}
          onPlaceClicked={this.onPlaceClicked}/>
      </main>
    );
  }
}

export default App;
