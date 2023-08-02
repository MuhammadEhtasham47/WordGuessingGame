import { Clear } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { closeStats } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Stats = () => {
    const themeMode = useSelector((state) => state.theme.themeMode)
    const dispatch = useDispatch()

    return (
        <>
            <Box
                sx={{
                    width: { xs: '100%', xs350: '100%', xs450: '100%', sm: '638px' },
                    height: '40px',
                    borderRadius: '8px',
                    background: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    marginTop: '-80px'
                }}
            >
                <Typography
                    sx={{
                        color: themeMode === 'light' ? "#202537" : '#FFF',
                        fontSize: { xs: '20px', xs350: '25px' },
                    }}
                >
                    Statictics
                </Typography>

                <Clear
                    sx={{
                        color: themeMode === 'light' ? '#818181' : '#FFF',
                        fontSize: { xs: '20px', xs350: '25px', xs450: '30px', sm: '35px' },
                        fontWeight: 500,
                        position: "absolute",
                        right: '20px'
                    }}
                    onClick={() => { dispatch(closeStats()) }}
                />
            </Box>

            <Grid container spacing={2} sx={{ width: { xs: '100%', xs350: '100%', xs450: '100%', sm: '638px' }, justifyContent: 'center', mt: '20px' }}>
                <Grid item xs={4} xs450={3.8} sm={3.8}>
                    <Box sx={{ padding: '20px 10px', width: '100%', height: '100px', backgroundColor: "red", borderRadius: '12px', background: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
                        <Typography sx={{ fontSize: { xs: '24px', xs350: '29px', xs450: '33px', sm: '40px' }, fontWeight: "bold", color: themeMode === 'light' ? "#202537" : '#FFF', }}>2</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', xs350: '12px', xs450: '13px', sm: '16px' }, color: themeMode === 'light' ? "#202537" : '#FFF', }}>🕹️ Games played</Typography>

                    </Box>
                </Grid>

                <Grid item xs={4} xs450={3.8} sm={3.8}>
                    <Box sx={{ padding: '20px 10px', width: '100%', height: '100px', backgroundColor: "red", borderRadius: '12px', background: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
                        <Typography sx={{ fontSize: { xs: '24px', xs350: '29px', xs450: '33px', sm: '40px' }, fontWeight: "bold", color: themeMode === 'light' ? "#202537" : '#FFF', }}>2</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', xs350: '12px', xs450: '13px', sm: '16px' }, color: themeMode === 'light' ? "#202537" : '#FFF', }}>🏆 Games Won</Typography>

                    </Box>
                </Grid>

                <Grid item xs={4} xs450={3.8} sm={3.8}>
                    <Box sx={{ padding: '20px 10px', width: '100%', height: '100px', backgroundColor: "red", borderRadius: '12px', background: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
                        <Typography sx={{ fontSize: { xs: '24px', xs350: '29px', xs450: '33px', sm: '40px' }, fontWeight: "bold", color: themeMode === 'light' ? "#202537" : '#FFF', }}>2</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', xs350: '12px', xs450: '13px', sm: '16px' }, color: themeMode === 'light' ? "#202537" : '#FFF', }}>📈 % of wins</Typography>

                    </Box>
                </Grid>

                <Grid item xs={4} xs450={3.8} sm={3.8}>
                    <Box sx={{ padding: '20px 10px', width: '100%', height: '100px', backgroundColor: "red", borderRadius: '12px', background: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
                        <Typography sx={{ fontSize: { xs: '24px', xs350: '29px', xs450: '33px', sm: '40px' }, fontWeight: "bold", color: themeMode === 'light' ? "#202537" : '#FFF', }}>2</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', xs350: '12px', xs450: '13px', sm: '16px' }, color: themeMode === 'light' ? "#202537" : '#FFF', }}>💎 Best try</Typography>

                    </Box>
                </Grid>

                <Grid item xs={4} xs450={3.8} sm={3.8}>
                    <Box sx={{ padding: '20px 10px', width: '100%', height: '100px', backgroundColor: "red", borderRadius: '12px', background: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)', display: 'flex', flexDirection: "column", lignItems: 'center', justifyContent: 'center', }}>
                        <Typography sx={{ fontSize: { xs: '24px', xs350: '29px', xs450: '33px', sm: '40px' }, fontWeight: "bold", color: themeMode === 'light' ? "#202537" : '#FFF', }}>2</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', xs350: '12px', xs450: '13px', sm: '16px' }, color: themeMode === 'light' ? "#202537" : '#FFF', }}>🔥 Current streak</Typography>

                    </Box>
                </Grid>

                <Grid item xs={4} xs450={3.8} sm={3.8}>
                    <Box sx={{ padding: '20px 10px', width: '100%', height: '100px', backgroundColor: "red", borderRadius: '12px', background: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
                        <Typography sx={{ fontSize: { xs: '24px', xs350: '29px', xs450: '33px', sm: '40px' }, fontWeight: "bold", color: themeMode === 'light' ? "#202537" : '#FFF', }}>2</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', xs350: '12px', xs450: '13px', sm: '16px' }, color: themeMode === 'light' ? "#202537" : '#FFF', }}>⚡ Max streak</Typography>

                    </Box>
                </Grid>
            </Grid>


            <Button
                variant='outlined'
                sx={{
                    mt: '40px',
                    backgroundColor: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)',
                    color: themeMode === 'light' ? "#202537" : '#FFF',
                    borderColor: themeMode === 'light' ? "#202537" : '#FFF',
                    '&:hover': {
                        borderColor: themeMode === 'light' ? "#202537" : '#FFF',
                    },
                    '&:active': {
                        borderColor: themeMode === 'light' ? "#202537" : '#FFF',
                        boxShadow: 'none',
                    },
                    '&:focus': {
                        borderColor: themeMode === 'light' ? "#202537" : '#FFF',
                        outline: 'none',
                    },
                }}>
                Reset Stats
            </Button>
        </>
    )
}
