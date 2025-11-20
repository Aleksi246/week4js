//import { useState } from "react";
import MediaRow from "../components/MediaRow";
import Single from "../views/Single";
import { useState, useEffect, useRef } from 'react';
import fetchData from '../utils/fetchData'






const Home = () => {
  //const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
const getMedia = async () => {
   const json = await fetchData('../public/test.json');
   setMediaArray(json);
};
getMedia();
},[]);

  return (
    <>
      <h2>My Media</h2>

      <Single />

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              //setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
