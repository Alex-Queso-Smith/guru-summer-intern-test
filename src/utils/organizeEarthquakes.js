/**
 * This is the function that should sort, filter, and slice the earthquakes
 * whenever neccessary.  Refer to the README.md for how this should specifically be done.
 *
 * @param {string} filter
 * @param {array} earthquakes
 */

export default function organizeEarthquakes(filter, earthquakes) {
  // set limit of returned earthquakes here
  const size = 20;

  // sort earthquakes by magnitude, if magnitude equal show most recent quake first
  const sortedEarthquakes = earthquakes.sort(
    (a, b) => b.mag - a.mag || new Date(b.time) - new Date(a.time)
  );

  if (filter.trim() !== '') {
    // returns sortedEarthquakes filtered by search
    return sortedEarthquakes.filter(quake => quake.place.toLowerCase().includes(filter.toLowerCase())).slice(0, size);
  }
  
  // return base sortedEarthquakes unfiltered if search is blank
  return sortedEarthquakes.slice(0, size);
}
