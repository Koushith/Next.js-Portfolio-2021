import React from 'react';
import styled from 'styled-components';
import { Badge, Spacer } from '@geist-ui/react';

const Article = styled.article`
  padding: 0 258px;

  ul {
    /* padding: 0 21.333px; */
    list-style: none;
    li {
      list-style: none;
    }
    .blog-container {
      display: flex;
      align-items: center;
      justify-content: center;
      &__date {
        width: 150px;
      }
    }
  }
`;

function Blogs() {
  return (
    <Article>
      <ul>
        <li className='blog-container'>
          <div className='blog-container__date'> 26-02-2020</div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              eaque alias ad? Blanditiis excepturi necessitatibus sit molestias
              sequi aperiam hic.
            </p>
            <Badge>Random Thoughts</Badge>
          </div>
        </li>
      </ul>
    </Article>
  );
}

export default Blogs;
