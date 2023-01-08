import React from "react";
import { useState } from "react";
import happy from "../../img/happy.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { projectFirestore } from "../../firebase/config";

export const PostComments = ({ postKey, document }) => {
    const [comment, setComment] = useState("");
    const { user } = useAuthContext();

    const useCommentSubmit = async (e) => {
        e.preventDefault();

        setComment("");

        const commentToAdd = {
            comment,
            user_id_comment: user.uid,
            comment_username: user.displayName,
            comment_id: Math.random(),
        };

        await projectFirestore
            .collection("post")
            .doc(postKey)
            .update({
                message: [...document, commentToAdd],
            });
    };

    return (
        <form onSubmit={useCommentSubmit} className="comment-section-form">
            <label>
                <img src={happy} alt="profile" />
            </label>
            <label>
                <input
                    type="text"
                    className="comment-value"
                    placeholder="Napisz komentarz.."
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                />
            </label>
            <button className="add-post-btn">+</button>
        </form>
    );
};
