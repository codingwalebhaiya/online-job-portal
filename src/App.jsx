import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import JobCard from "./components/JobCard/JobCard.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
//import jobData from "/JobData.js";
import { collection, query,orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase.config.js";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postDate", "desc"));
    const req = await getDocs(q);


    req.forEach((job) => {
      //console.log(job.id, "=>", job.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postDate: job.data().postDate.toDate(),
      });
    });

    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {jobs.map((job) => {
        return <JobCard key={job.id} {...job} />;
      })}
    </div>
  );
};

export default App;
