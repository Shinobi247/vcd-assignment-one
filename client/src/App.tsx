import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CarsCard from "./components/CarCards";
import AppHeader from "./components/AppHeader";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

function App() {
  let [searchItem, setSearchItem] = useState("");
  const getSearchItem = (value: string) => {
    setSearchItem(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppHeader getSearchItem={getSearchItem}></AppHeader>
        <Routes>
          <Route path="/" element={<CarsCard searchItem={searchItem} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
