/* eslint-disable react/prop-types */
import { Text } from "evergreen-ui";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedTag } from "../redux/slices/selectedTagSlice";

const SideBar = ({ handleListFilterByTag }) => {
  const selectedTag = useSelector((state) => state.selectedTag);
  const [activeOption, setActiveOption] = useState(selectedTag);

  const dispatch = useDispatch();
  const sidebarOptions = [
    { label: "All Mail" },
    { label: "Inbox" },
    { label: "Draft" },
    { label: "Spam" },
    { label: "Trash" },
  ];

  const handleOptionSelect = (value) => {
    handleListFilterByTag(value);
    setActiveOption(value);
    dispatch(
      updateSelectedTag({
        title: value,
      })
    );
  };
  return (
    <div className="sidebar-wrapper">
      <Sidebar
        backgroundColor="#E0E3E6"
        rootStyles={{
          //   color: themes[theme].sidebar.color,
          height: "100vh",
        }}
      >
        <Menu rootStyles={{ padding: "10px" }}>
          {sidebarOptions?.map((option) => (
            <MenuItem
              key={option}
              rootStyles={{
                //   margin: '10px',
                borderRadius: "5px",
                background:
                  activeOption === option?.label ? "#0051FE" : "transparent",
              }}
              onClick={() => handleOptionSelect(option?.label)}
            >
              <Text color={activeOption === option?.label ? "white" : "black"}>
                {option?.label}
              </Text>
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
