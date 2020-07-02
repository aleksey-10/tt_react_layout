import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api } from '../../../../api/api';
import { Loader } from '../../../common/Loader/Loader';

export const PositionField = ({ register }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    api.getPositions().then((data) => {
      setPositions(data.positions);
    });
  }, []);

  return (
    <div className="form__item">
      <h3 className="radio__title">Select your position</h3>
      {
        positions.length
          ? positions.map((position, index) => (
            <RadioItem
              key={position.id}
              title={position.name}
              id={position.name.replace(/\s/, '')}
              register={register}
              checked={index === 0}
            />
          ))
          : <Loader />
      }
    </div>
  );
};

PositionField.propTypes = {
  register: PropTypes.func.isRequired,
};

const RadioItem = ({ title, id, register, checked }) => (
  <div className="radio">
    <input
      type="radio"
      name="position"
      id={id}
      value={title}
      ref={register()}
      defaultChecked={checked}
    />
    <label className="radio__label" htmlFor={id}>
      {title}
    </label>
  </div>
);

RadioItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
