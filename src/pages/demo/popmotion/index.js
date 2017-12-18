import React from 'react';
import { decay } from 'popmotion';
import { MotionValue } from 'popmotion-react';
import Counter from '../../../components/Counter';

const stateChangeHandlers = {
  increase: ({ value }) => decay({
    velocity: 20,
    from: value.get(),
  }).pipe(Math.round).start(value),
  decrease: ({ value }) => decay({
    velocity: -20,
    from: value.get(),
  }).pipe(Math.round).start(value),
};

const Popmotion = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h2>Popmotion</h2>
        <MotionValue
          onStateChange={stateChangeHandlers}
        >
          {({ v, setStateTo }) => (
            <div>
              <Counter
                count={v}
              />
              <button
                onClick={() => setStateTo.increase()}
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  width: '100px',
                  height: '100px',
                  marginLeft: `${v * 1.5}px`,
                  borderRadius: '100%',
                }}
              >增加時間
              </button>
              <button
                onClick={() => setStateTo.decrease()}
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  width: '100px',
                  height: '100px',
                  marginLeft: `${v * 3}px`,
                  borderRadius: '100%',
                  offsetY: v,
                }}
              >減少時間
              </button>
            </div>
          )}
        </MotionValue>
      </div>
    </div>
  </div>
);

export default Popmotion;
