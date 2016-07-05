# LunchWithStrangers

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://lunchwithcreepers.herokuapp.com

## Minimum Viable Product

LunchWithStrangers is a web application inspired by TeaWithStrangers that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Choose city
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Host Event
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Join Event in your city
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Dashboard of joined events/hosted events
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W1 W 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Cities (1 day, W2 Th 6pm)

**Objective:** Lunches belong to hosts (users), which belong to cities

- [ ] create `LunchAttendees` model
- [ ] build out API, Flux loop, and components for:
  - [ ] create 'Cities' model (show,index - don't need create or update)
- [ ] Use CSS to style new views

Phase 2 adds organization to the Lunches. Lunches belong to a City,
which has its own `Index` view.

### Phase 2: Lunches Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Lunches can be created, read, edited and destroyed through
the API.

- [ ] create `Lunch` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`LunchesController`)
- [ ] jBuilder views for cities
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Start Styling (0.5 days, W1 F 6pm)

**Objective:** Existing pages (including signup/signin/cities index) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles


### Phase 4: Flux Architecture and Router (2 days, W1 Sunday 6pm)

**Objective:** Lunches can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `LunchesIndex`
  - [ ] `LunchIndexItem`
  - [ ] `LunchForm`

### Phase 5: Join Events (1 day, W2 M 6pm)

**Objective:** Users can join events.

- [ ] Join Events - set up Flux and routes
- [ ] Toggle button
- [ ] add basic colors & styles


### Phase 6: Dashboard (2 days, W2 W 6pm)

**Objective:** Lunches that a user has joined can be seen on a user's homepage.

- build out API, Flux loop, and components for:
  - [ ] fetching lunches for user
  - [ ] displaying them properly on user page
- [ ] Style new elements

### Phase 7: Styling Cleanup and Seeding (2 days, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Google Map API showing events based on location
- [ ] Suggestions based on event details and user profiles

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
