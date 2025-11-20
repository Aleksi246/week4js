import { useState, useEffect, useRef } from 'react';
import fetchData from '../utils/fetchData'

const MEDIA_API = import.meta.env.VITE_MEDIA_API
const AUTH_API = import.meta.env.VITE_AUTH_API
// TODO: add necessary imports
const useMedia = () => {
// TODO: move mediaArray state here
// TODO: move getMedia function here
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    try{
    const getMedia = async () => {

      const mediaData = await fetchData(MEDIA_API + '/media');

      const newArray = await Promise.all(mediaData.map(async (item) => {
      const result = await fetchData(AUTH_API + '/users/' + item.user_id);
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


// TODO: move useEffect here
return {mediaArray};
};
   
export {useMedia};