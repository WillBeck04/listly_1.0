import React from 'react';

// If you have specific props, define them here
// interface PricingPageProps {
//   // your props here
// }

const PricingPage: React.FC /* <PricingPageProps> */ = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'cyan', // This should be a valid CSS color or class
      }}
    >
      <h1 style={{ fontSize: '3rem', color: 'grey', fontWeight: 'bold' }}>
        Service Not Available
      </h1>
    </div>
  );
};

export default PricingPage;
