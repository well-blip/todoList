import "./App.css";
import BoxSx from "./components/box";
import { TextField, Typography } from "@mui/material";
import Task from "./components/tasks";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const tasks = ["Build Application", "Take a Walk", "Eat Food"];

  return (
    <div>
      <div className="title_container">
        <Typography className="title_text" variant="h2">
          Created with Love - To-Do-List
        </Typography>
      </div>
      <div className="todoList" style={{ position: "relative" }}>
        <BoxSx style={{ position: "relative" }}>
          <div className="actions" style={{ margin: "20px" }}>
            {tasks.map((task) => {
              return <Task key={task} task={{ title: task }} />;
            })}
          </div>
        </BoxSx>
        <Fab
          aria-label="add"
          style={{
            backgroundColor: "#276673",
            color: "whitesmoke",
            position: "relative",
            top: "150px",
            right: "80px",
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default App;
