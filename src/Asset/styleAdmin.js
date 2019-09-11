import styled from 'styled-components';

export const HeadLeft = styled.div`display: inline-flex;`;

export const HeadRight = styled.div``;

export const HeadBtn = styled.div`
	background: ${(props) => props.bgAct};
	height: 35px;
	padding: 0 15px;
	margin-right: 5px;
	border-radius: 20px;
	color: #fff;
	font-size: 12px;
	line-height: 35px;
	cursor: pointer;
	&:hover {
		background: #33333317;
	}
`;
export const Bgblue = styled.div`
	background: #29a4db;
	height: 120px;
	box-shadow: inset 0 5px 8px #3333;
`;
export const HeadRightBtn = styled.a`
	position: relative;
	background: ${(props) => (props.bg ? props.bg : '#f5f5f5')};
	height: 35px;
	padding: 10px 15px;
	border-radius: 40px;
	margin-right: 5px;
	border-radius: 20px;
	color: #29a4db;
	font-size: 12px;
	line-height: 35px;
	cursor: pointer;
	text-decoration: none;
	&:hover {
		text-decoration: none;
		opacity: 1;
		background: #ffffff;
	}
	@media screen and (max-width: 1367px){
		padding: 5px 15px;
	}
`;

// by khawkriab.dev
// --------- ModalCustom ----------------------------------------------------------------------------------------------------------
export const ModalCustom = styled.div`
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
	background-color: #00000098;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	height: 100%;
	overflow: hidden;
	outline: 0;
	align-items: center;
	justify-content: center;
`;
export const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: ${props => props.w ? props.w : '500px'};
    pointer-events: auto;
    background-color: #fff;
`
export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.p ? props.p : '2rem 15px 10px 15px'};
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`
export const ModalBody = styled.div`
	position: relative;
	padding: 1rem;
	display: grid;
`;
export const ModalFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 1rem 3rem 1rem;
	border-bottom-right-radius: .3rem;
	border-bottom-left-radius: .3rem;

	@media screen and (max-width: 1367px){
		padding: 1rem;
	}
`;
export const ModalClose = styled.button`
	position: absolute;
	top: 0px;
	right: 5px;
	border: 0;
	font-size: 18px;
	background-color: transparent;
	z-index: 9999;
`;
export const ModalBgClose = styled.div`
	background-color: #00000098;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
	overflow: hidden;
	outline: 0;
`;
export const ModalButton = styled.div`
	position: relative;
	background: ${(props) => props.bg};
	min-width: 100px;
	text-align: center;
	border-radius: 20px;
	padding: .375rem .75rem;
	margin: auto .75rem;
	color: #ffffff;
	font-size: 14px;
	line-height: 1.5;
	border: unset !important;
	cursor: pointer;
	opacity: .9;
	&:hover {
		background: #55555520;
		opacity: 1;
		&:after {
			content: '';
			background: ${(props) => props.bg};
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0px;
			left: 0px;
			border-radius: 20px;
			z-index: -1;
		}
	}
`;
// --------- Contents ----------------------------------------------------------------------------------------------------------
export const Contents = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const ContentsLeft = styled.div`
	display: flex;
	width: 50%;
	padding: 15px;
	flex-wrap: wrap;
	flex-direction: ${(props) => props.flexDirection};
`;
export const ContentsRight = styled.div`
	display: flex;
	width: 50%;
	padding: 15px;
	flex-wrap: wrap;
	flex-direction: ${(props) => props.flexDirection};
`;

// --------- Button ----------------------------------------------------------------------------------------------------------
export const Button = styled.div`
    position: relative;
	background: ${(props) => (props.bg ? props.bg : '#29A4DB')};
	width: auto !important;
    min-width: 140px;
    text-align: center;
    border-radius: 20px !important;
    padding: ${(props) => (props.py ? props.py : '.889rem')}  ${(props) => (props.px ? props.px : '2rem')} !important;
    margin: ${(props) => (props.my ? props.my : 'auto')}  ${(props) => (props.mx ? props.mx : '.75rem')} !important;
    color: ${(props) => (props.c ? props.c : '#ffffff')};
    font-size: 14px;
    line-height: 1.25;
    border: ${(props) => (props.bord ? props.bord :'unset!important')};
    cursor: pointer;
	opacity: .98;
	align-items:center;
	justify-content: center;
	display:flex;
   
		@media screen and (max-width: 1367px) {
			min-width: 100px;
			line-height: 1;
			padding: ${(props) => (props.py ? props.py : '.889rem')}  ${(props) => (props.px ? props.px : '.5rem')};
			font-size: small;
		}
		&:hover{
			background: ${(props) => (props.bgH ? props.bgH : '#0e79a9')};
			opacity: 1;
		}&>i{
			font-size:20px;
			margin-right:5px;

				@media screen and (max-width: 1367px) {
					font-size:15px
				}
	}
`;
// --------- LabelBT ----------------------------------------------------------------------------------------------------------
export const LabelBT = styled.label`
    position: relative;
	background: ${(props) => (props.bg ? props.bg : '#29A4DB')};
	width: auto !important;
    min-width: 140px;
    text-align: center;
    border-radius: 20px !important;
    padding: ${(props) => (props.py ? props.py : '.889rem')}  ${(props) => (props.px ? props.px : '2rem')} !important;
    margin: ${(props) => (props.my ? props.my : 'auto')}  ${(props) => (props.mx ? props.mx : '.75rem')} !important;
    color: ${(props) => (props.c ? props.c : '#ffffff')};
    font-size: 14px;
    line-height: 1.25;
    border: ${(props) => (props.bord ? props.bord :'unset!important')};
    cursor: pointer;
    opacity: .9;
   
	@media screen and (max-width: 1367px) {
		min-width: 100px;
		line-height: 1;
		padding: ${(props) => (props.py ? props.py : '.889rem')}  ${(props) => (props.px ? props.px : '.5rem')};
		font-size: 1rem;
	}
	&: hover{
		background: ${(props) => (props.bgH ? props.bgH : '#0e79a9')};
		opacity: 1;
}
`;
