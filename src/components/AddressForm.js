import { useState } from "react";
import { produce } from "immer";

const AddressForm = ({ userAddresses = [], setEmployeeData, employeeData }) => {
  const setUserAddress = (e, index) => {
    setEmployeeData((employee) =>
      produce(employee, (v) => {
        v.addresses[index][e.target.name] = e.target.value;
      })
    );
  };

  const addNewAddressToList = () => {
    setEmployeeData({
      ...employeeData,
      addresses: [
        ...employeeData.addresses,
        {
          streetName: "",
          postalCode: "",
          apartmentNumber: 0,
          state: "",
          country: "",
        },
      ],
    });
  };

  return (
    <div>
      <div>
        <div className="flex">
          <h3>Add Address</h3>{" "}
          <button
            type="button"
            className="margin-left"
            onClick={addNewAddressToList}
          >
            + Add Address
          </button>
        </div>
        {employeeData.addresses.map((address, index) => (
          <div key={index}>
            <div className="grid-array-form">
              <input
                placeholder="street name"
                name="streetName"
                value={address.streetName}
                onChange={(e) => setUserAddress(e, index)}
              />
              <input
                placeholder="postal code"
                name="postalCode"
                value={address.postalCode}
                onChange={(e) => setUserAddress(e, index)}
              />
              <input
                placeholder="state"
                name="state"
                value={address.state}
                onChange={(e) => setUserAddress(e, index)}
              />
              <input
                placeholder="apartment No"
                type="number"
                name="apartmentNumber"
                value={address.apartmentNumber}
                onChange={(e) => setUserAddress(e, index)}
              />
              <input
                placeholder="country"
                name="country"
                value={address.country}
                onChange={(e) => setUserAddress(e, index)}
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressForm;
