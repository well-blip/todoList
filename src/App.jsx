import "./App.css";
import BoxSx from "./components/box";
import { TextField, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <div className="title_container">
        <Typography className="title_text" variant="h2">
          Created with Love - To-Do-List{" "}
        </Typography>
      </div>
      <div className="todoList">
        <BoxSx>
          <div className="actions"></div>
        </BoxSx>
      </div>
    </div>
  );
}

export default App;
