import React, { useRef } from "react";

function ShowLink(props) {
  const linkRef = useRef();
  const resetLink = () => {
    window.location.reload();
  };

  const copyLink = () => {
    let linkSelect = linkRef.current.select();
    document.execCommand("copy");
  };

  const shareLink = () => {
    if (navigator.share) {
      let linkSelect = linkRef.current.value;
      navigator.share({
        url: linkSelect,
      });
    } else {
      alert("Your device is not support share API");
    }
  };

  return (
    <div className="backdrop">
      <div className="card">
        <input
          ref={linkRef}
          defaultValue={`http://localhost:3000/user?name=${props.name}`}
          style={{ pointerEvents: "none" }}
        />
        <div className="btn-group">
          <button type="button" onClick={shareLink}>
            Share
          </button>
          <button type="button" onClick={copyLink}>
            Copy
          </button>
          <button type="button" onClick={resetLink}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowLink;
