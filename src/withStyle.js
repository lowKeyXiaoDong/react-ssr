import React from "react";
import hoistNonReactStatic from 'hoist-non-react-statics';

function whitStyle(Comp, styles) {
  function NewComp (props) {
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss());
    }
    return <Comp {...props} />;
  };
  hoistNonReactStatic(NewComp, Comp)
  return NewComp
}

export default whitStyle;
