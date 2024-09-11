import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { getPostsAxios, queryClient } from '../../api/Api';
import { Loader } from '../Loader';
import './AxiosAndQueryMount.css'
import { Link, useSearchParams } from 'react-router-dom';

export const AxiosAndQueryMount = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [showPosts, setShowPosts] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState('');

    const searchQuery = searchParams.get('query') || '';

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPostsAxios,
        enabled: isButtonClicked // Запрос выполняется только после клика на кнопку
    }, queryClient);

    const filteredCards = data && data.filter((card) => //data && data.filter((card)
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("my filter Array", filteredCards);

    const handleButtonClick = () => {
        if (!isButtonClicked) {
            setIsButtonClicked(true);
        }
        setShowPosts(prevState => !prevState); // Переключаем видимость постов
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams({ query: searchInput });
    };

    if (isPending) {
        return <div>
            {/* <button onClick={() => setIsButtonClicked(true)}>
                Показать посты
            </button> */}
            <button onClick={handleButtonClick}>
                {showPosts ? 'Скрыть посты' : 'Показать посты'}
            </button>
            <Loader classList={['loader-center']} />
        </div>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }


    return (
        
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearchChange}
                    placeholder="Search cards..."
                />
                <button type="submit">Search</button>
            </form>

            <button onClick={handleButtonClick}>
                {showPosts ? 'Скрыть посты' : 'Показать посты'}
            </button>


            {showPosts && data && (
                <div className="posts-container">
                    {data.slice(0, 10).map(post => (  //показываем только 10 карточек  - data.slice
                        // <Link key={post.id} className="post-card">
                        <Link to={`/posts/${post.id}`} key={post.id} className="post-card">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AxiosAndQueryMount;