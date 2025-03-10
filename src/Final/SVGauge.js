// SVGauge.js
import React, { useEffect, useRef } from "react";
import SvgGauge from "svg-gauge";

const defaultOptions = {
  animDuration: 1,
  showValue: true,
  initialValue: 0,
  max: 100
};

const SVGauge = (props) => {
  const gaugeEl = useRef(null);
  const gaugeRef = useRef(null);

  useEffect(() => {
    if (!gaugeRef.current) {
      const options = { ...defaultOptions, ...props };
      gaugeRef.current = SvgGauge(gaugeEl.current, options);
      gaugeRef.current.setValue(options.initialValue);
    }
    gaugeRef.current.setValueAnimated(props.value, 1);
  }, [props]);

  return <div ref={gaugeEl} className="gauge-container" />;
};

export default SVGauge;
