import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    shouldSettingsOpen: false,
    shouldHelpOpen: false,
    shouldStatsOpen: false,
    animation: true,
    gamesPlayed: 0,
    gamesWon: 0,
    winPercentage: 0,
    bestTry: 0,
    maxStreak: 0,

}

export const userSlice = createSlice({


    name: 'user',

    initialState,
    reducers: {
        openSettings: (state) => {
            state.shouldSettingsOpen = true
            state.shouldStatsOpen = false
            state.shouldHelpOpen = false

        },
        closeSettings: (state) => {
            state.shouldSettingsOpen = false
        },

        openHelp: (state) => {
            state.shouldHelpOpen = true
            state.shouldStatsOpen = false
            state.shouldSettingsOpen = false
        },
        closeHelp: (state) => {
            state.shouldHelpOpen = false
        },

        openStats: (state) => {
            state.shouldStatsOpen = true
            state.shouldHelpOpen = false
            state.shouldSettingsOpen = false
        },
        closeStats: (state) => {
            state.shouldStatsOpen = false
        },
        animateTrue: (state) => {
            state.animation = true
        },
        animateFalse: (state) => {
            state.animation = false
        },

    },
})

export const { openHelp, openSettings, openStats, closeHelp, closeSettings, closeStats, animateFalse, animateTrue } = userSlice.actions

export default userSlice.reducer