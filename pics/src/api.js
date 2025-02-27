import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID gu-TkQa_i7prfogX67YoEfeyJmtp0uTusorTVcwYu3U",
    },
    params: {
      query: term,
    },
  });

  //console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
