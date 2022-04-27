import React from "react";
import { Icon, Modal } from "web3uikit";
import { useState } from "react";

function User() {
  //this the header of the modal visibility
  const [isVisible, setVisible] = useState(false);

  return (
      <>
        // This triggers the modal to open
        <div onClick={() => setVisible(true)}>
          <Icon fill="#000000" size={24} svg="user" />
        </div>

        // This is our modal. We need to get it filled
        <Modal
          onCloseButtonPressed={() => setVisible(false)}
          hasFooter={false}
          title="Your Stays"
          isVisible={isVisible}
        >
          
        </Modal>
      </>
    );
  }

export default User;
