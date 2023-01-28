import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getSingleUserThunk } from "../feautres/user/userThunk";
import { UserPasswordForm, UserProfileForm } from "../components/user";
import { Loading } from "../components/layout";

const ProfileUserPage = () => {
  const dispatch = useDispatch();
  const { user,isLoading, userProfile } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getSingleUserThunk());
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper className="section">
      <h5>
        Tu perfil😎: <span>{userProfile?.name}</span>
      </h5>
      <div className="forms-profile-user-container" >
        <UserProfileForm />
        <UserPasswordForm />
      </div>
    </Wrapper>
  );
};

export default ProfileUserPage;

const Wrapper = styled.div`
  min-height: 100vh;
  h5 {
    font-size: 30px;
    margin-bottom: 1.25rem;
    span {
      color: var(--btn-bg-color);
    }
  }

  @media (min-width: 800px) {
    h5 {
      text-align: center;
    }

    .forms-profile-user-container{
      display: flex;
    }

  }
  @media (min-width: 1100px) {
    h5 {
      font-size: 2.4375rem;
    }
  }
`;
