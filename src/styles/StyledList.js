import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.2em;

  padding-top: 5em;
  padding-bottom: 3em;

  overflow-y: auto;

  h3 {
    font-weight: 400;
  }
`;

export default StyledList;
