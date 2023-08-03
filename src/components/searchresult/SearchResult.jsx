import { Container } from 'reactstrap';
import '../searchresult/searchresult.css';
import { useSearchContext } from '../../context/searchContext';
import { Link } from 'react-router-dom';


const SearchResult = () => {
  const { queryResult } = useSearchContext(); 
  console.log(queryResult);
  return (
    
      <Container className='sr'>
        {queryResult?.length > 0 ? (
           queryResult.map((result) =>(   
            <Link to={`/item/${result.id}`}>
            <div className="fi1">
              <img src={result.thumnail} height={100} width={100} alt="Search" />
            </div>
            <div className="fi2">
              <h1>{result.price}</h1>
              <p> {result.title} </p>
            </div>
            <div className="fi3">
              <h1>{result.location}</h1>
            </div>
          </Link>
            )
              )
            ) : (
              <h1>Type in search box to get result ...</h1>
            )}     
      </Container>
     )
};

export default SearchResult;