import { Link } from "react-router-dom"
import styled from "styled-components"


const Hero = () => {
  return (
    <BgHeroContainer className="bg-hero text-center" >
        {/* //todo:Fix the hero title */}
        <h1>Con PainDayPlay</h1>
        <p>Economiza en tus instalaciones deportivas con nuestro comparador de precios.</p>
        <p>Empieza a comparar ya</p>
        <Link to='/companies' className="btn" >Compara Precios</Link>
    </BgHeroContainer>
  )
}

export default Hero

const BgHeroContainer=styled.section`
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    h1{
        font-family: var(--geneals-fonts);
        font-size: 3rem;
    }
    
    p{
        color: white;
        font-size: 2rem;
    }
    .btn{
        opacity: 1;
    }
    
    @media  ( min-width:800px ) {
        h1{
            font-size: 4rem;
        }
        
        p{
            font-size: 2.2rem;

        }
    }

`