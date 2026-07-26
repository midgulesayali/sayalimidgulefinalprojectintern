import "./PersonalInfoForm.css";

function PersonalInfoForm({ resumeData, setResumeData }) {

  const handleChange = (e) => {

    setResumeData({
      ...resumeData,

      personal: {

        ...resumeData.personal,

        [e.target.name]: e.target.value

      }

    });

  };

  return (

<div className="section">

<h2>Personal Information</h2>

<input
type="text"
placeholder="Full Name"
name="fullName"
value={resumeData.personal.fullName}
onChange={handleChange}
/>

<input
type="email"
placeholder="Email"
name="email"
value={resumeData.personal.email}
onChange={handleChange}
/>

<input
type="text"
placeholder="Phone"
name="phone"
value={resumeData.personal.phone}
onChange={handleChange}
/>

<input
type="text"
placeholder="Address"
name="address"
value={resumeData.personal.address}
onChange={handleChange}
/>

<textarea
rows="5"
placeholder="Professional Summary"
name="summary"
value={resumeData.personal.summary}
onChange={handleChange}
/>

</div>

  );

}

export default PersonalInfoForm;