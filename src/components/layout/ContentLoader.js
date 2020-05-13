import React from 'react';

const ContentLoader = () => (
  <div className="ph-item">
    <div className="ph-col-2">
      <div className="ph-avatar" />
    </div>
    <div>
      <div className="ph-row">
        <div className="ph-col-4" />
        <div className="ph-col-8 empty" />
        <div className="ph-col-6" />
        <div className="ph-col-6 empty" />
        <div className="ph-col-2" />
        <div className="ph-col-10 empty" />
      </div>
    </div>
    <div className="ph-col-12">
      <div className="ph-picture" />
      <div className="ph-row">
        <div className="ph-col-4" />
        <div className="ph-col-8 empty" />
        <div className="ph-col-6" />
        <div className="ph-col-6 empty" />
      </div>
    </div>
  </div>
);
export default ContentLoader;
