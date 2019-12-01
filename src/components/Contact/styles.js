import styled from 'styled-components';

export const ImagePlace = styled.div`
  padding: 5px 5px 1px 5px;
  border: 1px solid #ccc;
  border-top: none;
  border-left: none;
  margin-right: 7px;
`;

export const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Container = styled.li`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  a {
    color: #444;
  }
  :last-of-type {
    ${ImagePlace} {
      border-bottom: none;
    }
  }
`;

export const Text = styled.span``;
