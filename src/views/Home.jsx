//import { useState } from "react";
import MediaRow from "../components/MediaRow";
import Single from "../views/Single";

const mediaArray = [
  {
    media_id: 8,
    user_id: 5,
    filename: "https://placehold.co/1200x800.jpg?text=Pic1",
    thumbnail: "https://placehold.co/320x240.jpg?text=Pic1thumb",
    filesize: 170469,
    media_type: "image/jpeg",
    title: "Picture 1",
    description: "This is a placeholder picture.",
    created_at: "2024-01-07T20:49:34.000Z",
  },
  {
    media_id: 9,
    user_id: 7,
    filename: "https://placehold.co/1200x800.jpg?text=Pic2",
    thumbnail: "https://placehold.co/320x240.jpg?text=Pic2thumb",
    filesize: 1002912,
    media_type: "image/jpeg",
    title: "Pic 2",
    description: "",
    created_at: "2024-01-07T21:32:27.000Z",
  },
  {
    media_id: 17,
    user_id: 2,
    filename:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://placehold.co/320x240.jpg?text=vid3thumb",
    filesize: 1236616,
    media_type: "video/mp4",
    title: "Bunny",
    description: "Butterflies fly around the bunny.",
    created_at: "2024-01-07T20:48:13.000Z",
  },
];

const Home = () => {
  //const [selectedItem, setSelectedItem] = useState(null);

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
