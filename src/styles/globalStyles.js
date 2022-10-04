import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		background-color: #23272A;
		font-family: 'Gilroy-Regular', sans-serif;
			user-select: none;
			-webkit-user-select: none; /* Safari 3.1+ */
			-moz-user-select: none; /* Firefox 2+ */
			-ms-user-select: none; /* IE 10+ */
	}
	body > #root {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	::placeholder {
		color: #FFFFFF;
		opacity: 0.3;
	}

	/* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #4f4f4f #141414;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #141414;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #4f4f4f;
    border-radius: 10px;
    border: 0px none #ffffff;
  }

	.swiper-pagination-bullet-active {
    background-color: #FFFFFF !important;
	}
	.swiper-pagination-bullet {
		background-color: #404040;
		@media screen and (max-width: 600px) {
			width: 0.4rem;
			height: 0.4rem;
		}
	}

	.swiper-button-next,
	.swiper-button-prev {
    color: #FFFFFF !important;
		padding-bottom: 20px;
	}

	.swiper-wrapper{
		padding-bottom: 30px;
		@media screen and (max-width: 600px) {
			padding-bottom: 40px;
		}
	}

	.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 0px !important;
	}

	@media only screen and (max-width: 600px) {
		.plyr button {
			font-size: 0.8rem;
		}
	}


	img {  
		user-drag: none;  
		user-select: none;
		-moz-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	 }
	 
	.skip-button {
		padding: 0.3rem 1rem;
		position: absolute;
		top: -1.5rem;
		right: 3rem;
		border-radius: 0.3rem;
		border: 1px solid rgba(255, 255, 255, 0.4);
		outline: none;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.6);
		color: #FFFFFF;
	}

	#errContainer
	{
		diplay:flex;
		flex-direction: row;
		justify-content:center;

	}
	.pageNotFound{
		display:flex;
		flex-direction:row;
		margin-left:auto;
		margin-right:auto;
		align-content:center;
		justify-content:center;
		flex-wrap:wrap;
		align-items: center;
		width:fit-content;
		height:fit-content;
	}
	.errorMessage
	{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;

	}

	.err
	{
		font-size:100px;
		color: white;


	}

	.num
	{
		font-size:160px; 
		letter-spacing:10px;
		color: white;
	}

	.errorMessage h1{
		color: grey;
	}
`;

export default GlobalStyle;