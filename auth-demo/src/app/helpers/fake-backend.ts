import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(
  backend: MockBackend,
  options: BaseRequestOptions) {

  let mosh_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';
//  {
//   "id": "1234567890",
//   "name": "Nagase",
//   "org": "hitachi",
//   "admin": "true",
//   "poweruser": "true",
//   "roles": ["user","pu1","pu2"]
// }
  let nagase_token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiTmFnYXNlIiwib3JnIjoiaGl0YWNoaSIsImFkbWluIjoidHJ1ZSIsInBvd2VydXNlciI6InRydWUiLCJyb2xlcyI6WyJ1c2VyIiwicHUxIiwicHUyIl19.lzMdTi45QfAQWkCcx2S7WmPJ52RnuNKVyHsO7RfE9Vo';
 backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an 
    // asynchronous call to the server that takes 1 second. 
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
        let body = JSON.parse(connection.request.getBody());

        if (body.email === 'mosh' && body.password === '1234') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: mosh_token }
            })));
        }else if(body.email === 'nagase' && body.password === 'pass'){
          console.log('nagaes login')
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: { token: nagase_token }
            })));
        }else {
          console.log("login error ")
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200 })
          ));
        }
      }

      // 
      // Fake implementation of /api/orders
      //
      if (connection.request.url.endsWith('/api/orders') &&
        connection.request.method === RequestMethod.Get) {
        if (connection.request.headers.get('Authorization') === 'Bearer ' + mosh_token) {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 200, body: [1, 2, 3, 4, 5, 6] })
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({ status: 401 })
          ));
        }
      }
      if (connection.request.url.endsWith('/api/test')) {
        // && connection.request.method === RequestMethod.Get) {
        connection.mockRespond(new Response(
          new ResponseOptions({ status: 200, body: ['a', 'b', 'c'] })
        ));
      }
    }, 200);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};