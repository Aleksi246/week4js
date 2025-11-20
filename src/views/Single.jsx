import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const Single = () => {
  const { state } = useLocation();
  const item = state?.item;

  const navigate = useNavigate();
  let mediaContent = null;

  if (item) {
    if (item.media_type.startsWith("image")) {
      mediaContent = <img src={item.filename} alt={item.title} />;
    } else if (item.media_type.startsWith("video")) {
      mediaContent = <video src={item.filename} controls />;
    }
  }

  let titled = null;

  if (item) {
    titled = (
      <>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>{item.username}</p>
      </>
    );
  }

  return (
    <dialog open={!!item}>
      {mediaContent}
      {titled}
      <button onClick={() => navigate(-1)}>Go back</button>
    </dialog>
  );
};
export default Single;
