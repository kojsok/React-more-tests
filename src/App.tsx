import './App.css'
import { FC, useEffect, useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@tanstack/react-query";
import { getPostsAxios, TypePostSchema } from './api/Api';


function App() {
  const [database, setDatabase] = useState<TypePostSchema[]>([]);

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

  return (
    <>
      <div>
        <h1>More Test</h1>
        <div>
          {database.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              {/* <p>{post.body}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App



