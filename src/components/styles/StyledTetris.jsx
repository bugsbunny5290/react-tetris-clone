import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      201deg,
      rgba(148, 148, 148, 0.07) 0%,
      rgba(148, 148, 148, 0.07) 50%,
      rgba(83, 83, 83, 0.07) 50%,
      rgba(83, 83, 83, 0.07) 100%
    ),
    linear-gradient(
      192deg,
      rgba(176, 176, 176, 0.08) 0%,
      rgba(176, 176, 176, 0.08) 50%,
      rgba(180, 180, 180, 0.08) 50%,
      rgba(180, 180, 180, 0.08) 100%
    ),
    linear-gradient(
      48deg,
      rgba(185, 185, 185, 0.1) 0%,
      rgba(185, 185, 185, 0.1) 50%,
      rgba(243, 243, 243, 0.1) 50%,
      rgba(243, 243, 243, 0.1) 100%
    ),
    linear-gradient(
      65deg,
      rgba(172, 172, 172, 0.09) 0%,
      rgba(172, 172, 172, 0.09) 50%,
      rgba(209, 209, 209, 0.09) 50%,
      rgba(209, 209, 209, 0.09) 100%
    ),
    linear-gradient(
      4deg,
      rgba(224, 224, 224, 0.03) 0%,
      rgba(224, 224, 224, 0.03) 50%,
      rgba(49, 49, 49, 0.03) 50%,
      rgba(49, 49, 49, 0.03) 100%
    ),
    linear-gradient(
      228deg,
      rgba(152, 152, 152, 0.03) 0%,
      rgba(152, 152, 152, 0.03) 50%,
      rgba(130, 130, 130, 0.03) 50%,
      rgba(130, 130, 130, 0.03) 100%
    ),
    linear-gradient(
      163deg,
      rgba(170, 170, 170, 0.08) 0%,
      rgba(170, 170, 170, 0.08) 50%,
      rgba(232, 232, 232, 0.08) 50%,
      rgba(232, 232, 232, 0.08) 100%
    ),
    linear-gradient(
      152deg,
      rgba(12, 12, 12, 0.05) 0%,
      rgba(12, 12, 12, 0.05) 50%,
      rgba(161, 161, 161, 0.05) 50%,
      rgba(161, 161, 161, 0.05) 100%
    ),
    linear-gradient(
      302deg,
      rgba(48, 48, 48, 0.1) 0%,
      rgba(48, 48, 48, 0.1) 50%,
      rgba(195, 195, 195, 0.1) 50%,
      rgba(195, 195, 195, 0.1) 100%
    ),
    linear-gradient(90deg, rgb(144, 14, 253), rgb(74, 115, 255));
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
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
