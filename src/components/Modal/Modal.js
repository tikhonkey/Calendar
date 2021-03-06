import React from 'react';

import classes from './Modal.css';

const modal = (props) => {
    return (
      <div className={classes.Modal}>
          <div className={classes.Info}>
              <button className={classes.Close} onClick="toggleModal()">
                  <span className={classes.CrossX}> </span>
                  <span className={classes.CrossY}> </span>
              </button>
              <section className={classes.ModalContent}>{props}</section>
          </div>
      </div>
    );
};

export default modal;