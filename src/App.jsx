import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Grid from "@mui/material/Grid";
import TodoTable from "./components/todoTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid container sx={{ height: "100vh" }}>
        <Sidebar />
        <TodoTable />
      </Grid>
    </>
  );
}

export default App;
