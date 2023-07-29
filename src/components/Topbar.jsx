import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react'
import { ReactComponent as QuestionCircleWhite } from "../assets/QuestionCircleWhite.svg";
import { ReactComponent as SettingsWhite } from "../assets/SettingsWhite.svg";
import { ReactComponent as StatBarsWhite } from "../assets/StatBarsWhite.svg";
import { ReactComponent as QuestionCircleGrey } from "../assets/QuestionCircleGrey.svg";
import { ReactComponent as SettingsGrey } from "../assets/SettingsGrey.svg";
import { ReactComponent as StatBarsGrey } from "../assets/StatBarsGrey.svg";
import { useSelector } from 'react-redux';
import { makeThemeDark, makeThemeLight } from '../redux/themeSlice';
import { useDispatch } from 'react-redux';
const MainContainer = styled(Box)(() => ({
    width: '638px',
    height: '84px',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 22px',
    marginBottom: '87px'
}));

const SVGsBox = styled(Box)(() => ({
    display: 'flex',
    gap: '30px',
}));

const MainHeading = styled(Typography)(() => ({
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "3px",
    marginRight: '66px'
}));

export default function Topbar() {
    const dispatch = useDispatch()
    const themeMode = useSelector((state) => state.theme.themeMode)

    return (
        <MainContainer sx={{ background: themeMode === 'light' ? '#F3F3F3' : 'rgba(218, 220, 224, 0.03)', }}>

            {themeMode === 'light' ?
                <QuestionCircleGrey style={{ marginRight: '120px', cursor: 'pointer' }} />
                :
                <QuestionCircleWhite style={{ marginRight: '120px', cursor: 'pointer' }} />
            }



            <MainHeading sx={{ color: themeMode === 'light' ? "#202537" : '#FFF', }}>FOREVERDLE</MainHeading>
            <SVGsBox>
                {themeMode === 'light' ?
                    <>
                        <StatBarsGrey style={{ cursor: 'pointer' }} />
                        <SettingsGrey onClick={() => { console.log('changingtheme to dark'); dispatch(makeThemeDark()) }} style={{ cursor: 'pointer' }} />
                    </>
                    :
                    <>
                        <StatBarsWhite style={{ cursor: 'pointer' }} />
                        <SettingsWhite onClick={() => { console.log('changingtheme to light'); dispatch(makeThemeLight()) }} style={{ cursor: 'pointer' }} />
                    </>
                }

            </SVGsBox>

        </MainContainer>
    )
}
