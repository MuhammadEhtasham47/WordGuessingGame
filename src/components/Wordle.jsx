import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid.jsx'
import Keypad from './Keypad.jsx'
import ModalDetails from './ModalDetails.jsx'
import Topbar from './Topbar.jsx'
import { Box, Modal } from '@mui/material'
import styled from '@emotion/styled'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const MainContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

export default function Wordle({ solution }) {
    const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            setShowModal(true)
            window.removeEventListener('keyup', handleKeyup)
        }
        if (turn > 4) {
            setShowModal(true)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return (

        <MainContainer >
            <Topbar />
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
            <Keypad usedKeys={usedKeys} handleKeyup={handleKeyup} currentGuess={currentGuess} />
            <Modal
                open={showModal}
                onClose={() => setShowModal(false)}
            >
                <Box sx={style}>
                    <ModalDetails isCorrect={isCorrect} turn={turn} solution={solution}></ModalDetails>
                </Box>
            </Modal>
        </MainContainer>
    )
}