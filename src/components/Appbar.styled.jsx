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
  margin-top: 0;
  margin-bottom: 0;
`;

export const Navigation = styled.nav`
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 16px 0px;
  ${'' /* border-bottom: 1px solid #dedede; */}
  background-color: #222222ea;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
  border-bottom: 1px solid #fff;
`;

export const Header = styled.header`
  margin-bottom: 60px;
`;

export const Link = styled(NavLink)`
  margin: 10px;
  color: #fff;
  &.active {
    color: red;
  }
`;
