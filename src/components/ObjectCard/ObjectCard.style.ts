import styled, { css } from 'styled-components';

import { COLOR } from '../../style';

const ObjectCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid black; */
    border-radius: 5px;
    background: ${COLOR.light2};
`;


const ObjectCardItemBase = css`
    width: 100%;
    border-right: 1px solid #e0e0e0;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0.3rem;
    svg {
        font-size: 3rem;
    }
`;

const ObjectCardItem = styled.div`
    ${ObjectCardItemBase}
`;

const ObjectCardItemLastItemTwoParts = styled.div`
    ${ObjectCardItemBase};
    flex-direction: row;
`;

const ObjectCardItemSubItem = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:first-child {
        border-right: 0.8px dashed #c3c3c3;
    }
    svg {
        cursor: pointer;
    }
`;

const ObjectCardItemContent = styled.div`
    text-align: center;
    margin: auto;
`;

const ObjectCardItemTitle = styled.h4`
    padding-bottom: 0.3rem;
    font-weight: bold;
    margin: 8px 0 0 0;
`;

const ObjectStatusDescription = styled.p`
    font-style: italic;
    font-size: small;
    margin: 0 auto 0 0;
`;

export const Style = {
    ObjectCardContainer,
    ObjectCardItem,
    ObjectCardItemContent,
    ObjectCardItemLastItemTwoParts,
    ObjectCardItemSubItem,
    ObjectCardItemTitle,
    ObjectStatusDescription
};
