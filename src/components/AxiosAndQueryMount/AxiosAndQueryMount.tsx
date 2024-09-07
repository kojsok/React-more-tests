import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { getPostsAxios, queryClient } from '../../api/Api';
import { Loader } from '../Loader';
import './AxiosAndQueryMount.css'
import { Link } from 'react-router-dom';

export const AxiosAndQueryMount = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [showPosts, setShowPosts] = useState(false);

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPostsAxios,
        enabled: isButtonClicked // Запрос выполняется только после клика на кнопку
    }, queryClient);

    const handleButtonClick = () => {
        if (!isButtonClicked) {
            setIsButtonClicked(true);
        }
        setShowPosts(prevState => !prevState); // Переключаем видимость постов
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
            <button onClick={handleButtonClick}>
                {showPosts ? 'Скрыть посты' : 'Показать посты'}
            </button>


            {showPosts && data && (
                <div className="posts-container">
                    {data.slice(0, 10).map(post => (  //показываем только 10 карточек
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