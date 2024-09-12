import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../Loader';
import { fetchPostById, queryClient } from '../../api/Api';
import { LoaderAwesome } from '../LoaderAwesome/LoaderAwesome';

// const fetchPostById = async (id: string) => {
//     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     return data;
// };

export const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { isPending, isError, data, error} = useQuery({
        queryKey: ['post', id],
        queryFn: async () => await fetchPostById(id),
    }, 
    queryClient);

    // console.log(data);
  

    if (isPending) {
        return <LoaderAwesome />
        // <Loader classList={['loader-center']} />;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <div className="post-detail">
            {/* <h2>{data.title}</h2>
            <p>{data.body}</p> */}
            {data ? (
                <>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                </>
            ) : (
                <span>No data available</span>
            )}
            <button onClick={() => navigate('/')}>Назад</button>
        </div>
    );
};

export default PostDetail;
