import theme from "./theme";
import styled from "styled-components";

export const Wrapper = styled.section``;

interface SectionProps {
  top?: boolean;
}

export const Body = styled.div`
  color: ${theme.colours.primary};
  font-family: ${theme.font.fontFace};

  text-align: left;
  line-height: 1.8;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 52px;
  }
  @media only screen and (min-width: 1800px) {
    font-size: 64px;
  }
`;

export const Section = styled.div<SectionProps>`
  margin: 100px 0 100px 100px;

  @media only screen and (max-width: 600px) {
    margin: ${props => (props.top ? "100px 0 0 40px;" : "50px 0 0 40px;")};
  }
`;

export const Link = styled.a`
  text-decoration: none;

  &:hover {
    color: ${theme.colours.secondary};
  }

  &:visited {
    color: ${theme.colours.primary};
    &:hover {
      color: ${theme.colours.secondary};
    }
  }
`;

/* Small devices (portrait tablets and large phones, 600px and up) */

/* Medium devices (landscape tablets, 768px and up) */

/* Large devices (laptops/desktops, 992px and up) */

/* Extra large devices (large laptops and desktops, 1200px and up) */

/* Extra EXTRA large devices (large desktops, 1800px and up) */

