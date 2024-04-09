// components/Feed.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import Tweet from './Tweet';

const tweets = [
  { id: 1, author: 'user1', content: 'Check out this website!', iframeUrl: 'https://twitter.com/i/status/1775022294915854358' },
  // Add more tweets as needed
];

function Feed() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Feed
      </Typography>
      {tweets.map(tweet => (
        <Tweet key={tweet.id} author={tweet.author} content={tweet.content} iframeUrl={tweet.iframeUrl} />
      ))}
    </Container>
  );
}

export default Feed;
