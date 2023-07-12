import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 6px;
`;

export const Background = styled.div`
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  background: #ddd;
`;

export const Foreground = styled.div<{tick: number}>`
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;
  background: #ff6633;
  height: 25px;
  width: ${(props) => `${props.tick}%`};
`;

export const Text = styled.div`
  position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  @media print {
    color: #555;
  }
`;
