"use client";

import Guard from "./Guard";
import SectionTitle from "./SectionTitle";

const GuardList = () => {
  return (
    <div className="space-y-4">
      <SectionTitle title="Months" subTitle="May 26 - June 6, 2025" />
      <ul className="space-y-4">
        <li>
          <Guard name="Neco Lewin" hourly="40.00" />
        </li>
        <li>
          <Guard name="Neco Lewin" hourly="40.00" />
        </li>
        <li>
          <Guard name="Neco Lewin" hourly="40.00" />
        </li>
      </ul>
    </div>
  );
};

export default GuardList;
