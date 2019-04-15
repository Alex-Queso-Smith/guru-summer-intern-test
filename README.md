# Guru React Internship Coding Challenge

This is a simple react app that fetches, sorts, and displays earthquake data based on the challenges specifications. The app also features a simple search bar to allow users to search for earthquakes by location. Detailed instructions for the assignment are found within the ASSIGNMENT.md file within the assignment folder.

To see a local copy of the application running, clone this repo then follow the next steps..

1. Run `yarn` to install dependencies

2. Run `yarn start` to run the app

3. visit [localhost:3000](localhost:3000) to see the live app.


# Initial Instructions found below.....

# Guru Frontend Test

Thanks for taking the time to take our Front-end technical assignment! This should take roughly 4-6 hours, but it's fine if it takes you longer.

**It's okay if you don't complete the whole assignment, give it your best shot. Please don't use any libraries that trivialize this assignment, things like lodash and moment are fine, but be reasonable. We need to be able to judge your coding ability**

# Before you start

Make sure you install all the dependencies before you attempt to do anything! You can do that by just running `yarn`. If you don't have yarn you can install it using the instructions [here!](https://yarnpkg.com/lang/en/docs/install/)

Here are some commands you should be familiar with.

`yarn start` - Runs the app and watches for changes

`yarn test` - Runs the test watcher. We will be using the tests as a way to easily grade how much of the assignment you get done. It's advised you try to get as many passing as possible.

`yarn evaluate` - **PLEASE RUN THIS BEFORE SUBMITTING** It will make sure that all your formatting is correct, and also let you know the status on your tests!

**Everything you need to accomplish this assignment can be found inside the assignment folder. Here are some of the things inside it**

`ASSIGNMENT.md` - All of the details for the Earthquake App Assignment.

`CREATE-REACT-APP-README.md` - The original create-react-app readme. This project uses create-react-app as it's base.

# Testing

To get the tests to work you may need to do something special that you aren't used to doing. For example, returning a promise when you are fetching the data. We will be leaving comments in select spots to make it more obvious and hopefully to avoid headaches. We ask that you use the Component Shells and Utils we've provided. Here is a list of them and what they are testing for.

# Components

`EarthquakeData` - Tests to make sure that data is fetched properly in the componentDidMount lifecycle hook.

`Earthquakes` - Tests to make sure all of the `EarthquakeRow`'s for each data item is rendered as well as an `EarthquakeFilter`

`EarthquakesHeader` - Tests to make sure the headers are rendered in the correct order.

`EarthquakeRow` - Tests to make sure the proper data is rendered in the correct order for each earthquake.

`EarthquakeDetailsButton` - Simple button that when clicked should open the details.

# Utils

`organizeEarthquakes` - Tests to make sure that data is sorted/filtered/sliced properly.
