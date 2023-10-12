
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import './ProjectsStyles.css'

const Projects = () => {
    return (
        <Container id='project'>

            <h1 className='green recent mt-10 '>Forjando un Futuro Prometedor</h1>
            <p className='mb-6'>El You I Lab abre las puertas a la creatividad juvenil para abordar problemas sociales</p>

            <Slide>
                <SliderComp />
            </Slide>
        </Container>
    )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    .recent{
        font-size: 3.6rem;
        @media(max-width : 480px){
            font-size: 2.4rem;
        }
    }

    .des{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``
