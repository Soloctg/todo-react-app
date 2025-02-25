
import './App.css';

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import React, { useState } from "react";


function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });


  return (
    <div className="App">

	    <Header />
	    <CreateArea />

    </div>
  );
}

export default App;
