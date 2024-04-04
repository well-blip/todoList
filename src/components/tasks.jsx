import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Box } from "@mui/material";

export default function Task({ task }) {
  const [completed, setCompleted] = useState(false);

  const handleCompletedStatus = () => {
    if (!completed) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#caef8c",
          borderRadius: "30px",
          padding: "10px",
        }}
      >
        <FormControlLabel
          control={<Checkbox onClick={handleCompletedStatus} />}
          label={task.title}
          sx={{
            color: "black",
            textDecoration: completed ? "line-through" : "none",
          }}
        />
      </Box>
    </div>
  );
}
