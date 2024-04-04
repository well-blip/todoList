import "./App.css";
import BoxSx from "./components/box";
import { TextField, Typography } from "@mui/material";
import Task from "./components/tasks";

function App() {
  var tasks = ["Build Application", "Take a Walk", "Eat Food"];
  return (
    <div>
      <div className="title_container">
        <Typography className="title_text" variant="h2">
          Created with Love - To-Do-List{" "}
        </Typography>
      </div>
      <div className="todoList">
        <BoxSx>
          <div className="actions">
            {tasks.map((tasks) => {
              return <Task key={tasks} task={{ title: tasks }} />;
            })}
          </div>
        </BoxSx>
      </div>
    </div>
  );
}

export default App;
