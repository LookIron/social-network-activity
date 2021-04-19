import { CommentModel } from "../models/comment";
import '../assets/css/components/comments.css'
type Props = {
    comment: CommentModel
}
const CommentComponent =({comment}: Props) => {
    return (
        <div className="row">
            <div className="comment-container">
                    <div className="row">
                        <div className="left-align">
                            <h5>{comment.name}</h5> 
                            <span>{comment.email}</span> 
                            <p>{comment.body}</p> 
                        </div>
                    </div>
            </div>
        </div>
        
    );
    // return (
    //     <div className="container ">
    //     <div className="col s12 m5">
    //       <div className="card-panel ">
    //         <span >{comment.body}. </span>
    //       </div>
    //     </div>
    //   </div>
    // );
}

export default CommentComponent;