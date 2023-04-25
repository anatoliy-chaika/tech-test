import { GlobalStyles } from 'components/GlobalStules.js/GlobalStules.stuled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, MainContainer, Navigation, UlNav } from './layoud.styled';
import { Footer } from 'components/Footer/footer';

export const SharedLayout = () => {
  return (
    <MainContainer>
      <Header>
        <nav>
          <UlNav>
            <li>
              <Navigation to="/">Home</Navigation>
            </li>
            <li>
              <Navigation to="/tweets">Tweets</Navigation>
            </li>
          </UlNav>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <GlobalStyles />
    </MainContainer>
  );
};
