"use client";

import {Log} from "../utils/logger";
import {Button} from "@mui/material";


export default function TestButton({token}: {token:string}) {
  const handleClick=()=>{
    Log("frontend", "debug", "component", "Test button clicked", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzE3MDI0QG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NzEwNjQsImlhdCI6MTc4Mjk3MDE2NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImU1ZWUxYTQxLWJiNWYtNGVjNy04NzZlLWMwNDAxYjgxYmM5OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFiaWppbiBzdXZlZGhhIGEiLCJzdWIiOiJkNTFhYzk1NS1hN2NkLTQxYmEtYjJhZC1lNWJmMzdkMDVlOTkifSwiZW1haWwiOiIyMzE3MDI0QG5lYy5lZHUuaW4iLCJuYW1lIjoiYWJpamluIHN1dmVkaGEgYSIsInJvbGxObyI6IjIzMTcwMjQiLCJhY2Nlc3NDb2RlIjoiRVJ6VXl4IiwiY2xpZW50SUQiOiJkNTFhYzk1NS1hN2NkLTQxYmEtYjJhZC1lNWJmMzdkMDVlOTkiLCJjbGllbnRTZWNyZXQiOiJUU0dSSnZLUHFnWnpYalJFIn0.Z3EuaZNQe6j_CaNYBmmTktD-WFGy3HwgQF45aAa8SWM");
  };
  return <Button onClick={handleClick}>Test Component Log</Button>;
};
