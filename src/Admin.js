import React, { useState } from "react";
import ShowLink from "./ShowLink";

function Admin() {
  const [name, setName] = useState("");
  const [isLink, setIsLink] = useState(false);
  const [link, setLink] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      console.log(name);
      setIsLink(true);
      setLink(name);
    }
  };
  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit">Generate Link</button>
          </div>
        </form>
      </div>
      {isLink && <ShowLink name={link} />}
    </>
  );
}

export default Admin;
