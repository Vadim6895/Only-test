import React from 'react';
import clsx from 'clsx';

import Date from '../date/date';
import FadeSlider from '../fade/fadeSlider';

import { calcCoordsDots, calcAngle } from '../../utils';
import { Data } from '../../types';

const spinnerBtnShift = 28;

function Dates({ data }: { data: Data[] }) {
  const dotsCoords = calcCoordsDots(530, 530, data.length);
  const circleDegStep = 360 / data.length;
  const [deg, setDeg] = React.useState(0);
  const [activeItem, setActiveItem] = React.useState(0);

  const onClickDot = (val: number) => {
    if (val !== activeItem) {
      const angle = calcAngle(val, activeItem, data.length);
      if (angle.next) {
        setDeg(deg + circleDegStep * angle.step);
        setActiveItem(val);
      } else {
        setDeg(deg - circleDegStep * angle.step);
        setActiveItem(val);
      }
    }
  };

  const setSpinner = (next: boolean) => {
    if (next) {
      if (activeItem + 1 < data.length) {
        setDeg(deg - circleDegStep);
        setActiveItem(activeItem + 1);
      }
    } else if (activeItem - 1 >= 0) {
      setDeg(deg + circleDegStep);
      setActiveItem(activeItem - 1);
    }
  };

  return (
    <section className="dates">
      <div className="dates__wrapper">
        <div className="dates__decor-line dates__decor-line--vertical" />
        <div className="dates__decor-line dates__decor-line--horizontal" />
        <div
          className="dates__spinner"
          style={{
            transform: `translateX(-50%) rotate(${deg}deg)`,
          }}
        >
          <div className="dates__circle" />
          {dotsCoords.map((item, i) => (
            <button
              key={item.val}
              type="button"
              style={{
                left: `${item.x - spinnerBtnShift}px`,
                top: `${item.y - spinnerBtnShift}px`,
                transform: `rotate(${-deg}deg)`,
              }}
              className={clsx('btn-dot', i === activeItem && 'btn-dot--active')}
              onClick={() => onClickDot(item.val - 1)}
            >
              {item.val}
              <span className="dates__dots-title">
                {data[activeItem].title}
              </span>
            </button>
          ))}
        </div>
        <div className="date__content-wrapper">
          <h2 className="dates__title">Исторические даты</h2>
          <div className="dates__activeDate">
            <Date
              initialVal={data[0].dates[0]}
              val={data[activeItem].dates[0]}
              time={50}
              classStr="dates__start-date"
            />
            <Date
              initialVal={data[0].dates[1]}
              val={data[activeItem].dates[1]}
              time={50}
              classStr="dates__end-date"
            />
          </div>
          <div className="dates__flex-wrapper">
            <div className="dates__btns">
              <div>
                <p className="dates__btns-count">
                  0{activeItem + 1}/0{data.length}
                </p>
                <button
                  className="dates__btn"
                  type="button"
                  onClick={() => setSpinner(false)}
                  disabled={activeItem === 0}
                >
                  <span className="visually-hidden">Назад</span>
                  <svg
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button
                  className="dates__btn dates__btn--next"
                  type="button"
                  onClick={() => setSpinner(true)}
                  disabled={activeItem === data.length - 1}
                >
                  <span className="visually-hidden">Вперед</span>
                  <svg
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 13.5L7.25 7.25L1 0.999999" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              <div className="dates__dots-mob">
                {dotsCoords.map((item, i) => (
                  <button
                    key={item.val}
                    type="button"
                    className={clsx(
                      'dates__dot',
                      i === activeItem && 'dates__dot--active',
                    )}
                    data-val={item.val - 1}
                    onClick={() => onClickDot(item.val - 1)}
                    aria-label="pagination-item"
                  />
                ))}
              </div>
            </div>
            <FadeSlider data={data[activeItem]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dates;
