"use client";

import { useState } from "react";
import { Calendar } from "../ui/calendar";
import SectionTitle from "./SectionTitle";

const MockCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <SectionTitle title="Months" subTitle="2025" />
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md shadow-sm bg-transparent" captionLayout="dropdown" />
    </div>
  );
};

export default MockCalendar;
