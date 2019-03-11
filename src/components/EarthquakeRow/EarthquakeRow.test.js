import React from 'react';
import { shallow } from 'enzyme';

import EarthquakeRow from 'components/EarthquakeRow/EarthquakeRow';
import EarthquakeDetailsButton from 'components/EarthquakeDetailsButton/EarthquakeDetailsButton';

describe('component - EarthquakeRow', () => {
  it('renders all of the values (except date) in the correct order', () => {
    const comp = shallow(
      <EarthquakeRow
        id="id"
        time="2017-07-25T23:23:23.430Z"
        place="place"
        long={0}
        lat={0}
        mag={0}
      />
    );

    const values = comp
      .find('.EarthquakeRow__value')
      .map(value => value.props().children);

    // All of these values should statically
    // stay the same.  Date is going to be harder because they
    // will probably transform it.
    expect(values[0]).toBe('id');
    expect(values[2]).toBe('place');
    expect(values[3]).toBe(0);
    expect(values[4].type).toBe(EarthquakeDetailsButton);
  });

  it('renders the formatted time in the right spot', () => {
    const comp = shallow(
      <EarthquakeRow
        id="id"
        time="2017-07-25T23:23:23.430Z"
        place="place"
        mag={0}
      />
    );

    const values = comp
      .find('.EarthquakeRow__value')
      .map(value => value.props().children);

    expect(values[1]).toBe('July 25, 2017 @ 19:23');
  });
});
