import React, { Component, useState, useEffect } from "react";
import VPSData from "./VPSData.js";
import "./style.css";

const VPSStatus = () => {
  return (
    <div>
      <h1 className="text-center m-4">Nevin.cc Server Status</h1>
      <VPSData className="text-center" />
    </div>
  );
};

export default VPSStatus;
