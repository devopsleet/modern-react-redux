

import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';
import { useState } from "react";

function App() {

  const[images, setImages] = useState([])

  const handleSubmit = async (term) => {
    //console.log('Do a search with,', term);
   const results = await searchImages(term);
   setImages(results)
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
