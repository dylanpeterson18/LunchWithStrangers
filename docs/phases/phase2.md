# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* LunchesIndex
  - LunchesIndexItem
* LunchForm

### Stores
* Lunches

### Actions
* ApiActions.receiveAllLunches -> triggered by ApiUtil
* ApiActions.receiveSingleLunch
* ApiActions.deleteLunch
* LunchActions.fetchAllLunches -> triggers ApiUtil
* LunchActions.fetchSingleLunch
* LunchActions.createLunch
* LunchActions.editLunch
* LunchActions.destroyLunch

### ApiUtil
* ApiUtil.fetchAllLunches
* ApiUtil.fetchSingleLunch
* ApiUtil.createLunch
* ApiUtil.editLunch
* ApiUtil.destroyLunch

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
