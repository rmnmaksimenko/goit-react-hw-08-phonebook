import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  max-width: 1680px;
  margin-left: auto;
  margin-right: auto;
`;

export const Navigation = styled.nav`
  margin-bottom: 16px;
  border-bottom: 1px solid #dedede;
`;

export const Link = styled(NavLink)`
  margin: 10px;
  color: #fff;
  &.active {
    color: red;
  }
`;
