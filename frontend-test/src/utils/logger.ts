import axios from "axios";

const BASE_URL="http://4.224.186.213/evaluation-service";

export const Log = async (stack: "frontend",level: "debug" | "info" | "warn" | "error" | "fatal",pkg: "api" | "component" | "hook" | "page" | "state" | "style",
  message: string,token: "BEARER_TOKEN")=>{
  try {
    const res=await axios.post(
      `${BASE_URL}/logs`,
      {
        stack,
        level,
        package:pkg,
        message,
      },
      {
        headers:{
          Authorization:  `Bearer ${token}` ,
        },
      }
    );

    console.log("Login Created",res.data);
  } catch (err) {
    console.error("Login Failed",err);
  }
};
