import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import EarthquakesHeader from 'components/EarthquakesHeader/EarthquakesHeader';
import EarthquakeRow from 'components/EarthquakeRow/EarthquakeRow';
import EarthquakeFilter from 'components/EarthquakeFilter/EarthquakeFilter';

import 'components/Earthquakes/Earthquakes.css';

class Earthquakes extends PureComponent {
  render() {
    const { updateFilter, earthquakes } = this.props;

    const earthquakeRows = earthquakes.map(quake => (
      <EarthquakeRow
        key={quake.id}
        id={quake.id}
        time={quake.time}
        place={quake.place}
        mag={quake.mag}
        longitude={quake.longitude}
        latitude={quake.latitude}
      />
    ));

    return (
      <div className="Earthquakes">
        <EarthquakeFilter onInput={updateFilter} />
        <table className="Earthquakes__table-scroller Earthquakes__table ">
          <EarthquakesHeader />
          <tbody>{earthquakeRows}</tbody>
        </table>
      </div>
    );
  }
}

export default Earthquakes;

Earthquakes.propTypes = {
  earthquakes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      place: PropTypes.string,
      mag: PropTypes.num,
      time: PropTypes.string,
      long: PropTypes.num,
      lat: PropTypes.num,
    })
  ),

  updateFilter: PropTypes.func.isRequired,
};

Earthquakes.defaultProps = {
  earthquakes: [],
};
