import { Code } from "lucide-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Codereviewtrack } from "./Codereviewtrack";
import { LoginForm } from "./LoginForm";
import { Navigate, Route, Routes } from "react-router-dom";

function MonthYearPicker() {
  // const [startDate, setStartDate] = useState(new Date());

  return (
  <>
<Routes>
  <Route path="/" element={<Navigate to="/LoginForm" replace/>}/>
  <Route path="/LoginForm" element={<LoginForm/>}/>
  <Route path="/Codereviewtrack" element={<Codereviewtrack/>}/>
</Routes>

  </>
  );
}

export default MonthYearPicker;