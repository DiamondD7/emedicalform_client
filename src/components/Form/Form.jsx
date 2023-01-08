import React, { useState } from "react";
import { doctordata } from "../../Mock/mockdoctors";
import { API_URI } from "../../assets/js/Apiuri";

import "../../styles/formstyles.css";
const Form = () => {
  const [yesCondition, setYesCondition] = useState(false);
  const [yesAllergies, setYesAllergies] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [nationality, setNationality] = useState("");
  const [residencyStatus, setResidencyStatus] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");

  const [address, setAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [relationship, setRelationship] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const [generalPrac, setGeneralPrac] = useState("");

  const [haveConditions, setHaveConditions] = useState("");
  const [conditions, setConditions] = useState("");

  const [haveAllergies, setHaveAllergies] = useState("");
  const [allergies, setAllergies] = useState("");

  const addData = (e) => {
    e.preventDefault();
    fetch(API_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
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
        UnderlyingConditions: conditions,
        HaveAllergies: haveAllergies,
        Allergies: allergies,
        StreetAddress: address,
        Suburb: suburb,
        PostCode: postCode,
        City: city,
        PhoneNumber: phoneNumber,
      }),
    })
      .then((res) => console.log(res))
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div>
      <div>
        <h1 className="title">E-medical Form</h1>
        <form className="form-container" onSubmit={addData}>
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
                <p>Do you have any underlying conditions?</p>

                <label className="radio-label" htmlFor="yes-condition">
                  Yes
                </label>
                <input
                  name="chooseone"
                  type="radio"
                  id="yes-condition"
                  value="true"
                  onChange={(e) => setHaveConditions(e.target.value)}
                />
                <br />

                {haveConditions === "true" ? (
                  <div>
                    <textarea
                      className="text-area"
                      placeholder="if 'yes', please explain your conditions"
                      onChange={(e) => setConditions(e.target.value)}
                    ></textarea>
                    <br />
                  </div>
                ) : (
                  ""
                )}

                <label className="radio-label-no" htmlFor="no-condition">
                  No
                </label>
                <input
                  name="chooseone"
                  type="radio"
                  id="no-condition"
                  value="false"
                  onChange={(e) => setHaveConditions(e.target.value)}
                />
              </div>

              <div style={{ marginTop: "50px" }}>
                <p htmlFor="med-condition">Do you have any allergies?</p>

                <label className="radio-label" htmlFor="yes-allergies">
                  Yes
                </label>
                <input
                  name="chooseallergies"
                  type="radio"
                  id="yes-allergies"
                  value="true"
                  onChange={(e) => setHaveAllergies(e.target.value)}
                />
                <br />

                {haveAllergies === "true" ? (
                  <div>
                    <textarea
                      className="text-area"
                      placeholder="if 'yes', please list your allergies"
                      onChange={(e) => setAllergies(e.target.value)}
                    ></textarea>
                    <br />
                  </div>
                ) : (
                  ""
                )}

                <label className="radio-label-no" htmlFor="no-allergies">
                  No
                </label>
                <input
                  name="chooseallergies"
                  type="radio"
                  id="no-allergies"
                  value="false"
                  onChange={(e) => setHaveAllergies(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="btn-div">
            <button className="btn-sub">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
