import { Container } from 'reactstrap';
import Logo from '/Users/tuliosalvatierra/mlchallenge/src/images/iphone.jpeg'
import './searchResultItem.css';
import { red } from '@material-ui/core/colors';



const SearchResultItem = () => {
    return (
        <Container className='productResult' style={{ backgroundColor: 'red'  }}>
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
    )

}

export default SearchResultItem;