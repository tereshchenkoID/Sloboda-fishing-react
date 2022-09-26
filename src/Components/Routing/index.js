import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Routing = ({ routes }) => {
    return (
       <Routes>
          {
              routes.map(item =>
                  <Route
                     key={new Date().getTime()} {...item}
                     element={item.element}
                  />
              )
          }
       </Routes>
    );
};

export default Routing;
