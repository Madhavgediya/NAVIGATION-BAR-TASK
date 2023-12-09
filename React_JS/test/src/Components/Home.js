import React from "react";
import Records from './JsonData.json'


export default function Home() {
  return (
    <div>
      <div>
        {Records &&
          Records.map((record) => {
            return (
              <div className="box" key={record.id}>
                <b>{record.name}</b>
              </div>
            );
          })}
      </div>
    </div>
  );
}
