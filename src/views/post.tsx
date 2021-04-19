import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommentComponent from "../components/comment";
import { CommentModel } from "../models/comment";
import { PostModel } from "../models/post";
import { ResponseRequest } from "../models/reponse";
import { getAllCommentsByPostId } from "../services/post";

type Props = {
    comments: CommentModel
}

const Post =() => {
    const location = useLocation<any>();
    const [comments, setComments] = useState<Array<CommentModel>>([])
    const [post, setPost] = useState<PostModel| undefined>()

    console.log(location);
    useEffect(() => {
        if(!post){
            setPost(location.state.post)
            loadComments(location.state.post.id);
        }

    }, [comments,location])
    const loadComments = async (id: string) => {
        const respose: ResponseRequest = await getAllCommentsByPostId(id);
        if(respose.data){
            setComments(respose.data);
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="center-align">
                    <h4>{post?.title}</h4>
                </div>
                <div className="left-align">
                    <p>{post?.body}</p>
                </div>
                <div className="left-align">
                    <h6>Comments</h6>
                </div>
                {
                    comments?.length > 0 ?
                    comments.map((commentItem: CommentModel) =>
                        <CommentComponent key={commentItem.id} comment={commentItem}></CommentComponent>
                    ) 
                    :
                    <div>
                        <div className="center-align">
                            <h5>There're not comments</h5>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Post;