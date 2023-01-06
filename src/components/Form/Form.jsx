import React, { useState } from "react";

import "../../styles/formstyles.css";
const Form = () => {
  const [yesCondition, setYesCondition] = useState(false);
  const [yesAllergies, setYesAllergies] = useState(false);

  return (
    <div>
      <div>
        <h1 className="title">E-medical Form</h1>
        <form className="form-container">
          <div className="form-secondary-container">
            <div>
              <div className="form-divider">
                <label className="form-label" htmlFor="fname">
                  First Name
                </label>
                <br />
                <input className="form-input" type="text" id="fname" />
              </div>
              <div className="form-divider">
                <label className="form-label" htmlFor="lname">
                  Last Name
                </label>
                <br />
                <input className="form-input" type="text" id="lname" />
              </div>

              <div className="form-divider">
                <label className="form-label" htmlFor="gender">
                  Sex
                </label>
                <br />
                <select className="form-input genderselection" id="gender">
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
                <input className="form-input" type="text" id="nationality" />
              </div>
              <div className="form-divider">
                <label className="form-label" htmlFor="rstatus">
                  Residency Status
                </label>
                <br />
                <select className="form-input" id="rstatus">
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
                />
              </div>
              <div className="form-divider">
                <label className="form-label" htmlFor="suburb">
                  Suburb
                </label>
                <br />
                <input className="form-input" type="text" id="suburb" />
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
                  />
                </div>

                <div className="form-divider">
                  <label className="form-label city" htmlFor="city">
                    City
                  </label>
                  <br />
                  <input className="form-input city" type="text" id="city" />
                </div>
              </div>
              <div className="form-divider">
                <label className="form-label" htmlFor="suburb">
                  Height(cm)
                </label>
                <br />
                <input className="form-input" type="text" id="suburb" />
              </div>

              <div className="form-divider">
                <label className="form-label" htmlFor="suburb">
                  Weight(kg)
                </label>
                <br />
                <input className="form-input" type="text" id="suburb" />
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
                />
              </div>
            </div>

            <div className="GP-divider">
              <div className="form-divider">
                <label htmlFor="eName" className="form-label">
                  General Practitioner's Name
                </label>
                <br />
                <select className="form-input gpselection">
                  <option></option>
                  <option>Dr. Amiri Kah</option>
                  <option>Dr. Phil Lipens</option>
                  <option>Dr. Sawt Koria</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-third-container">
            <div>
              <div>
                <p htmlFor="med-condition">
                  Do you have any underlying conditions?
                </p>

                <label className="radio-label" htmlFor="yes-condition">
                  Yes
                </label>
                <input
                  name="chooseone"
                  type="radio"
                  id="yes-condition"
                  value="true"
                  onChange={() => setYesCondition(true)}
                />
                <br />

                {yesCondition === true ? (
                  <div>
                    <textarea
                      className="text-area"
                      placeholder="if 'yes', please explain your conditions"
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
                  onChange={() => setYesCondition(false)}
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
                  onChange={() => setYesAllergies(true)}
                />
                <br />

                {yesAllergies === true ? (
                  <div>
                    <textarea
                      className="text-area"
                      placeholder="if 'yes', please list your allergies"
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
                  onChange={() => setYesAllergies(false)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
