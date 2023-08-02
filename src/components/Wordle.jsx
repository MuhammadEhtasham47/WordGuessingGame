import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid.jsx'
import Keypad from './Keypad.jsx'
import ModalDetails from './ModalDetails.jsx'
import Topbar from './Topbar.jsx'
import { Box, Modal, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import Settings from './Settings'
import Help from './Help'
import { Stats } from './Stats'

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
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
}));

export default function Wordle({ solution }) {
    const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, incorrectGuess } = useWordle(solution)
    const [showModal, setShowModal] = useState(false)

    const shouldSettingsOpen = useSelector((state) => state.user.shouldSettingsOpen)
    const shouldHelpOpen = useSelector((state) => state.user.shouldHelpOpen)
    const shouldStatsOpen = useSelector((state) => state.user.shouldStatsOpen)



    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        // if (isCorrect) {
        //     setShowModal(true)
        //     window.removeEventListener('keyup', handleKeyup)
        // }
        if (incorrectGuess > 5) {
            setShowModal(true)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    // useEffect(() => {
    //     console.log('usedKeys', usedKeys);
    // }, [usedKeys])

    console.log('shouldSettingsOpen', shouldSettingsOpen);
    console.log('shouldStatsOpen', shouldStatsOpen);
    console.log('shouldHelpOpen', shouldHelpOpen);


    return (

        <MainContainer >
            <Topbar />
            {/* <Typography>incorrectGuess {incorrectGuess}</Typography>
            <Typography>guessLength {guesses.length}</Typography>
            <Typography>turn {turn}</Typography> */}



            {
                shouldSettingsOpen && <Settings />
            }

            {
                shouldHelpOpen && <Help />
            }

            {
                shouldStatsOpen && <Stats />
            }

            {
                (shouldHelpOpen === false && shouldSettingsOpen === false && shouldStatsOpen === false) &&
                <>
                    <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
                    <Keypad usedKeys={usedKeys} handleKeyup={handleKeyup} currentGuess={currentGuess} />
                </>
            }




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