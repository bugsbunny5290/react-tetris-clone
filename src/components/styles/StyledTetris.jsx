import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0f0c29; /* fallback for old browsers */
  background: linear-gradient(
      230deg,
      rgba(93, 93, 93, 0.03) 0%,
      rgba(93, 93, 93, 0.03) 50%,
      rgba(78, 78, 78, 0.03) 50%,
      rgba(78, 78, 78, 0.03) 100%
    ),
    linear-gradient(
      107deg,
      rgba(55, 55, 55, 0.01) 0%,
      rgba(55, 55, 55, 0.01) 50%,
      rgba(170, 170, 170, 0.01) 50%,
      rgba(170, 170, 170, 0.01) 100%
    ),
    linear-gradient(
      278deg,
      rgba(16, 16, 16, 0.03) 0%,
      rgba(16, 16, 16, 0.03) 50%,
      rgba(24, 24, 24, 0.03) 50%,
      rgba(24, 24, 24, 0.03) 100%
    ),
    linear-gradient(
      205deg,
      rgba(116, 116, 116, 0.03) 0%,
      rgba(116, 116, 116, 0.03) 50%,
      rgba(0, 0, 0, 0.03) 50%,
      rgba(0, 0, 0, 0.03) 100%
    ),
    linear-gradient(
      150deg,
      rgba(5, 5, 5, 0.03) 0%,
      rgba(5, 5, 5, 0.03) 50%,
      rgba(80, 80, 80, 0.03) 50%,
      rgba(80, 80, 80, 0.03) 100%
    ),
    linear-gradient(
      198deg,
      rgba(231, 231, 231, 0.03) 0%,
      rgba(231, 231, 231, 0.03) 50%,
      rgba(26, 26, 26, 0.03) 50%,
      rgba(26, 26, 26, 0.03) 100%
    ),
    linear-gradient(
      278deg,
      rgba(89, 89, 89, 0.03) 0%,
      rgba(89, 89, 89, 0.03) 50%,
      rgba(26, 26, 26, 0.03) 50%,
      rgba(26, 26, 26, 0.03) 100%
    ),
    linear-gradient(
      217deg,
      rgba(28, 28, 28, 0.03) 0%,
      rgba(28, 28, 28, 0.03) 50%,
      rgba(202, 202, 202, 0.03) 50%,
      rgba(202, 202, 202, 0.03) 100%
    ),
    linear-gradient(
      129deg,
      rgba(23, 23, 23, 0.03) 0%,
      rgba(23, 23, 23, 0.03) 50%,
      rgba(244, 244, 244, 0.03) 50%,
      rgba(244, 244, 244, 0.03) 100%
    ),
    linear-gradient(90deg, rgb(1, 64, 149), rgb(198, 5, 91));
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
