import styled from 'styled-components';

const imageSize = 150;

export const Container = styled.div`
  background: #fdfdfd;
  max-width: 1200px;
  height: auto;
  margin: ${imageSize / 2}px auto 20px;
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26);
  @media print {
    box-shadow: none;
  }
`;

export const Header = styled.div`
  position: relative;
  padding: ${imageSize / 2 + 10}px 10px 20px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 3px double #efefef;
  h1,
  h2 {
    color: #444;
    font-weight: 700;
    font-size: 36px;
  }
  h2 {
    font-size: 22px;
  }
  a {
    color: #444;
    font-style: italic;
    font-size: 0.8rem;
  }

  @media print {
    padding-top: 10px;
  }
`;

export const Highlight = styled.span`
  color: #ff6633;
  @media print {
    font-size: 3rem;
    display: block;
    width: 15rem;
    line-height: 3rem;
    text-align: left;
    margin-left: 100px;
  }
`;

export const NoPrint = styled.span`
  @media print {
    display: none;
  }
`;

export const ImagePlace = styled.div`
  border-radius: 50%;
  position: absolute;
  width: ${imageSize}px;
  height: ${imageSize}px;
  top: -${imageSize / 2 + 15}px;
  left: 50%;
  transform: translateX(-50%);
  background: #929292;
  @media print {
    width: 100px;
    height: 100px;
    top: 5px;
    left: 50px;
    background: no-repeat;
  }
`;
export const Image = styled.img`
  border-radius: 50%;
  margin: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  background: #fff;
  background: linear-gradient(
    90deg,
    rgba(157, 157, 157, 1) 0%,
    rgba(146, 146, 146, 1) 100%
  );
  /* box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26); */
`;
