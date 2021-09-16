import { useState } from 'react';
import { PageContainer } from './components/PageContainer/PageContainer';
import { VideoList } from './components/VideoList/VideoList';
import { Player } from './components/Player/Player';
import videos from '../src/videos.json';
import './App.css';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <PageContainer>
      <h1>Selected video: {selectedVideo}</h1>
      <VideoList videos={videos} onSelect={setSelectedVideo} />
      <Player url={selectedVideo} />
    </PageContainer>
  );
}

export default App;
