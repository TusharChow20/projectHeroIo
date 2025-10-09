import { toast } from "react-toastify";
const storeApp = () => {
  const storedAppsStringForm = localStorage.getItem("installedApps");
  if (storedAppsStringForm) {
    const storedApps = JSON.parse(storedAppsStringForm);
    return storedApps;
  } else {
    return [];
  }
};

const addApps = (id) => {
  const storedAppData = storeApp();
  if (storedAppData.includes(id)) {
    toast("You Already Installed The app");
    return false;
  } else {
    storedAppData.push(id);
    localStorage.setItem("installedApps", JSON.stringify(storedAppData));
    return true;
  }
};

export { addApps };
