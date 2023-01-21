import styled from "styled-components"

import videoBg from '../../assets/pdpvideo-fondo.mp4'
import {marketingPhrases} from '../../utils/constants'

const FourthHomePageSection = () => {
  return (
    <Wrapper>
        <div className="video-container">
            <video autoPlay loop muted >
                <source src={videoBg} type='video/mp4' />
            </video>
        </div>
        <div className="fourth-section-content">
            {marketingPhrases.map(({id,text},i)=>{
                return <div className="phrases" key={id} >
                    <p>{text}</p>
                </div>
            })}
        </div>
    </Wrapper>
  )
}

export default FourthHomePageSection

const Wrapper =styled.section`
    position: relative;

    .video-container{  
        display: none;
        position: relative;
        video{
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            object-fit: cover;
            height: 50vh;
        }
    }

    .fourth-section-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
        .phrases{
            background-color: var(--bg-grey-color);
            color: white;
            width: 70%;
            
            padding: 1.25rem;
            font-weight: bold;
            letter-spacing: var(--letter-spacing);
            border-radius: var(--radius-helper);
        }
    }


    @media  ( min-width:800px ) {
        .video-container{
            display: flex;
        }

            .fourth-section-content{
                flex-direction: row;
                justify-content: center;
                padding-top: 150px;
                .phrases{
                    background-color: var(--color-helper-blue);
                    width: 25%;
                    text-align: center;
                    font-size: 18px;
                    padding:  1.875rem 1.25rem;
                }
            }
    }


`