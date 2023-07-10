import { Container } from 'reactstrap';
import Logo from '/Users/tuliosalvatierra/mlchallenge/src/images/iphone.jpeg'
import './searchResultItem.css';




const SearchResultItem = () => {
    return (
        <Container className='productResult'>
            <div className='fi1'>    
                <img src={Logo} height={100} width={100} alt="Search"/>
            </div>
            <div className='fi2'>
                 <h1>
                Precio
                </h1>
                <p> Descripcion de producto </p>
            </div>
            <div className='fi3'>           
                <h1>
                    Ubicación
                </h1>
            </div>
        </Container>
    );
};

export default SearchResultItem;