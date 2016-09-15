# express-get-routes

Extracts Route information out of an express application or router.
The format of the routes is the following:

```TypeScript
interface Route {
  path : string;
  methods : {
    get? : boolean;
    post? : boolean;
    put? : boolean;
    delete? : boolean;
  }
}
```

## Usage

```JavaScript
import * as express from 'express';
import {getRoutes} from 'express-get-routes';

let app = express();
// ... setup app

// contains an array of routes
let routes = getRoutes(app);

// print every route to the console
routes.forEach((route) => {
  console.log(route.path);
})
```
