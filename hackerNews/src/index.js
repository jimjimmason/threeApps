import React from 'react';
import ReactDOM from 'react-dom';
import HackerApp from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

var posts = [
         {  title : 'India - Tiger population sees 30% increase.',
            link : 'http://www.bbc.com/news/world-asia-30896028',
            username : 'jbloggs',
            comments : [],
            upvotes : 10
          },
         {
            title : 'The button that is not.',
            link : 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
            username : 'notme',
            comments : [],
            upvotes : 12
          },
          {
            title : 'Google Nears $1B Investment in SpaceX',
            link : null,
            username : 'notme',
            comments : [],
            upvotes : 12
          },
          {
            title : 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
            link : 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
            username : 'psmith',
            comments : [],
            upvotes : 2
          }
      ] ;

ReactDOM.render(
  <HackerApp posts={posts} />,
  document.getElementById('root')
);
