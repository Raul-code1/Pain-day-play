import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import styled from "styled-components"


import InputComponent from "../layout/InputComponent"
import { updateUserThunk,getSingleUserThunk } from "../../feautres/user/userThunk"

const UserProfileForm = () => {
  const dispatch=useDispatch();
  const {userProfile }=useSelector((store)=>store.user)

  const [tempUser, setTempUser] = useState({
    name:userProfile?.name || '',
    username:userProfile?.username || '',
    email:userProfile?.email || '',
  })

  const handleChange=({target})=>{
    let name=target.name
    let value=target.value
    setTempUser({...tempUser,[name]:value})
  }

  const handleProfileSubmit=(e)=>{
    e.preventDefault();
    const {name ,username ,email}=tempUser
    if (!name || !username || !email) return toast.error('Por favor rellena todos los campos')

    dispatch(updateUserThunk({name,username,email}));
  }

  return (
    <Wrapper>
      <p>Actualiza tu informacion cuando lo desees</p>
      <form onSubmit={handleProfileSubmit} className="profile-form">
        <InputComponent
          labelText='Nombre'
          type='text'
          name='name'
          value={tempUser.name}
          onChange={handleChange}
          />
        <InputComponent
          labelText='Nombre de usuario'
          type='text'
          name='username'
          value={tempUser.username}
          onChange={handleChange}
        />
        <InputComponent
          type='email'
          name='email'
          value={tempUser.email}
          onChange={handleChange}
        />
        <button type="submit" className="btn" >Actualizar informacion</button>
      </form>
    </Wrapper>
  )
}

export default UserProfileForm



const Wrapper= styled.div`
  p{
    font-size: 18px;
  }
  
  .profile-form{
    .btn{
      margin-top: .9375rem;
    }
  }
  
  @media  ( min-width:800px ) {
    width: 50%;
    
  } 
  @media  ( min-width:1100px ) {
    p{
      font-size: 1.25rem;
    }
    .profile-form{
        .form-input-container,.form-input-container input{
          font-size: 20px;
        }
    }
    
  } 
  

`