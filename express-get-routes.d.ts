declare module 'express-get-routes' {

  import {Router, Express} from 'express';

  export function getRoutes(router : Router | Express) : Route[];

  export interface Route {
    path : string;
    methods : {
      get? : boolean;
      post? : boolean;
      delete? : boolean;
      head? : boolean;
      put? : boolean;
    }
  }
}
