import { z } from "zod"
import { QueryClient } from '@tanstack/react-query'
import axios from "axios";


//инициализируем queryClient
export const queryClient = new QueryClient();

//создаем схему ЗОД
const PostSchema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
})

// создаем схему для массива постов
const PostsArraySchema = z.array(PostSchema);
export type TypePostSchema = z.infer<typeof PostSchema>;

// Теперь схема PostsArraySchema описывает массив объектов,
// каждый из которых должен соответствовать схеме PostSchema.
//  Функция будет возвращать массив постов, и данные будут валидированы с помощью Zod.

//функция валидации ответа от сервера
// Здесь validateResponse проверяет успешность ответа от API,
// и если запрос не удался, вызывается исключение с текстом ошибки.
export const validateResponse = async (response: Response): Promise<Response> => {
    if (!response.ok) {
        throw new Error(await response.text())
    }
    return response;
}

export const getPosts = (): Promise<TypePostSchema[]> => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(validateResponse)
        .then(response => response.json())
        .then((data) => PostsArraySchema.parse(data)) //валидируем полученные данные с помощью созданой выше схемы ZOD
}

export const getPostsAxios = (): Promise<TypePostSchema[]> => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => PostsArraySchema.parse(response.data))
}

