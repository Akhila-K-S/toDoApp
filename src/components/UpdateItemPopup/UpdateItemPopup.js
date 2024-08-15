import React from "react";
import ReactDOM from "react-dom";

const UpdateItemPopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>
          Close
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

// Example styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    width: "300px",
  },
  closeButton: {
    marginBottom: "10px",
  },
};

export default UpdateItemPopup;
