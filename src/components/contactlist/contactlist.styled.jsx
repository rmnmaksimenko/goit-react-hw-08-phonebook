import styled from '@emotion/styled';

export const DeleteBtn = styled.button`
  margin-left: 15px;
  border: 1px solid #262626;
  border-radius: 3px;
  padding: 1px 6px;
  &:hover {
    background-color: #678;
    color: #fff;
  }
  &:active {
    background-color: #456;
    color: #fff;
  }
`;

export const ListEl = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
