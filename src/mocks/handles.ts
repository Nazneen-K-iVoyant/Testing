


import {rest } from 'msw'


export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    // Return a mocked response
    return res(
      ctx.status(200), // Set status code
      ctx.json([       // Set response body
        { name: 'John' },
        {  name: 'Alice' },  
      ])
    );
  })
];
