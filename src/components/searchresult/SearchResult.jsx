import { Container } from 'reactstrap';
import '../searchresult/searchresult.css';
import SearchResultItem from '../searchResultItem/searchResultItem';

const SearchResult = () => {
  return (
  <div className='sr'>
    <Container>
      <SearchResultItem />
    </Container>
  </div>
   
  )
};

export default SearchResult;