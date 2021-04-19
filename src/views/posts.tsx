import { useEffect, useState } from "react";
import PostComponent from "../components/post";
import { PostModel } from "../models/post";
import { ResponseRequest } from "../models/reponse";
import { getAllPost } from "../services/post";


const Posts =() => {
    const [post, setPost] = useState<Array<PostModel>>([])

    useEffect(() => {
        loadPost();
    },[])
    
    const loadPost = async () => {
        const respose: ResponseRequest = await getAllPost();
        console.log(respose)
        if(respose.data){
            console.log(respose.data)
            setPost(respose.data);
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="center-align">
                    <h2>Post List</h2>
                </div>
                {
                    post?.length > 0 ?
                    post.map((postItem: PostModel) =>
                        <PostComponent key={postItem.id} post={postItem}></PostComponent>
                    ) 
                    :
                    <div>
                        <div className="center-align">
                            <h5>Sorry, there're not posts</h5>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Posts;