import React, { useEffect, useMemo, useState } from "react";
import Wordle from "./components/Wordle.jsx";
import { Toaster } from 'react-hot-toast';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";

function App() {
  let words = [
    { "id": 1, "word": "ninja" },
    { "id": 2, "word": "spade" },
    { "id": 3, "word": "pools" },
    { "id": 4, "word": "drive" },
    { "id": 5, "word": "relax" },
    { "id": 6, "word": "times" },
    { "id": 7, "word": "train" },
    { "id": 8, "word": "cores" },
    { "id": 9, "word": "pours" },
    { "id": 10, "word": "blame" },
    { "id": 11, "word": "banks" },
    { "id": 12, "word": "phone" },
    { "id": 13, "word": "bling" },
    { "id": 14, "word": "coins" },
    { "id": 15, "word": "hello" }
  ]



  const [solution, setSolution] = useState(null)


  useEffect(() => {
    const randomSolution = words[Math.floor(Math.random() * words.length)]
    setSolution(randomSolution.word)
  }, [setSolution])

  const themeMode = useSelector((state) => state.theme.themeMode)

  console.log(themeMode);


  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          background: {
            default: themeMode === 'dark' ? '#262B3C' : '#FFFFFF', // Set the background color here
          },
        },
      }),
    [themeMode],
  );

  // const theme = useMemo(() => createCustomTheme(), []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      < Toaster />
      {solution && <div>Solution is: {solution}</div>}
      {solution && <Wordle solution={solution} />}
    </ThemeProvider>
  )
}

export default App;
