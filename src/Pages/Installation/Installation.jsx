import React, { useEffect, useState } from "react";
import downnloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import { useLoaderData } from "react-router-dom";
import { ArrowDownToDot } from "lucide-react";

const Installation = () => {
  const [sort, setSort] = useState("");
  const { data } = useLoaderData();
  const [apps, setApps] = useState([]);

  // ✅ Load installed apps on mount
  useEffect(() => {
    const storedAppsStringForm = localStorage.getItem("installedApps");
    const storedId = storedAppsStringForm
      ? JSON.parse(storedAppsStringForm)
      : [];
    const filteredApps = data.filter((d) => storedId.includes(String(d.id)));
    setApps(filteredApps);
  }, [data]);

  // ✅ Handle Uninstall button
  const handleDelete = (id) => {
    const storedAppsStringForm = localStorage.getItem("installedApps");
    const storedId = storedAppsStringForm
      ? JSON.parse(storedAppsStringForm)
      : [];

    // remove from localStorage
    const updatedId = storedId.filter(
      (storedId) => String(storedId) !== String(id)
    );
    localStorage.setItem("installedApps", JSON.stringify(updatedId));

    // remove from UI state
    setApps((prevApps) =>
      prevApps.filter((app) => String(app.id) !== String(id))
    );
  };
  const handleSorting = (type) => {
    setSort(type);
    if (type === "Low-High") {
      const sortedApp = [...apps].sort((a, b) => a.downloads - b.downloads);
      setApps(sortedApp);
      // console.log(sortedApp);
    } else {
      const sortedApp = [...apps].sort((a, b) => b.downloads - a.downloads);
      setApps(sortedApp);
    }
  };

  return (
    <div className="text-center">
      <h1 className="md:text-5xl font-bold">Your Installed Apps</h1>
      <p className="text-xl opacity-70 mt-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="mt-10 mb-[-15px] text-start px-10 flex justify-between items-center">
        <p className="text-2xl font-semibold">{apps.length} Apps Found</p>
        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
        {/* For TSX uncomment the commented types below */}
        <button
          className="btn m-1 border-0 bg-white"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          {sort ? sort : "Sort By Size"}
          <ArrowDownToDot />
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-white shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li>
            <a onClick={() => handleSorting("Low-High")}>Low-High</a>
          </li>
          <li>
            <a onClick={() => handleSorting("High-Low")}>High-Low</a>
          </li>
        </ul>
      </div>

      {apps.length > 0 ? (
        apps.map((app) => (
          <div key={app.id} className="px-10 rounded-2xl">
            <div className="md:flex justify-between items-center space-y-7 p-5 bg-white mt-10">
              <div className="md:flex justify-center gap-5 items-center">
                <img className="w-15 mx-auto" src={app.image} alt={app.title} />
                <div>
                  <h1 className="text-2xl font-bold">{app.title}</h1>
                  <div className="flex gap-4">
                    <button className="flex justify-center items-center gap-2 mt-3">
                      <img className="w-5" src={downnloadImg} alt="" />
                      {app.downloads / 100000}M
                    </button>
                    <button className="flex justify-center items-center gap-2 mt-3">
                      <img className="w-5" src={ratingImg} alt="" />
                      {app.ratingAvg}
                    </button>
                    <button className="mt-3">{app.size} MB</button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleDelete(app.id)}
                  className="bg-green-600 p-3 text-xl text-white rounded-xl"
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
};

export default Installation;
