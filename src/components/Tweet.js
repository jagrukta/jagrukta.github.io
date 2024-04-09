// components/Tweet.js
import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, Typography } from '@mui/material';

const StyledCard = styled(Card)`
  margin: 10px 0;
`;

const IframeContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function Tweet({ author, content, iframeUrl }) {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" component="div">
          {author}
        </Typography>
        <Typography variant="body1" component="div">
          {content}
        </Typography>
        {iframeUrl && (
          <IframeContainer>
            <Iframe src={iframeUrl} title="Embedded Content" allowFullScreen />
          </IframeContainer>
        )}
      </CardContent>
    </StyledCard>
  );
}

export default Tweet;
