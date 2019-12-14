import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;
export const Main = styled.div`
  flex: 1;
`;
export const Aside = styled.div`
  width: 30%;
  margin-left: 40px;
  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
  }
`;
