import "./App.css";
import { Card, CardContent } from "@mui/material";
import Landing from "./Components/Landing";
import { confingStore } from "./Store/configStore";
import { Provider } from "react-redux";

function App() {
  const myStore = confingStore();
  return (
    <Card sx={{ bgcolor: "lightyellow" }}>
      <CardContent>
        <Provider store={myStore}>
          <Landing />
        </Provider>
      </CardContent>
    </Card>
  );
}

export default App;
