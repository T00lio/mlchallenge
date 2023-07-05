import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../searchBar/SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input type='text' className='search-input' placeholder='Busqueda...'/>
            <button className='search-button'>
                <i><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
            </button>
        </div>
    );
};

export default SearchBar;