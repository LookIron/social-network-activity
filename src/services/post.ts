import { ResponseRequest } from "../models/reponse";
import { axiosGet } from "./axios";
import { URL_POST } from "./conf";


export  async function getAllPost(): Promise<ResponseRequest>{
    return axiosGet(`${URL_POST}/posts`).then((response: ResponseRequest) => response);
}

export  async function getAllCommentsByPostId(id: string) {
    return axiosGet(`${URL_POST}/comments?postId=${id}`).then((response: ResponseRequest) => response);
}
