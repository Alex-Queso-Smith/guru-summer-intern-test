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
      this._isMounted = false;
    }

    async componentDidMount() {
      this._isMounted = true;

      try {
        const response = await fetch('http://interviewtest.getguru.com/seismic/data.json');
        if (response.ok) {
          const earthquakes = await response.json();
          if (this._isMounted) {
            this.setState({ earthquakes });
            this.updateFilter(this.state.filter, this.state.earthquakes);
          }
        } else {
          const errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      } catch (e) {
        console.error(`Error in fetch: ${e.message}`);
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
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
