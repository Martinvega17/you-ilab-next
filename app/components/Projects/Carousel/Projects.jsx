
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import './ProjectsStyles.css'

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1 className='green recent'>Proyectos <span className="text-white">Recientes</span></h1>
            <p className='text-white des'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
            voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
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
