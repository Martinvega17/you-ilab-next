
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

const Project = (props) => {
    const { img, disc, src, desc, alt } = props.item;
    return (
        <Container className='project'>
            <Image src={img} alt={alt} width="400" height="300" className='img'/>
            <div className="disc">
                <h1 className='text-white description font-bold'>{desc}</h1>
                <p className='text-white demo font-bold'>{disc}
                    <a href={src} target='_blank' rel="noreferrer"> Ver mas</a>
                </p>
            </div>
        </Container>
    )
}

Project.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        disc: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
};

export default Project;

const Container = styled.div`
    height: 10rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    } 
`
