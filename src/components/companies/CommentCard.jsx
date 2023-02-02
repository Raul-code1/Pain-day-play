import moment from "moment/moment";
import styled from "styled-components";
import { BiTrash, BiEditAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { setIsEditingToTrue } from "../../feautres/comments/commentsSlice";
import { toast } from "react-toastify";
import { updateCommentThunk,deleteCommentThunk } from "../../feautres/comments/commentsThunk";

const CommentCard = ({
  text,
  userNameAuthor,
  createdAt,
  user: userComment,
  _id,
}) => {
  const date = moment(createdAt).format("DD/MM/YYYY");
  const { userProfile } = useSelector((store) => store.user);
  const { isEditingComment } = useSelector((store) => store.comments);
  const dispatch = useDispatch();
  const [comentForEdit, setComentForEdit] = useState(text || "");
 

  const handleSubmitEditComment = (e) => {
    e.preventDefault();
    if (!comentForEdit) toast.error('Por favor rellena el campo')
    dispatch(updateCommentThunk({text:comentForEdit,id:_id}));
  };

  return (
    <Wrapper className="comment-card">
      <div>
        <p className="username-date">
          {userNameAuthor} . <span>{date}</span>
        </p>
        {userProfile?._id === userComment ? (
          <span className="comment-icons">
            <div onClick={()=>dispatch(deleteCommentThunk({id:_id}))}  style={{color:'red'}} >
              <BiTrash />
            </div>
            <div onClick={() => dispatch(setIsEditingToTrue())}>
              <BiEditAlt />
            </div>
          </span>
        ) : null}
      </div>
      {!isEditingComment  ? (
        <p>{text}</p>
      ) : userProfile?._id === userComment && (
        <form onSubmit={handleSubmitEditComment} >
          <textarea
            className="text-area"
            value={comentForEdit}
            onChange={({ target }) => setComentForEdit(target.value)}
          ></textarea>
          <button className="btn" type="submit" >Actualizar comentario</button>
        </form>
      )}
    </Wrapper>
  );
};

export default CommentCard;

const Wrapper = styled.div`
  background-color: var(--bg-grey-color);
  border-radius: var(--radius-helper);
  border: 1px solid #454647;
  padding: 0.625rem;
  margin-bottom: .9375rem;
  div {
    display: flex;
    justify-content: space-between;

    .username-date {
      font-weight: 400;
      font-size: 0.875rem;
    }

    .comment-icons {
      cursor: pointer;
    }
  }

  @media (min-width: 1100px) {
    .comment-icons {
      font-size: 1.125rem;
      display: flex;
      gap: 0.625rem;
    }
  }
`;
