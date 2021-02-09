import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import IFPSUpload from './IPFSUpload'
const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ ipfs, drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  
  const allowedTypes = ['.gpx', '.tcx'];

  return (
    <div className="App">
      <div className="section">
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <IFPSUpload 
          ipfs={ipfs}
          allowedTypes={allowedTypes}
          />
      </div>
    </div>
  );
};
