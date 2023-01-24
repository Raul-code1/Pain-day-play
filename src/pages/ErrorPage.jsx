import { Link } from "react-router-dom"
import styled from "styled-components"

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>404 </h1>
      <h2>Not found</h2>
      <p>Something went wrong 🙁</p>
      <Link to='/' className="btn" >Back Home</Link>
    </Wrapper>
  )
}

export default ErrorPage


const Wrapper = styled.section`
  height: calc(100vh - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1{
    font-size: 4.375rem;
  }
  h2{
    font-size: 3.125rem;
  }
  
  p{
    font-size: 1.25rem;
  }
  
  @media  ( min-width:1100px ) {
    h1{
      font-size: 5rem;
    }
    h2{
      font-size: 4.375rem;
    }
  }

`