# Astral
### An isomorphic web application framework focused on minimalism and performance.
#### Built on Node, React, Redux, and LESS.

* Scalable - From single-page dashboards to enterprise apps, Astral allows for a
flexible application structure to fit any need.

* Minimal - While some critical development details have been enforced, the
majority of backend tools and architecture choices have been intentionally
omitted. This allows for any database, middleware, and other logic
to be set in as seen fit by the developer.

* Fast - The fully isomorphic stack with server-side rendering for all front-end
components helps makes applications blazing fast. A simple, yet powerful,
approach to development and production keeps the focus on application logic
instead of infrastructure administration.

This is not what might be considered as a 'starter kit' for React applications.
It is best suited for those familiar with React and Redux.

## Installation
Astral is not yet available as an npm package. Once aquired from github, run...

$ npm install

$ npm run dev

Your application will now be available at http://localhost:3000
The webpack dev server runs on :3001

## Usage
In development mode, webpack is integrated into the run-time. Hot module
reloading through webpack occurs with no interference, as well as
recompiling of any backend components necessary. Once in development,
no interaction with the command line should be needed to restart the
application unless a critical error occurs.

## Structure
The application is designed to accomodate (to a certain point) any folder
structure you wish. An example is located in /src/app. Global files in /src
(such as routes.jsx, reducers.jsx, et. cetera) will need to be altered
to properly include relevent pieces.

Some critical design decisions have been left to the developer.

* Database: While v2 may include some generic database connectors, v1 leaves
the database choice and general API design to you.

* Redux updates: We highly recommend using some Redux middleware to support
asynchronus updates to the store and connected React components. Our personal
choice is redux-saga, but redux-thunk is another good option for this.

## Contributing
We are working hard to push towards our v1 release, with hopes it will
be finished by the end of March. Still to do is the production
deployment configuration, express middlware configuration, and backend
logging using winston. We're considering a front-end logging transport but that
has yet to be decided.
