
import React from 'react';

import renderer from 'react-test-renderer';
import App from './App';

test("HomeScreen renders consistently", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

