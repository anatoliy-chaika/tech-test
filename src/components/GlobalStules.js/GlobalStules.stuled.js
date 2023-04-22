import { Global, css } from '@emotion/react';
import 'modern-normalize';
import '@fontsource/montserrat';

export const GlobalStyles = props => (
  <Global
    {...props}
    styles={css`
      html {
        height: 100%;
      }
      body {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
      }

      main {
        flex-grow: 1;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        list-style: none;
        padding: 0;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    `}
  />
);
