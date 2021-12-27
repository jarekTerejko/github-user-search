import styled from "styled-components";

export const ContainerEl = styled.div`
  max-width: 73rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0 5rem;
  }
  
  @media screen and (max-width: 550px) {
    padding: 0 1.5rem;
  }
`;
