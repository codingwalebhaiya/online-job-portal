const SearchBar = () => {
  return (
    <div  className="flex max-md:flex-wrap gap-4 my-10 justify-center px-10">
      <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md ">
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="fulltime">Full-time</option>
        <option value="parttime">Part-time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
        <option value="temporary">Temporary</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
        <option value="" disabled hidden selected>
          Job Role
        </option>
        <option value="jobRole">Frontend Developer</option>
        <option value="jobRole">Backend Developer</option>
        <option value="jobRole">FullStack Developer</option>
        <option value="jobRole">IOS Developer</option>
        <option value="jobRole">Android Developer</option>
        <option value="jobRole">DevOps Engineer</option>
        <option value="jobRole">Developer Advocate</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md ">
        <option value="" disabled hidden selected>
          Experience Level
        </option>
        <option value="junior">Junior</option>
        <option value="mid">Mid</option>
        <option value="senior">Senior</option>
        <option value="lead">Lead</option>
      </select>

      <select className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md ">
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="remote">Remote</option>
        <option value="onsite">On-site</option>
        <option value="hybrid">Hybrid</option>
        <option value="us">United States</option>
        <option value="eu">Europe</option>
        <option value="asia">Asia</option>
      </select>

      <button className="w-64 bg-blue-500 text-white font-bold rounded-md py-3 pl-4">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
