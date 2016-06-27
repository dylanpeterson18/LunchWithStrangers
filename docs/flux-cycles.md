# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Lunch Cycles

### Lunches API Request Actions

* `fetchAllLunches`
  0. invoked from `LunchesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/lunches` is called.
  0. `receiveAllLunches` is set as the callback.

* `createLunch`
  0. invoked from new lunch button `onClick`
  0. `POST /api/lunches` is called.
  0. `receiveSingleLunch` is set as the callback.

* `updateLunch`
  0. invoked from `LunchForm` `onSubmit`
  0. `POST /api/lunches` is called.
  0. `receiveSingleLunch` is set as the callback.

* `destroyLunch`
  0. invoked from delete Lunch button `onClick`
  0. `DELETE /api/lunches/:id` is called.
  0. `removeLunch` is set as the callback.

### Notes API Response Actions

* `receiveAllLunches`
  0. invoked from an API callback.
  0. `Lunch` store updates `_lunches` and emits change.

* `receiveSingleLunch`
  0. invoked from an API callback.
  0. `Lunch` store updates `_lunches[id]` and emits change.

* `removeLunch`
  0. invoked from an API callback.
  0. `Lunch` store removes `_lunches[id]` and emits change.

### Store Listeners

* `LunchesIndex` component listens to `Lunch` store.
* `LunchDetail` component listens to `Lunch` store.


## Cities Cycles

### Cities API Request Actions

* `fetchAllCities`
  0. invoked from `CitiesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/cities` is called.
  0. `receiveAllCities` is set as the callback.

* `fetchSingleCity`
  0. invoked from `CityDetail` `didMount`/`willReceiveProps`
  0. `GET /api/cities/:id` is called.
  0. `receiveSingleCity` is set as the callback.

### Cities API Response Actions

- a little confused here - I shouldn't need a cities store if they're never going
to change - it should be a constant subset: [SF, NY, LA, London]

* `receiveAllCities`
  0. invoked from an API callback.
  0. `City` store updates `_cities` and emits change.

* `receiveSingleCity`
  0. invoked from an API callback.
  0. `City` store updates `_cities[id]` and emits change.

### Store Listeners

* `CitiesIndex` component listens to `City` store ? 
