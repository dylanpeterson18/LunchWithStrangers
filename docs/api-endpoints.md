# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`
- `GET /cities/:id/users(hosts)/:id`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Lunches (nested under cities)

- `GET /api/lunches`
- `POST /api/lunch`
- `GET /api/lunch/:id`
- `PATCH /api/lunch/:id`
- `DELETE /api/lunch/:id`

### Cities

- `GET /api/cities`
- `GET /api/cities/:id`
- `GET /api/cities/:id/lunches`
  - index of all lunches in that city
  `GET /api/cities/:id/users/:id`
