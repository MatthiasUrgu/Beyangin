import s from './style.module.scss'
import SearchButton from '../SearchButton/SearchButton';

function SearchBar() {
  return (
    <div className={s.container}>
      <div>
        <input
          type="text"
          placeholder="vector,super cute and adorable earth woman"/>
      </div>
      <SearchButton />
      
    </div>
  );
}

export default SearchBar
