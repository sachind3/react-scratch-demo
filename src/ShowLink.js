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

  const checkLink = () => {
    window.open(linkRef.current.value, "_blank");
    // window.location.href = linkRef.current.value;
  };

  return (
    <div className="backdrop">
      <div className="card">
        <input
          ref={linkRef}
          defaultValue={`${window.location}user/${props.name}`}
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
          <button type="button" onClick={checkLink}>
            Check link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowLink;
