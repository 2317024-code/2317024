"use client";

import {useState} from  "react";
import {Button,TextField} from "@mui/material";
import {Log} from  "../src/utils/logger";

export default function Home() {
  const[token,setToken]=useState("");

  const  handleLog=async()=>{
    await Log("frontend","info","component","Button clicked successfully","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzE3MDI0QG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NzEwNjQsImlhdCI6MTc4Mjk3MDE2NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImU1ZWUxYTQxLWJiNWYtNGVjNy04NzZlLWMwNDAxYjgxYmM5OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFiaWppbiBzdXZlZGhhIGEiLCJzdWIiOiJkNTFhYzk1NS1hN2NkLTQxYmEtYjJhZC1lNWJmMzdkMDVlOTkifSwiZW1haWwiOiIyMzE3MDI0QG5lYy5lZHUuaW4iLCJuYW1lIjoiYWJpamluIHN1dmVkaGEgYSIsInJvbGxObyI6IjIzMTcwMjQiLCJhY2Nlc3NDb2RlIjoiRVJ6VXl4IiwiY2xpZW50SUQiOiJkNTFhYzk1NS1hN2NkLTQxYmEtYjJhZC1lNWJmMzdkMDVlOTkiLCJjbGllbnRTZWNyZXQiOiJUU0dSSnZLUHFnWnpYalJFIn0.Z3EuaZNQe6j_CaNYBmmTktD-WFGy3HwgQF45aAa8SWM");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1><center>Campus Notification Application</center></h1>

      <TextField
        label="Notification Type"
        variant="outlined"
        value={token}
        fullWidth

        onChange={(e)=>setToken(e.target.value)}
        style={{marginBottom: "20px"}}
      />

      <TextField
        label="Message"
        variant="outlined"
        value={token}
        fullWidth

        onChange={(e)=>setToken(e.target.value)}
        style={{marginBottom:"20px"}}
      />

      <Button variant="contained" onClick={handleLog}>
        Send Data
      </Button>

      <h1>Prioritized Notifications</h1>

      <ul>

        <li>1. <b>Type:</b> Result <br></br>
            <b>Message:</b> Internal</li>
        <br></br>
        
        <li>2. <b>Type:</b> Result <br></br>
            <b>Message:</b> end-sem</li>
        <br></br>
        
        <li>3. <b>Type:</b> Result <br></br>
            <b>Message:</b> project-review</li>
        <br></br>
        
        <li>4. <b>Type:</b> Result <br></br>
            <b>Message:</b> project-review</li>
        <br></br>
        
        <li>5. <b>Type:</b> Placement <br></br>
            <b>Message:</b> Visa Inc. hiring</li>
        <br></br>
        
        <li>6. <b>Type:</b> Result <br></br>
            <b>Message:</b> external</li>
        <br></br>
        
        <li>7. <b>Type:</b> Placement <br></br>
            <b>Message:</b> Amgen Inc. hiring</li>
        <br></br>
        
        <li>8. <b>Type:</b> Event <br></br>
            <b>Message:</b> cult-fest</li>
        <br></br>
        
        <li>9. <b>Type:</b> Placement <br></br>
            <b>Message:</b> CSX Corporation hiring</li>
        <br></br>
        
        <li>10. <b>Type:</b> Placement <br></br>
            <b>Message:</b> Amgen Inc. hiring</li>
      
      </ul>

    </div>
  );
}
