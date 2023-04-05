import React, { useState } from 'react';
import StyledDiv from './Billing-styles';

const countries = ['Select Country', 'USA', 'Canada', 'Mexico'];
const provinces = [
  'Select Province',
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
];

function BillingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    townCity: '',
    province: '',
    zipcode: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledDiv>
      <div className="billing-info">
        <h2>Billing Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="lastName">
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="companyName">
              Company Name
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="form-control"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="country">
              Country
              <select
                name="country"
                id="country"
                className="form-control"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="streetAddress">
              Street Address
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                className="form-control"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="townCity">
                Town/City
                <input
                  type="text"
                  name="townCity"
                  id="townCity"
                  className="form-control"
                  value={formData.townCity}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="province">
                Province
                <select
                  name="province"
                  id="province"
                  className="form-control"
                  value={formData.province}
                  onChange={handleInputChange}
                  required
                >
                  {provinces.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="zipcode">
                Zip/Postal Code
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  className="form-control"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="phone">
                Phone
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </StyledDiv>
  );
}

export default BillingForm;
