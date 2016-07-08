# LunchWithStrangers

[LunchWithStrangers live][heroku]

[heroku]: https://lunchwithcreepers.herokuapp.com
[TeaWithStrangers]: https://teawithstrangers.com

LunchWithStrangers is a full-stack web application inspired by [TeaWithStrangers][TWS]. The backend is Ruby on Rails, the database is Postgres SQL, and the frontend is in React.js with a Flux framework.


## Features and Implementation

### Choosing Cities

Cities are stored in a database with columns for `image_url` and `name`. When a user clicks on the Cities tab, an API call is made to the cities table and renders each city and its image:

#CITIES INDEX pagePICTURE
![Cities Index](docs/wireframes/city_index.png)


When a user clicks on an individual city, an API call is made to the Lunches Table and renders each lunch that has a foreign key pointing to that city.

#CITY SHOW PAGEPICTURE
![City Show](docs/wireframes/city_show.png)

Users have a column for `city_id` so that in the future, each individual city page will show the hosts in that city.


###Lunches

Lunches are stored in a database with columns for `date`, `time`, `place`, `host_id`, `city_id`, and `details`. `host_id` is a foreign key pointing to the Users table, so every `Lunch` belongs to a `user`.

The react component of Lunches consisted of a `LunchIndex`, which renders a list of `LunchIndexItems`:

```javascript
render () {
  const cityid = this.props.cityid;
    return (
      <div className="lunch-index">
          {
            this.state.lunches.map((lunch) =>{
              if(lunch.city_id.toString() === cityid){
                return (<LunchIndexItem key={lunch.id} lunch={lunch} />);
              }
            })
          }
      </div>
    );
}

```

A joins table connects Lunches with Users so that a user's lunches can appear in the Dashboard.

![Lunch Index](docs/wireframes/lunch_index.png)

This is an individual `LunchIndexItem`. When you click "Join", the button toggles, indicating that the request was successful.

![Join Lunch](docs/wireframes/join.png)
![Joined Lunch](docs/wireframes/unjoin.png)


### Dashboard

The Dashboard consists of the `LunchIndex` and `LunchIndexItem` components. The dashboard uses the association between the `current_user` and `lunch_events` to grab their `hostedLunches` and `joinedLunches`.

Dashboard header
![Dashboard header](docs/wireframes/dashboard_header.png)

Dashboard - Hosted Lunches
![Dashboard Hosted Lunches](docs/wireframes/hosted_lunches.png)

Dashboard - Joined Lunches
![Dashboard Joined Lunches](docs/wireframes/joined_lunches.png)


## Future Directions for the Project

LunchWithStrangers can still improve. The next steps are to implement the following things.


### Google Maps

I will use the Google Maps API to show the lunches that are happening nearest to them on a map. When creating the lunch, the user will use Google Maps to input the address. As we all know, there is nothing worse than showing up to the wrong place before meeting a group of strangers!

### Spots left at the table

I will add a column for `spaces_available` to the `Lunches` table to keep track of how many people are allowed at the Lunch and show that information in the `LunchIndex`. If there are no spots left, a user shouldn't be allowed to join that lunch.


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
