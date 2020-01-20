import React from "react";

const FriendProfile = ({ friendProps }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>First Name</th>
          <td>{friendProps.name.first}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{friendProps.name.last}</td>
        </tr>
        <tr>
          <th>Street</th>
          <td>{friendProps.location.street.name}</td>
        </tr>
        <tr>
          <th>House Number</th>
          <td>{friendProps.location.street.number}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{friendProps.location.city}</td>
        </tr>
        <tr>
          <th>Country</th>
          <td>{friendProps.location.country}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{friendProps.email}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{friendProps.phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FriendProfile;
