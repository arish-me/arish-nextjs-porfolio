/* eslint-disable */

// fetchBlogData.js
'use server';

import { cache } from 'react';

export const fetchBlogData = cache(async () => {
  const query = `
    query Publication {
      publication(host: "arish.hashnode.dev") {
        url
        author {
          id
          username
          name
          profilePicture
        }
        posts(first: 3) {
          edges {
            node {
              tags {
                id
                name
              }
              title
              brief
              url
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const result = await response.json();
  return result.data.publication;
});