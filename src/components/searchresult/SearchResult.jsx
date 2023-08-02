import { Container } from 'reactstrap';
import '../searchresult/searchresult.css';
import SearchResultItem from '../searchResultItem/searchResultItem';
import { useSearchContext } from '../../context/searchContext';
import { Link } from 'react-router-dom';



const SearchResult = () => {
  const { queryResult } = useSearchContext(); 
  console.log(queryResult);


  return (
    <Link to='/item/:id'>
      <Container className='sr' to='/item/:id'>
        {queryResult?.length > 0 ? (
          
          queryResult.map((result) =>(
            
                <SearchResultItem
                key={result.id} 
                imageUrl={result.thumbnail} 
                price={result.price} 
                title={result.title} 
                location={result.address.state_name}
                />)
              )
            ) : (
              <h1>Type in search box to get result ...</h1>
            )}     


      </Container>
    </Link>
   
  )
};

export default SearchResult;