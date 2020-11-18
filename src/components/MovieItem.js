import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";
import { observer } from "mobx-react";

const MovieItem = ({ movie }) => {
  return (
    <tr>
      <th scope="row">{movie.title}</th>
      <td>
        <WatchedButton movieId={movie.id} />
      </td>
      <td>
        <DeleteButton movieId={movie.id} />
      </td>
    </tr>
  );
};

export default observer(MovieItem);
