import React from "react";
import { Layout } from "@/components/Layout/Layout";
import { Sidebar } from "./components/Layout/Sidebar";

interface Admin {
  id:number,
  name: string,
  surname: string,
}

function App() {
  // const [admins, setAdmins] = React.useState<Admin[]>([])
  // React.useEffect(() =>{
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:8080/api/admins");
  //     const data = await response.json();
  //     setAdmins(data);
  //   };
  //   fetchData();
  // },[])
  return (
    <>
      <div>
       <Layout/>
       {/* <Sidebar className="p-5 shadow-lg" /> */}
      </div>
    </>
  );
}

export default App;
