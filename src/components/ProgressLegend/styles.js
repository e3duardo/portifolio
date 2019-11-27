import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  color: #b0b0b0;
`;

export const Left = styled.div`
  width: 25%;
  padding-top: 12px;
  position: relative;
  :before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 8px;
    top: 0;
    left: 0;
    border-left: 3px solid #ccc;
    border-bottom: 3px solid #ccc;
  }
`;
export const Right = styled(Left)`
  text-align: right;
  :before {
    border-left: none;
    border-right: 3px solid #ccc;
  }
`;
