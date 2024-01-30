import React from 'react';
import { TrafficLight } from './TrafficLight';
import { TrafficLightButton } from './TrafficLightButton';

export function TrafficLightContainer() {
  return (
    <div>
      <TrafficLight />
      <TrafficLightButton />
    </div>
  );
}