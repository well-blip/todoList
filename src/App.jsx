import "./App.css";
import BoxSx from "./components/box";
import { TextField, Typography } from "@mui/material";
import Task from "./components/tasks";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Modal from "./components/modal";
import CustomModal from "./components/modal";

function App() {
  const tasks = ["Build Application"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
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
            top: "130px",
            right: "80px",
          }}
          onClick={handleOpenModal}
        >
          <AddIcon />
        </Fab>
      </div>
      <CustomModal open={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default App;
