import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { uploadCompanyImage } from "../../feautres/userAdmin/userAdminThunk";

const UploadImageForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const { imagePath } = useSelector((store) => store.userAdmin);
  const dispatch = useDispatch();

  const handleUploadImageChange = (e) => {
    const image = e.target.files[0];
    setImageFile(image);
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    if (!imageFile) return toast.error("Por selecciona un archivo");
    dispatch(uploadCompanyImage(imageFile));
  };

  return (
    <Wrapper>
      <form onSubmit={handleImageSubmit} className="uploadImageForm">
        <h4>Subir imagen para la instalacion</h4>
        <input
          type="file"
          accept="image/*"
          onChange={handleUploadImageChange}
        />
        <button className="btn"> Submit imagen </button>
      </form>
      <div>
        <p>Ruta de la imagen: {imagePath} </p>
      </div>
    </Wrapper>
  );
};

export default UploadImageForm;

const Wrapper = styled.div`
  h4 {
    color: red;
  }
`;
