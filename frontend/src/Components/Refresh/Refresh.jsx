import React from "react";
function Refresh() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button  onClick={refreshPage}>
        Click
      </button>
    </div>
  );
}

export default Refresh;