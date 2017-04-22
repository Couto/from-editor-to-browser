import React from 'react';

// Static Elements have no semantic meaning, we need to add a role.
export default ({ callback }) => (
  <div onClick={callback}>Hello</div>
);

// There's hardly a point in having labels that are not
// associated with an input
export const Input = () => {
  <div>
    <label>Username</label>
    <input type="text" />
  </div>;
};
