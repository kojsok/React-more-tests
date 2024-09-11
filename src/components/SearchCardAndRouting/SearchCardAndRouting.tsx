import { useQuery } from '@tanstack/react-query';
import { getPostsAxios, queryClient } from '../../api/Api';
import { Link, useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader';
import "./SearchCardAndRouting.css"
import { ChangeEvent } from 'react';

const SearchCardAndRouting = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    //получаем обьект {потом на него посмотрим} из поисковой строки
    const searchQuery = searchParams.get('posts') || '';
    
    //получаем данные с сервера
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPostsAxios,
        // enabled: isButtonClicked // Запрос выполняется только после клика на кнопку
    }, queryClient);

    console.log(searchParams.get('posts'));

    //фильтруем массив постов по строке из поисковой строки браузера searchQuery
    const filteredCards = data && data.filter((card) => //data && data.filter((card)
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

//добавляем обработчик при вводе в поисковую строку
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParams({ posts: e.target.value });
    };
   

    if (isPending) {
        return <div>
            <Loader classList={['loader-center']} />
        </div>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
             <input
                className="search-input"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange} //добавляем обработчик при вводе в инпут
                placeholder="Search cards..."
            />
            <div className="posts-container">
                    {filteredCards && filteredCards.map(post => (  
                        <Link to={`/posts/${post.id}`} key={post.id} className="post-card">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </Link>
                    ))}
                </div>
        </div>
    );
};

export { SearchCardAndRouting };