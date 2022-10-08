import styled from 'styled-components'

export const ImageContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	cursor: pointer;

	svg {
		position: absolute;
		left: calc(50% - 10px);
		top: calc(50% - 10px);
		transform: scale(1.5);
		cursor: pointer;
	}
`
export const ImageCover = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 400px;
	width: 800px;
	margin: 16px 0;
	border: 2px dashed #d53f8c;

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
`
