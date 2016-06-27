## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * CitiesIndex
    * CityIndexItem
  * **LunchesIndex**
    * LunchForm
    * LunchIndexItem
  * **HostsIndex**
      * HostDetail


## Routes

* **component:** `App` **path:** `/`
  * **component:** `CitiesIndex` **path:** index
  * **component:** `LunchesIndex` **path:** `cities/:id`
    * **component:** `LunchDetail` **path:** `cities/:cityid/lunches/:lunchid`
  * **component:** `HostsIndex` **path:** `cities/:id`
    * **component** `HostDetail` **path:** `cities/:id/hosts/:id`
