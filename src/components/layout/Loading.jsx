import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <Wrapper>
      <div className="" >
        <AiOutlineLoading3Quarters className="loading" />
      </div>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 3.75rem;
  div{
    padding-top: 3.125rem;
  }
`;
