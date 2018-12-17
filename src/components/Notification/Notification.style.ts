import styled, { css } from 'styled-components';

import { COLOR } from '../../style'; 

const textNotification = styled.span`
    display: flex;
    align-items: center;

    svg {
        padding-right: 0.3rem; 
    }
`

const NotificationStyle = css`
    .Notification-SnackBarContent {
        background: ${COLOR.error} !important;
    }
`

export const Style = {
    NotificationStyle,
    textNotification
};