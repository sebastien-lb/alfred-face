import styled, { css } from 'styled-components';
import { COLOR } from "../../style";

const AppTitle = styled.span`
    flex: 1;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
`

const HeaderStyle = css`
    .ToolBar {
        background: ${COLOR.dark} !important;
    }
`

export const Styled = {
    AppTitle,
    HeaderStyle
};