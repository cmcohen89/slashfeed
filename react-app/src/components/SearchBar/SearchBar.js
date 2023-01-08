import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchQuery } from "../../store/search";
import './SearchBar.css'

const SearchBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const results = useSelector(state => Object.values(state.searchResults))
    const [query, setQuery] = useState('');

    const handleChange = async () => {
        await dispatch(searchQuery(query));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        history.push(`/profile/${results[0].id}`)
        setQuery('');
    }

    useEffect(() => {
        handleChange();
    }, [query])

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input
                    className='search-input'
                    required
                    name='title-input'
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    placeholder="Search for a user"
                    type='text'
                    autoComplete="off"
                    onBlur={e => setQuery('')}
                />
            </form>
            {results && query &&
                <div className="results-container">
                    {results.map(result => (
                        <div className="one-result" onClick={() => {
                            history.push(`/profile/${result.id}`);
                            setQuery('');
                        }}>
                            <h2 className="one-result-user">
                                <span className='profile-pic-link one-post-profile-pic' to={`/profile/${result.id}`}>
                                    <img className='one-post-profile-pic' src={result.profileImgUrl} alt='' />
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className='result-name' to={`/profile/${result.id}`}>
                                    {result.username}
                                </span>
                            </h2>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default SearchBar;
