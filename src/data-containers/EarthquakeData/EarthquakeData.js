import React, { Component } from 'react';

import organizeEarthquakes from 'utils/organizeEarthquakes';

/**
 * Data Container for the app.  A higher order function that returns a container.
 *
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
 *
 * It's main job is to fetch the earthquakes data from endpoint
 * and pipe that into the earthquakes component.  As well as to handle the data
 * filtering, sorting and slicing.
 */

export default function EarthquakeData(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();

      this.state = {
        filter: '',
        earthquakes: [],
        organizedEarthquakes: [],
      };

      this.updateFilter = this.updateFilter.bind(this);
    }

    componentDidMount() {
      fetch('http://interviewtest.getguru.com/seismic/data.json')
      .then(response => {
         if(response.ok){
           return response
         } else {
           let errorMessage = `${response.status} (${response.statusText})`,
               error = new Error(errorMessage)
           throw(error)
         }
       })
      .then(response => response.json())
      .then(date = { this.setState({ earthquakes: data }) })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    updateFilter(filter) {
      const { earthquakes } = this.state;

      this.setState({
        organizedEarthquakes: organizeEarthquakes(filter, earthquakes),
      });
    }

    render() {
      const { organizedEarthquakes } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          earthquakes={organizedEarthquakes}
          updateFilter={this.updateFilter}
        />
      );
    }
  };
}
