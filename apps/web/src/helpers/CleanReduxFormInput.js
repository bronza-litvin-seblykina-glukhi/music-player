import omit from 'lodash/omit';

const propsForRemove = [
  'initialValue',
  'autofill',
  'onUpdate',
  'valid',
  'invalid',
  'dirty',
  'pristine',
  'active',
  'touched',
  'visited',
  'autofilled',
  'error',
];
export default function (field) {
  return omit(field, propsForRemove);
}
