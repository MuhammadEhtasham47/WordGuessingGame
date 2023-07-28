import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react'
import { ReactComponent as QuestionCircleWhite } from "../assets/QuestionCircleWhite.svg";
import { ReactComponent as SettingsWhite } from "../assets/SettingsWhite.svg";
import { ReactComponent as StatBarsWhite } from "../assets/StatBarsWhite.svg";
import { ReactComponent as QuestionCircleGrey } from "../assets/QuestionCircleGrey.svg";
import { ReactComponent as SettingsGrey } from "../assets/SettingsGrey.svg";
import { ReactComponent as StatBarsGrey } from "../assets/StatBarsGrey.svg";

const MainContainer = styled(Box)(() => ({
    width: '638px',
    height: '84px',
    borderRadius: '15px',
    background: '#F3F3F3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 22px',
    marginBottom: '87px'
}));

const MainHeading = styled(Typography)(() => ({
    color: "#202537",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    letterSpacing: "3px",
}));

export default function Topbar() {
    return (
        <MainContainer>
            <QuestionCircleGrey />
            <MainHeading>FOREVERDLE</MainHeading>
            <StatBarsGrey />
            <SettingsGrey />
        </MainContainer>
    )
}
