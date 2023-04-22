import styled from '@emotion/styled';

export const ButtonMore = styled.button`
  display: block;
  cursor: pointer;
  min-width: 196px;
  min-height: 50px;
  padding: 14px 28px 14px 28px;
  border: none;
  border-radius: 10px;
  margin-top: 26px;
  margin-bottom: 26px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  text-transform: uppercase;
`;

export const UlOfCards = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
`;
