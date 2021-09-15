import React, { Component } from "react";
import styled, { css } from "styled-components";

function MoreDetailsButton(props) {
	return (
		<Container {...props}>
			<Tag href="https://dnar.io/" rel="noopener noreferrer" target="_blank">
				<Image
					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTc5LjMxNyIgaGVpZ2h0PSI4My45NjUiIHZpZXdCb3g9IjAgMCAxNzkuMzE3IDgzLjk2NSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6bm9uZTt9LmJ7Y2xpcC1wYXRoOnVybCgjYSk7fS5je2ZpbGw6I2YyYjg1Mzt9LmR7ZmlsbDojMjk2MDY2O308L3N0eWxlPjxjbGlwUGF0aCBpZD0iYSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxNzkuMzE3IiBoZWlnaHQ9IjY1LjcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYuMTg5IDMzMC4zMjkpIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNi4xODkgLTMyNC4yMDYpIj48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjE3OS4zMTciIGhlaWdodD0iODMuOTY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYuMTg5IDMyNC4yMDYpIi8+PGcgY2xhc3M9ImIiPjxwYXRoIGNsYXNzPSJjIiBkPSJNMTYwLjUsMzM1LjUyOXY1NS43NDdhNC40OTEsNC40OTEsMCwwLDEtNC43NzMsNC43NzNjLTIuOTcyLDAtNC44NjQtMS44LTQuODY0LTQuNzczdi00LjVjLTIuNTIxLDUuODU0LTguMSw5LjI3Ni0xNS4xMjksOS4yNzYtMTIuMzM5LDAtMTkuNTQ0LTguNzM2LTE5LjU0NC0yMy42ODZzNy4yLTIzLjY4NSwxOS41NDQtMjMuNjg1YzcuMDI0LDAsMTIuNjA4LDMuNDIyLDE1LjEyOSw5LjI3NlYzMzUuNTI5YzAtMi45NzIsMS44OTItNC43NzMsNC44NjQtNC43NzNhNC40OTEsNC40OTEsMCwwLDEsNC43NzMsNC43NzNtLTkuNjM3LDM2LjgzNGMwLTkuNzI2LTQuMjMyLTE0LjY3OS0xMi41MTgtMTQuNjc5cy0xMi41MTgsNC45NTMtMTIuNTE4LDE0LjY3OSw0LjIzMywxNC42OCwxMi41MTgsMTQuNjgsMTIuNTE4LTQuOTUzLDEyLjUxOC0xNC42OCIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMjExLjAzLDM2OS44NDJ2MjEuNDM0YTQuNzczLDQuNzczLDAsMCwxLTkuNTQ3LDBWMzY5Ljg0MmMwLTguMi0zLjE1Mi0xMi4xNTgtOS42MzYtMTIuMTU4LTcuODM1LDAtMTIuMjQ4LDUuMzEzLTEyLjI0OCwxNC42OHYxOC45MTJjMCwyLjk3Mi0xLjg5MSw0Ljc3My00Ljg2Myw0Ljc3M2E0LjQ5MSw0LjQ5MSwwLDAsMS00Ljc3NC00Ljc3M1YzNTQuMzUyYTQuNDkyLDQuNDkyLDAsMCwxLDQuNzc0LTQuNzc0YzIuOTcyLDAsNC44NjMsMS44LDQuODYzLDQuNzc0djMuNzgyYzIuNDMxLTUuODU0LDguMDE1LTkuNDU2LDE0Ljg2LTkuNDU2LDEwLjksMCwxNi41NzEsNy4yOTUsMTYuNTcxLDIxLjE2NCIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMjU3LjEzMywzNzAuNTYydjIwLjcxNGE0LjQ0NSw0LjQ0NSwwLDAsMS00Ljc3Myw0Ljc3Myw0LjUxNiw0LjUxNiwwLDAsMS00Ljg2My00Ljc3M3YtNC41Yy0yLjM0Miw1Ljc2NC03Ljc0NSw5LjI3Ni0xNC40MSw5LjI3Ni05LjQ1NiwwLTE1LjU4LTUuNjczLTE1LjU4LTE0LjU4OSwwLTkuMSw1Ljg1NC0xMy43OCwxNi45MzEtMTMuNzhBNTUuNDY5LDU1LjQ2OSwwLDAsMSwyNDcuNSwzNjkuM2MtLjE4LTguODI2LTMuMjQyLTExLjgtMTIuMTU4LTExLjhhMzMuNTY4LDMzLjU2OCwwLDAsMC04LjM3NiwxLjE3MSwxOC40LDE4LjQsMCwwLDEtMi41MjEuMzYxYy0yLjQzMiwwLTMuODczLTEuMzUxLTMuODczLTMuOTYzLDAtMS44OTEsMS4xNzEtMy4zMzIsMy40MjItNC4zMjNhMjkuMDA3LDI5LjAwNywwLDAsMSwxMS43MDgtMi4wNzFjMTQuOTUsMCwyMS40MzQsNi42NjQsMjEuNDM0LDIxLjg4NG0tOS42MzYsNS40OTR2LS41NGE1OC43ODMsNTguNzgzLDAsMCwwLTExLjUyOC0xLjI2MWMtNS43NjMsMC04LjgyNSwyLjI1Mi04LjgyNSw2LjY2NCwwLDMuOTYzLDMuNTEyLDYuNzU1LDguNTU1LDYuNzU1LDcuNTY1LDAsMTEuOC00LjIzMywxMS44LTExLjYxOCIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMjk1LjUwNiwzNTMuNzIxYzAsMi43OTItMS44LDQuNS00Ljc3Myw0LjUtOS42MzYsMC0xNC41LDUuMDQ0LTE0LjUsMTQuNjh2MTguMzcyYzAsMi45NzItMS44OTIsNC43NzMtNC44NjQsNC43NzNhNC40OTEsNC40OTEsMCwwLDEtNC43NzMtNC43NzNWMzU0LjM1MmE0LjQ5MSw0LjQ5MSwwLDAsMSw0Ljc3My00Ljc3NGMyLjk3MiwwLDQuODY0LDEuOCw0Ljg2NCw0Ljc3NHY0LjQxM2MyLjctNi4xMjUsNy43NDUtOS41NDcsMTQuNS05LjU0NywyLjk3MiwwLDQuNzczLDEuNjIxLDQuNzczLDQuNSIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMTc5LjQyNiwzMzUuMDYxYTQuNzMxLDQuNzMxLDAsMSwxLTQuNzMyLTQuNzMyLDQuNzMyLDQuNzMyLDAsMCwxLDQuNzMyLDQuNzMyIi8+PC9nPjwvZz48L3N2Zz4="
					alt="dnar"
				/>
			</Tag>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(36, 31, 42, 1);
	border: none;
	border-radius: 1em;
	text-align: center;
`;

const Tag = styled.a`
	width: 80%;
`;
const Image = styled.img`
	object-fit: object-contain;
	width: 100%;
`;

export default MoreDetailsButton;
