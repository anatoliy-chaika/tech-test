import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
`;

export const Header = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const UlNav = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Navigation = styled(NavLink)`
  text-decoration: none;
  color: #373737;
  &.active {
    color: orange;
  }
`;

export const FooterStyled = styled.footer`
  border-top: 1px solid black;
  padding-top: 10px;
  padding-bottom: 10px;
`;
