import React, { useEffect, useState } from 'react';

const URL2 = process.env.REACT_APP_DETAILS_URL;

export default function Details({ selected }) {
  const [userDetails, setUserDetails] = useState({ details: {}});

  useEffect(() => {
    if (selected) {
        fetch(`${URL2 + selected +".json"}`).then((res)=> {
            return res.json();
        }).then((data)=> {
            setUserDetails(data);
        }).catch((err) => {
            console.log(err.message);
        });
    }
  }, [selected]);

  return (
    selected !== 0 && (
      <div className="details">
        <img className="details-img" src={userDetails.avatar + `${'?img=' + selected}`} alt="user avatar" />
        <div className="details-text">
          <div className="details-text-item details-text-title">{userDetails.name}</div>
          <div className="details-text-item">City: {userDetails.details.city}</div>
          <div className="details-text-item">Company: {userDetails.details.company}</div>
          <div className="details-text-item">Position: {userDetails.details.position}</div>
        </div>
      </div>
    )
  );
}