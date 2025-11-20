//import { useState } from "react";
import MediaRow from "../components/MediaRow";
import Single from "../views/Single";
import { useState, useEffect, useRef } from 'react';
import fetchData from '../utils/fetchData'






const Home = () => {
  //const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    try{
    const getMedia = async () => {

      const mediaData = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

      const newArray = await Promise.all(mediaData.map(async (item) => {
      const result = await fetchData(import.meta.env.VITE_AUTH_API +'/users/' + item.user_id);
      //combine the result/userdata to mediaData/json item

      return {...item,username: result.username};
      }),
    );
      console.log(newArray)
      setMediaArray(newArray);
    };
    getMedia();
    }catch(error){
      console.log('ERROR',error)
    }

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
            <th>Username</th>
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
