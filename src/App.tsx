import React from "react";
import {Body, Link, Section, Wrapper} from "./styles/App.styles";

import GlobalFonts from "./styles/fonts.styles";

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <GlobalFonts />
        <Body>
          <Section top={true}>
              I’m Anna Barton.
          </Section>
          <Section>
              Designer / Thinker / Tea drinker / <br/>
              Londoner / Maker / Baker / <Link href="https://twitter.com/annabarton__" target="_blank">Tweeter</Link> / <br/>
              Joker / Extrovert / Introvert / <br/>
              <Link href="https://www.instagram.com/annabarton__/" target="_blank">Instagrammer</Link> / Nandos enthusiast / <br/>
              Speed awareness course attendee.
          </Section>
          <Section>
              <Link href="mailto:annabartondesign@gmail.com">Email me</Link> for my portfolio.<br/>
              Cheers / Ta / Thanks.
          </Section>
        </Body>
      </Wrapper>
    );
  }
}

export default App;
