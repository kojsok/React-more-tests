import { useEffect, useState } from 'react';
import { getPostsAxios, queryClient, TypePostSchema } from '../../api/Api';
import './AxiosAndRouting.css'
import { useQuery } from '@tanstack/react-query'

export function AxiosAndRouting() {
    const [database, setDatabase] = useState<TypePostSchema[]>([]);

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['posts'],
        queryFn: getPostsAxios,
    }, queryClient);
    console.log(data);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts = await getPostsAxios();
                setDatabase(posts); // установка данных после получения и валидации
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, []);

    if (isPending) {
        return <span>Loading...</span>
    }
    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            <h1>More Test</h1>
            <div>
                {data.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        {/* <p>{post.body}</p> */}
                    </div>
                ))}
            </div>
        </div>
    )
}


export default AxiosAndRouting