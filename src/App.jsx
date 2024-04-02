import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BoxSx from "./components/box";
import { TextField, Typography, Button, Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="title_container">
        <Typography className="title_text" variant="h2">
          Created with Love - To-Do-List{" "}
        </Typography>
      </div>
      <div className="todoList">
        <BoxSx></BoxSx>
      </div>
    </div>
  );
}

export default App;
