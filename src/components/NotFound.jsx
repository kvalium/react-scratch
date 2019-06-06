import React from 'react';
import PropTypes from 'prop-types';

/**
 * NotFound Page
 * @param {String} errMsg Error message to display
 */
export default function NotFound({ errMsg }) {
  return (
    <>
      <h1 className="title is-h1">Mama mia !</h1>
      <p>{errMsg}</p>
    </>
  );
}

NotFound.propTypes = {
  errMsg: PropTypes.string,
};

NotFound.defaultProps = {
  errMsg: 'oops ! Une erreur est survenue :/',
};
