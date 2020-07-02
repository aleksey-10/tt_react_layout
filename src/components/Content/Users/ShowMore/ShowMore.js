import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../../../common/Loader';

export const ShowMore = memo(
  ({ isLoading, handleClick }) => (
    <div className="users__show-more">
      <button
        className="users__button button"
        onClick={handleClick}
      >
        Show more
    </button>
      {
        isLoading && (
          <div className="users__loader">
            <Loader />
          </div>
        )
      }
    </div>
  )
);

ShowMore.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
