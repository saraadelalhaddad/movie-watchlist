import styled from "styled-components";

export const MovieWrapper = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;

    // &.candy-price {
    //   color: ${(props) => props.theme.pink};
    }
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
