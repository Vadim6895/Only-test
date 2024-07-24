import React from 'react';

function Date({
  initialVal,
  val,
  time,
  classStr,
}: {
  initialVal: number;
  val: number;
  time: number;
  classStr: string;
}) {
  const [currentVal, setCurrentVal] = React.useState(initialVal);
  React.useEffect(() => {
    if (currentVal !== val) {
      if (val > currentVal) setTimeout(setCurrentVal, time, currentVal + 1);
      if (val < currentVal) setTimeout(setCurrentVal, time, currentVal - 1);
    }
  }, [currentVal, time, val, initialVal]);

  return <span className={classStr}>{currentVal}</span>;
}

export default Date;
