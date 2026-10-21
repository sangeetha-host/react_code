import { Table } from "antd";
import { useState } from "react";

function InputForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputValue);
    console.log("Submitted value:", inputValue);
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="p-5 text-left">
      <label
        htmlFor="inputField"
        className="mb-2 block font-medium text-gray-700"
      >
        Input Field
      </label>

      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something..."
        className="w-full rounded-xl border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      <button
        type="submit"
        className="mt-4 rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
   <div>  
    <table className="table-auto bg-amber-100">
      <tr>
        <th>Column 1</th>
        
      </tr>
      <tr>
        <td>{inputValue}</td>
       
      </tr>
      
     
    </table>
   </div>
    </>
  );
  
}

export default InputForm;