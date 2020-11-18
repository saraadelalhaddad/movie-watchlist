import "./App.css";
import { TableWatchList } from "./styles";
import Watchlist from "./components/Watchlist";
// import Watched from "./components/Watched";

function App() {
  return (
    <TableWatchList>
      <Watchlist />
    </TableWatchList>
  );
}

export default App;
