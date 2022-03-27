import React from 'react';

import { Page } from './layouts/page';
import { Header } from './layouts/header';
import { Footer } from './layouts/footer';
import { Main } from './layouts/main';
import { Section } from './layouts/section';
import { Wrapper } from './layouts/wrapper';


function App() {
  return (
    <Page>
      <Header>
        <Wrapper>
          Header
        </Wrapper>
      </Header>
      <Main>
        <Section>
          <Wrapper>
            Section
          </Wrapper>
        </Section>
      </Main>
      <Footer>
        <Wrapper>
          Footer
        </Wrapper>
      </Footer>
    </Page>
  );
}

export default App;
