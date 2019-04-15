import React, { Component } from 'react';

import organizeEarthquakes from 'utils/organizeEarthquakes';

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
      this.updateEarthquakeData = this.updateEarthquakeData.bind(this);
    }

    async componentDidMount() {
      try {
        const response = await fetch(
          'http://interviewtest.getguru.com/seismic/data.json'
        );
        if (response.ok) {
          const earthquakes = await response.json();
          this.updateEarthquakeData(earthquakes);
          this.updateFilter(this.state.filter, this.state.earthquakes);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } catch (err) {
        console.error(`Error in fetch: ${err.message}`);
      }
    }

    updateEarthquakeData(earthquakes) {
      this.setState({ earthquakes });
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
