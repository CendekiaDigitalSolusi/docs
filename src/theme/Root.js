import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <>
      {children}
      <SpeedInsights />
    </>
  );
}
