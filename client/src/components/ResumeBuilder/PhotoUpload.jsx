import "./PhotoUpload.css";

function PhotoUpload({ resumeData, setResumeData }) {

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      setResumeData({
        ...resumeData,
        photo: reader.result
      });

    };

    reader.readAsDataURL(file);

  };

  return (

    <div className="photo-section">

      <h2>Profile Photo</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      {resumeData.photo && (

        <img
          src={resumeData.photo}
          alt="profile"
          className="profile-image"
        />

      )}

    </div>

  );

}

export default PhotoUpload;