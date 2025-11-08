function Button({ children, type = 'button', ...restProps }) {
  if (!['button', 'reset', 'submit'].includes(type)) {
    console.warn('type prop not supported');
  }

  return (
    <button className="
     border-gray-100 border-solid border bg-gray-300 p-1 cursor-pointer rounded-md shadow
    "
    type={type} {...restProps}>{children}</button>
  );
};

export default Button;
