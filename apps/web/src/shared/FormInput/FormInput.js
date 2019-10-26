/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';
import React from 'react';
import MaterialIcon from 'material-icons-react';
import reduxCleaner from '../../helpers/CleanReduxFormInput';

const FormInput = ({
  field, label, placeholder, disabledInput, type, className, func, autoFocus,
  onRef, on, showHidePassword, id, multiple, showSuccessIcon, imposedInputClass, autoComplete
}) => {
  const isError = field.error && field.touched;
  const isType = type ? `${type}` : 'text';
  const onChangeParams = !func ? {} : { onChange: func };
  const shouldShowSuccessIcon = !field.error && field.valid && showSuccessIcon && field.touched;
  const inputClassName = imposedInputClass || (isType === 'checkbox' ? null : 'form-control');
  
  return (
    <div
      className={`form-group${isError ? ' has-error' : ''} ${className || ''} ${showSuccessIcon
        ? 'showSuccessIcon' : ''}`}
    >
      {label && <label className="field-name" htmlFor={field.name}>{label}</label>}
      <div className="field-value">
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
        {showHidePassword && <span className="password-show" onMouseDown={showHidePassword} onMouseUp={showHidePassword} />}
        {isError && <div className="text-danger">{field.error}</div>}
        { shouldShowSuccessIcon && <MaterialIcon icon="check_circle" color="#10bc72" size={25} /> }
      </div>
    </div>
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
