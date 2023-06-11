import { useEffect, useState } from "react";
import Sidebar from "./components/SideBar";
import MailListView from "./components/MailListView";
import apiCaller from "./helpers/apicaller";
import SingleMailView from "./components/SingleMailView";
import "./App.css";
import { Pane } from "evergreen-ui";
import SideSheetSidebar from "./components/SideSheetSidebar";
import { useSelector } from "react-redux";

const App = () => {
  const selectedTag = useSelector((state) => state.selectedTag);
  const [maiListData, setMailListData] = useState([]);
  const [toggleSinglMailView, setToggleSingleMaiView] = useState(false);
  const [filterBy, setFilterBy] = useState(selectedTag);
  const [currentSelectedMail, setCurrentSelectedMail] = useState("");
  async function fetchMaiList() {
    const response = await apiCaller(
      "https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123",
      "get"
    );
    setMailListData(response?.data);
  }

  const handleListFilterByTag = (val) => {
    if (val === "All Mail") {
      setFilterBy("");
    } else {
      setFilterBy(val);
    }
    setCurrentSelectedMail("");
  };
  useEffect(() => {
    fetchMaiList();
  }, []);
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar handleListFilterByTag={(val) => handleListFilterByTag(val)} />
      <Pane className="mail-list-view">
        <MailListView
          maiListData={
            filterBy
              ? maiListData.filter(
                  (item) => item.tag === filterBy.toLowerCase()
                )
              : maiListData
          }
          handleCurrentSelectedMail={(val) => setCurrentSelectedMail(val)}
          handleSingleMailViewToggle={(val) => setToggleSingleMaiView(val)}
        />
      </Pane>
      {!toggleSinglMailView && (
        <Pane className="responsive-mail-list-view">
          <SideSheetSidebar
            handleListFilterByTag={(val) => handleListFilterByTag(val)}
          />
          <MailListView
            maiListData={
              filterBy
                ? maiListData.filter(
                    (item) => item.tag === filterBy.toLowerCase()
                  )
                : maiListData
            }
            handleCurrentSelectedMail={(val) => setCurrentSelectedMail(val)}
            handleSingleMailViewToggle={(val) => setToggleSingleMaiView(val)}
          />
        </Pane>
      )}

      <Pane className="single-mail-view">
        {currentSelectedMail && (
          <SingleMailView currentSelectedMail={currentSelectedMail} />
        )}
      </Pane>
      <Pane className="responsive-single-mail-view">
        {currentSelectedMail && toggleSinglMailView && (
          <SingleMailView
            currentSelectedMail={currentSelectedMail}
            handleSingleMailViewToggle={(val) => setToggleSingleMaiView(val)}
          />
        )}
      </Pane>
    </div>
  );
};

export default App;
