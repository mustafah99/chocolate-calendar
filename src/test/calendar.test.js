import React from 'react';
import { useEffect, useState } from 'react';

function useEffectTest() {
  const [daysData, setDaysData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/chocolates')
      .then((resp) => resp.json())
      .then((data) => setDaysData(data));
  }, []);

  return daysData;
}

describe('Chocolate Calendar', () => {
  // Test for trying out Jest
  it('Displays days from 1 to 31', async () => {
    expect(useEffectTest()).toBe([{ day: 1 }]);
  });

  //   it('When day passes or has passed then Calendar Day Box opens.');

  //   it('Chocolate can be eaten if Calendar Day Box is open.');
});
