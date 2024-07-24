import React from 'react';

import DatesSlider from '../datesSlider/datesSlider';

import { Data } from '../../types';

function FadeSlider({ data }: { data: Data }) {
  const [slidesData, setSlidesData] = React.useState(data);
  const [render, setRender] = React.useState(true);
  const [anim, setAnim] = React.useState('fade-in');

  React.useEffect(() => {
    if (data !== slidesData) {
      setRender(true);
      setAnim('fade-out');
    }
  }, [data, slidesData]);

  const onAnimationEnd = (evt: { animationName: string }) => {
    if (evt.animationName === 'fade-out') {
      setSlidesData(data);
      setAnim('fade-in');
    }
  };

  return (
    render && (
      <div
        style={{
          animation: `${anim} 0.35s forwards ease-in-out`,
          position: 'relative',
        }}
        onAnimationEnd={onAnimationEnd}
      >
        <p className="slider-title">{slidesData.title}</p>
        <DatesSlider slides={slidesData.facts} />
      </div>
    )
  );
}

export default FadeSlider;
