import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createCommentThunk } from "../../feautres/comments/commentsThunk";

import CommentCard from "./CommentCard";

const CompanyComments = ({ comments, companyId }) => {
  const { user, isUserLoggedOut } = useSelector((store) => store.user);
  const [addingComment, setAddingComment] = useState("");
  const dispatch=useDispatch();

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!addingComment) return toast.error("Por varo rellena el comentario");
    if (!user && isUserLoggedOut === "logout") {
      return toast.warn("Debes de iniciar sesion para publicar un comentario");
    }

    dispatch(createCommentThunk({company:companyId,text:addingComment}))
  };

  return (
    <Wrapper>
      <div className="text-area-container">
        <form onSubmit={handleCommentSubmit} className="comment-area-form">
          <textarea
            name="commentUser"
            cols="30"
            rows="10"
            placeholder="Añade un comentario"
            className="text-area"
            onChange={({ target }) => setAddingComment(target.value)}
          ></textarea>
          {!user && isUserLoggedOut === "logout" ? (
            <Link to="/register" className="link">
              Inicia sesion para poder publicar un comentario
            </Link>
          ) : (
            <button className="btn" type="submit">
              Subir comentario
            </button>
          )}
        </form>
      </div>
      <h4>Comentarios de la comunidad:</h4>
      <div className="comments-container">
        {comments.length < 1
          ? "Aun no hay comentarios en esta instalacion"
          : comments.map((c) => <CommentCard key={c._id} {...c} />)}
      </div>
    </Wrapper>
  );
};

export default CompanyComments;

const Wrapper = styled.div`
  width: 100%;
  h4 {
    padding-top: 1.875rem;
  }

  .link {
    text-decoration: underline;
    color: yellow;
  }

      .text-area {
        resize: none;
        border-radius: var(--radius-helper);
        padding: 0.25rem;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
        background-color: var(--bg-grey-color);
        color: var(--headers-color);
      }

  .comments-container {
    padding-top: 1.25rem;
    div {
    }
  }
`;
