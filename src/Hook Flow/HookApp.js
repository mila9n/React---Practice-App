import React from "react";

const HookApp = () => {
  const [checked, setChecked] = React.useState(false);

  const changeCheck = () => {
    setChecked((prevValue) => {
      return prevValue ? false : true;
    });
  };

  React.useEffect(() => {
    setCount(0);
  }, [checked]);

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("this is child useEffect with dependency");

    return () => {};
  }, [count]);

  const increaceCount = () => {
    setCount((prevCount) => {
      return prevCount + 2;
    });
  };

  return (
    <>
      <input type="checkBox" checked={checked} onClick={changeCheck} />
      <label>checkbox</label>
      <div className="child-div" onClick={increaceCount}>
        {checked && <div className="counter">{count}</div>}
      </div>
    </>
  );
};

export default HookApp;
