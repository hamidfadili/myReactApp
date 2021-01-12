export default function IsTruthy(props) {
  return props.value ? props.yes() : props.no();
}

IsTruthy.defaultProps = {
  yes: () => null,
  no: () => null,
};
