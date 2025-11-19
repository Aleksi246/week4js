const MediaRow = (props) => {
  const { item, setSelectedItem } = props;
  return (
    // TODO: move <tr> element in foreach from Home.jsx here
    <tr
      key={item.media_id}
      onClick={() => {
        setSelectedItem(item);
        console.log("works");
      }}
    >
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString("fi-FI")}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
};
export default MediaRow;
