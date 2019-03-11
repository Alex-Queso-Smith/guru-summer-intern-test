import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import EarthquakeDetailsButton from 'components/EarthquakeDetailsButton/EarthquakeDetailsButton';

import 'components/EarthquakeRow/EarthquakeRow.css';

export default class EarthquakeRow extends PureComponent {
  constructor() {
    super();

    this.state = { expanded: false };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render() {
    const { id, time, place, mag, longitude, latitude } = this.props;
    const formattedTime = Moment(time).format('MMMM D, YYYY @ k:mm');

    let earthquakeDetails = <EarthquakeDetailsButton onClick={this.toggleDetails} />;

    if (this.state.expanded) {
    earthquakeDetails =
      <div className="EarthquakeRow__details" onClick={this.toggleDetails}>
        <div className="EarthquakeRow__detail">
          Latitude: {latitude}
        </div>
        <div className="EarthquakeRow__detail">
          Longitude: {longitude}
        </div>
      </div>
    }

    return (
      <tr className="EarthquakeRow">
        <td className="EarthquakeRow__value">{id}</td>
        <td className="EarthquakeRow__value">{formattedTime}</td>
        <td className="EarthquakeRow__value">{place}</td>
        <td className="EarthquakeRow__value">{mag}</td>
        <td className="EarthquakeRow__value">{earthquakeDetails}</td>
      </tr>
    );
  }
}

EarthquakeRow.propTypes = {
  id: PropTypes.string,
  time: PropTypes.string,
  place: PropTypes.string,
  mag: PropTypes.number,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
};

EarthquakeRow.defaultProps = {
  id: '',
  time: '',
  place: '',
  mag: 0,
  longitude: 0,
  latitude: 0,
};
