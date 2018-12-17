import styled, { css } from 'styled-components';

import { COLOR } from '../../style';

const ObjectCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
    border-radius: 5px;
    background: ${COLOR.light2};
`;

const ObjectCardItemTitle = styled.span`
    padding-bottom: 0.3rem;
    font-weight: bold;
`;

const ObjectCardItemBase = css`
    width: 100%;
    border-right: 1px solid #e0e0e0;
    min-height: 100px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 0.3rem;
`

const ObjectCardItem = styled.div`
    ${ObjectCardItemBase}
`;

const ObjectCardItemLastItem = styled.div`
    ${ObjectCardItemBase}
    border-right: none;
`;


export const Style = {
    ObjectCardContainer,
    ObjectCardItem,
    ObjectCardItemLastItem,
    ObjectCardItemTitle
}