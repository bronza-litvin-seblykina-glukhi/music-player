/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';
import React from 'react';
import reduxCleaner from '../../helpers/CleanReduxFormInput';

const FormInput = ({
  field, placeholder, disabledInput, type, className, func, autoFocus,
  onRef, on, id, multiple, autoComplete
}) => {
  console.log(className);
  // const isError = field.error && field.touched;
  const isType = type ? `${type}` : 'text';
  const onChangeParams = !func ? {} : { onChange: func };
  // const shouldShowSuccessIcon = !field.error && field.valid && showSuccessIcon && field.touched;
  const inputClassName = className || '';
  
  return (
    <input
      id={id}
      autoComplete={autoComplete}
      ref={(c) => { onRef ? onRef(c) : null; }} // eslint-disable-line no-unused-expressions
      type={isType}
      className={inputClassName}
      disabled={disabledInput}
      {...reduxCleaner(field)}
      placeholder={placeholder || ''}
      {...onChangeParams}
      {...on}
      autoFocus={autoFocus}
      multiple={multiple}
    />
  );
};
FormInput.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  showSuccessIcon: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  func: PropTypes.func,
};

export default FormInput;
