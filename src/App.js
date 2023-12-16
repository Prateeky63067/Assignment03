
import React from 'react';
import VideoPlayer from './VideoPlayer';
import './App.css'
const App = () => {
  const videoId = 'dQw4w9WgXcQ'; 
  const apiKey = 'AIzaSyC3rVt315dB8PIyYMxOVt8YsMHGcOJblKc'; 

  return (
    <div className="App">
      <h1 className='playbackHeading'>Playback application based on YouTube V3 API</h1>
      <VideoPlayer videoId={videoId} apiKey={apiKey} />
    </div>
  );
};

export default App;
