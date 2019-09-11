import styled from 'styled-components';

// export const device = {
//     mobileS: `(min-width: ${size.mobileS})`,
//     mobileM: `(min-width: ${size.mobileM})`,
//     mobileL: `(min-width: ${size.mobileL})`,
//     tablet: `(min-width: 768px)`,
//     laptop: `(min-width: ${size.laptop})`,
//     laptopL: `(min-width: ${size.laptopL})`,
//     desktop: `(min-width: ${size.desktop})`,
//     desktopL: `(min-width: ${size.desktop})`
// };
// const size = {
//     mobileS: '320px',
//     mobileM: '375px',
//     mobileL: '425px',
//     tablet: '768px',
//     laptop: '1024px',
//     laptopL: '1440px',
//     desktop: '2560px'
// }

export const ContainerForm = styled.div`
    padding-top: 10px;
    padding-bottom: 10px
`

export const ContainerRow = styled.div`
    display: flex;
`
export const ContainerRadioRow = styled.div`
    display: block;
    text-align: left;
`
export const ContanierRadio = styled.div`
    display: flex;
    margin-left: 2px;
    margin-right: 2px;
    margin-bottom: 10px;
`

export const Label = styled.label`
    font-weight: 500;
    width: auto;
    font-size: 14px;
    text-align: ${props => props.textAlign};
`

export const LabelLight = styled.label`
    font-weight: 200;
    font-size: 15px;
    margin-right: 5px;
    cursor: pointer;
`
export const SummaryText = styled.div`
    display: flex;
    margin-left: 2px;
    margin-right: 2px;
`
export const LabelL = styled.label`
    font-weight: 300;
    font-size: small;
    margin-right: 5px;
    width: ${props => props.w ? props.w : '260px'};
    text-align: left;
`
export const LabelLS = styled.label`
    font-weight: 300;
    font-size: small;
    margin-right: 5px;
    width: 140px;
    text-align: left;
`


export const LabelR = styled.label`
    font-weight: 200;
    font-size: small;
    margin-right: 5px;
    text-align: left;
`

export const InputText = styled.input`
   
`
export const InputTextarea = styled.textarea`
    padding: 5px;
    resize: none;
    height: 100px !important;
`
export const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: #888;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const InputTextSmall = styled.input`
   
`
export const LineBt = styled.div`
    border-bottom: 1px solid ${props => props.color};
`
export const SetMinHeight = styled.div`
    max-height: ${props => props.high}px;
    overflow-y: auto;
    overflow-x: hidden;
`
export const SelectTitle = styled.select`
   
`
export const TrackStatusStart = styled.div`
    width: 20%;
    font-weight: 300;
    font-size: 15px;
    height: 40px;
    background: ${props => props.bg};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:before {
        right: -19px;
        content: '';
        z-index: 2;
        position: absolute;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid ${props => props.bg};
    }
    &:after {
        right: -21px;
        content: '';
        z-index: 1;
        position: absolute;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid #fff;
    }
`
export const TrackStatus = styled.div`
    padding-left: 20px;
    width: 20%;
    font-weight: 300;
    font-size: 15px;
    height: 40px;
    background: ${props => props.bg};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:before {
        right: -19px;
        content: '';
        z-index: 2;
        position: absolute;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid ${props => props.bg};
    }
    &:after {
        right: -21px;
        content: '';
        z-index: 1;
        position: absolute;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid #fff;
    }
`
export const TrackStatusEnd = styled.div`
    width: 20%;
    font-weight: 300;
    font-size: 15px;
    height: 40px;
    background: ${props => props.bg};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const LeftRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContentLeft = styled.div`

`

export const ContentRight = styled.div`
    display: inline-flex;
    align-items: center;
    & img{
        margin-right: 5px;
    }
`

export const PanelPopup = styled.div`
    // background-color: #888;
    background-color: #fff;
    width: 400px;
    position: fixed;
    text-align: left;
    z-index: 9999;
    top: 0;
    right: 0;
    height: 100%;
    box-shadow: -3px 0 8px #33333317;
`

export const BlockPopup = styled.div`
    margin: 10px;
    padding-top: 10px;
    border-top: 1px solid #f2f2f2;
`

export const DetailPopup = styled.div`
    color: #5E5E5E;
    font-size: 14px;
`

export const NamePopup = styled.div`
    display: flex;
`
