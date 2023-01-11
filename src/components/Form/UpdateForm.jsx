import React, { useState } from "react";
import { API_URI } from "../../assets/js/Apiuri";
import { doctordata } from "../../Mock/mockdoctors";

const UpdateForm = (props) => {
  const [firstName, setFirstName] = useState(props.updatedItems.firstName);
  const [lastName, setLastName] = useState(props.updatedItems.lastName);
  const [sex, setSex] = useState(props.updatedItems.sex);
  const [nationality, setNationality] = useState(
    props.updatedItems.nationality
  );
  const [residencyStatus, setResidencyStatus] = useState(
    props.updatedItems.residencyStatus
  );
  const [personalEmail, setPersonalEmail] = useState(
    props.updatedItems.personalEmail
  );

  const [address, setAddress] = useState(props.updatedItems.streetAddress);
  const [suburb, setSuburb] = useState(props.updatedItems.suburb);
  const [postCode, setPostCode] = useState(props.updatedItems.postCode);
  const [city, setCity] = useState(props.updatedItems.city);
  const [phoneNumber, setPhoneNumber] = useState(
    props.updatedItems.phoneNumber
  );

  const [contactName, setContactName] = useState(
    props.updatedItems.contactName
  );
  const [contactNumber, setContactNumber] = useState(
    props.updatedItems.contactNumber
  );
  const [relationship, setRelationship] = useState(
    props.updatedItems.relationship
  );
  const [contactEmail, setContactEmail] = useState(
    props.updatedItems.emailAddress
  );

  const [generalPrac, setGeneralPrac] = useState(props.updatedItems.gpName);

  const [haveConditions, setHaveConditions] = useState(
    props.updatedItems.haveUnderlyingConditions
  );
  const [conditions, setConditions] = useState(
    props.updatedItems.underlyingConditions
  );

  const [haveAllergies, setHaveAllergies] = useState(
    props.updatedItems.haveAllergies
  );
  const [allergies, setAllergies] = useState(props.updatedItems.allergies);

  const updateData = () => {
    fetch(API_URI + "/" + props.updatedItems.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Id: props.updatedItems.id,
        FirstName: firstName,
        LastName: lastName,
        Sex: sex,
        Nationality: nationality,
        ResidencyStatus: residencyStatus,
        PersonalEmail: personalEmail,
        ContactName: contactName,
        EmailAddress: contactEmail,
        ContactNumber: contactNumber,
        Relationship: relationship,
        GpName: generalPrac,
        HaveUnderlyingConditions: haveConditions,
        underlyingConditions: conditions,
        haveAllergies: haveAllergies,
        allergies: allergies,
        StreetAddress: address,
        Suburb: suburb,
        PostCode: postCode,
        City: city,
        PhoneNumber: phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        window.location.reload();
      });
  };
  return (
    <div>
      <div>
        <h1 className="title">E-medical Form</h1>
        <form className="form-container" onSubmit={updateData}>
          <div className="form-secondary-container">
            <div>
              <div className="form-divider">
                <label className="form-label" htmlFor="fname">
                  First Name
                </label>
                <br />
                <input
                  className="form-input"
                  type="text"
                  id="fname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-divider">
                <label className="form-label" htmlFor="lname">
                  Last Name
                </label>
                <br />
                <input
                  className="form-input"
                  type="text"
                  id="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-divider">
                <label className="form-label" htmlFor="gender">
                  Sex
                </label>
                <br />
                <select
                  className="form-input genderselection"
                  id="gender"
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                >
                  <option></option>
                  <option>M</option>
                  <option>F</option>
                  <option>Prefer not to say</option>
                </select>
              </div>

              <div className="form-divider">
                <label className="form-label" htmlFor="nationality">
                  Nationality
                </label>
                <br />
                <input
                  className="form-input"
                  type="text"
                  id="nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                />
              </div>
              <div className="form-divider">
                <label className="form-label" htmlFor="rstatus">
                  Residency Status
                </label>
                <br />
                <select
                  className="form-input"
                  id="rstatus"
                  value={residencyStatus}
                  onChange={(e) => setResidencyStatus(e.target.value)}
                >
                  <option></option>
                  <option>Work Visa</option>
                  <option>Permanent Resident</option>
                  <option>Citizen</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-divider">
                <label className="form-label" htmlFor="personalemail">
                  Personal Email
                </label>
                <br />
                <input
                  className="form-input personalemail"
                  type="text"
                  id="personalemail"
                  value={personalEmail}
                  onChange={(e) => setPersonalEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="location-divider">
              <div className="form-divider">
                <label className="form-label" htmlFor="address">
                  Street Address
                </label>
                <br />
                <input
                  className="form-input address"
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-divider">
                <label className="form-label" htmlFor="suburb">
                  Suburb
                </label>
                <br />
                <input
                  className="form-input"
                  type="text"
                  id="suburb"
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                />
              </div>
              <div className="postal-city-divider">
                <div className="form-divider">
                  <label className="form-label postcode" htmlFor="postcode">
                    Post Code
                  </label>
                  <br />
                  <input
                    className="form-input postcode"
                    type="text"
                    id="postcode"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                  />
                </div>

                <div className="form-divider">
                  <label className="form-label city" htmlFor="city">
                    City
                  </label>
                  <br />
                  <input
                    className="form-input city"
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-divider">
                <label className="form-label" htmlFor="mobilenum">
                  Mobile Number
                </label>
                <br />
                <input
                  className="form-input"
                  type="text"
                  id="mobilenum"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="emergency-contact-divider">
              <div className="form-divider">
                <label htmlFor="eName" className="form-label">
                  Contact Name
                </label>
                <br />
                <input
                  className="form-input emergencyname"
                  type="text"
                  id="eName"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>

              <div className="divide-flex">
                <div className="form-divider">
                  <label htmlFor="eNum" className="form-label">
                    Contact Number
                  </label>
                  <br />
                  <input
                    className="form-input emergencynumber"
                    type="text"
                    id="eNum"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>

                <div className="form-divider">
                  <label
                    htmlFor="erelation"
                    className="form-label emergencyrelationship"
                  >
                    Relationship
                  </label>
                  <br />
                  <input
                    className="form-input emergencyrelationship"
                    type="text"
                    id="erelation"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-divider">
                <label htmlFor="e-email" className="form-label">
                  Email Address
                </label>
                <br />
                <input
                  className="form-input emergencyname"
                  type="text"
                  id="e-email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="GP-divider">
              <div className="form-divider">
                <label htmlFor="gpName" className="form-label">
                  General Practitioner's Name
                </label>
                <br />
                <select
                  className="form-input gpselection"
                  id="gpName"
                  value={generalPrac}
                  onChange={(e) => setGeneralPrac(e.target.value)}
                >
                  <option>None</option>
                  {doctordata.map((items) => (
                    <option key={items.id}>
                      Dr. {items.first_name} {items.last_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-third-container">
            <div>
              <div>
                <br />
                <p>Do you have any underlying conditions?</p>
                <p>{haveConditions === "true" ? "Yes" : "No"}</p>
                {haveConditions === "true" ? (
                  <div>
                    <textarea
                      className="text-area"
                      placeholder="if 'yes', please explain your conditions"
                      value={conditions}
                      onChange={(e) => setConditions(e.target.value)}
                    ></textarea>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div style={{ marginTop: "50px" }}>
                <p htmlFor="med-condition">Do you have any allergies?</p>

                <p>{haveAllergies === "true" ? "Yes" : "No"}</p>

                {haveAllergies === "true" ? (
                  <div>
                    <textarea
                      className="text-area"
                      placeholder="if 'yes', please list your allergies"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                    ></textarea>
                    <br />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div>
            <button className="btn-sub btn-danger">
              <a href="/">Back</a>
            </button>
            <button className="btn-sub btn-update">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
