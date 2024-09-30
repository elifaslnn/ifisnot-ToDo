import React from "react";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function TodoTable() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <Grid
        sx={{
          flexGrow: 1,
          backgroundColor: "rgb(252, 239, 190)",
        }}
      >
        <Grid
          container
          rowSpacing={0}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} sx={{ backgroundColor: "none" }}>
            <Item>TITLE</Item>
          </Grid>
          <Grid item xs={8} sx={{ marginTop: "16vh", height: "60vh" }}>
            <Item
              sx={{
                backgroundColor: "rgb(93, 127, 15)",
                height: "100%",
                margin: "0",
                padding: "0",
              }}
            >
              <img
                src="./src/assets/lemon-wallpaper.jpg"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Grid>
      ;
    </>
  );
}

export default TodoTable;
