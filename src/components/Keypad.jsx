import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import styled from '@emotion/styled';
const lettersArray1 = [
    { key: "q" }, { key: "w" }, { key: "e" }, { key: "r" }, { key: "t" }, { key: "y" },
    { key: "u" }, { key: "i" }, { key: "o" }, { key: "p" }, { key: "a" }, { key: "s" },
    { key: "d" }, { key: "f" }, { key: "g" }, { key: "h" }, { key: "j" }, { key: "k" },
    { key: "l" }
];

const lettersArray2 = [
    { key: "z" }, { key: "x" }, { key: "c" }, { key: "v" }, { key: "b" },
    { key: "n" }, { key: "m" },
];


const EnterButton = styled(Button)(() => ({
    width: "71.783px",
    fontWeight: 600,
    fontSize: "15px",
    // Add more styles here if needed
}));

export default function Keypad({ usedKeys, handleKeyup, currentGuess }) {

    const [guessLength, setGuessLength] = useState(0)
    useEffect(() => {
        let guessArray = currentGuess.split('')
        let guessArrayLength = guessArray.length
        setGuessLength(guessArrayLength)
    }, [currentGuess])

    return (
        <div className="keypad">
            {lettersArray1 && lettersArray1.map(l => {
                const color = usedKeys[l.key]
                return (
                    <Button onClick={() => { handleKeyup({ key: l.key }) }} key={l.key} className={color}>{l.key}</Button>
                )
            })}

            <EnterButton disabled={guessLength !== 5 ? true : false} onClick={() => { handleKeyup({ key: 'ENTER' }) }}  >ENTER</EnterButton>
            {
                lettersArray2 && lettersArray2.map(l => {
                    const color = usedKeys[l.key]
                    return (
                        <Button onClick={() => { handleKeyup({ key: l.key }) }} key={l.key} className={color}>{l.key}</Button>
                    )
                })
            }
            <Button onClick={() => { handleKeyup({ key: 'DELETE' }) }} style={{ width: '71.783px' }} ><BackspaceOutlinedIcon /></Button>
        </div >
    )
}