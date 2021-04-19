import React from 'react'
import { Link } from "react-router-dom";
import { PostModel } from "../models/post";

type Props = {
    post: PostModel
}
const PostComponent: React.FC<Props> = ({post}: Props) => {
  
    const standarizeText = ( text: string, size: number) =>{
        return text.length > size ? text.substring(0,size-1) : text;
    }

    return (
        <div className="col s10 m4">
            <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-content">
                <span className="card-title">{standarizeText(post.title, 15)}...</span>
                <p>{standarizeText(post.body, 20)}...</p>
                </div>
                <div className="card-action">
                    <Link to={{
                        pathname: "/post",
                        state: { post }
                    }}> 
                        Ver post
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default PostComponent;