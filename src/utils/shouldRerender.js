//custom check to see if the timer should rerender
// returning true means render is skipped
export const shouldComponentRerender = (props, nextProps) => {
  if (props.total === nextProps.total) {
    return true;
  } else {
    return false;
  }
};
