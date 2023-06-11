/* eslint-disable react/prop-types */
import { Avatar, Heading, Pane, SearchInput, Text } from "evergreen-ui";
import { useState } from "react";
import "../styles/MailListStyles.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterBy } from "../redux/slices/filterBySlice";

const MailListView = ({
  maiListData,
  handleCurrentSelectedMail,
  handleSingleMailViewToggle,
}) => {
  const [activeListCard, setActiveListCard] = useState("");
  const dispatch = useDispatch();
  const filterBy = useSelector((state) => state.filterBy);

  const handleSearchInputChange = (e) => {
    dispatch(
      updateFilterBy({
        title: e,
      })
    );
  };
  const handleSelectCard = (val) => {
    setActiveListCard(val?.id);
    handleCurrentSelectedMail(val);
    handleSingleMailViewToggle(true);
  };
  console.log("mailData", maiListData);
  return (
    <Pane height="100vh" flex={1} width="100%" padding={10}>
      <Pane marginY={20}>
        <SearchInput
          width="100%"
          height={40}
          value={filterBy}
          onChange={(event) => handleSearchInputChange(event.target.value)}
        />
      </Pane>
      <Pane className="mail-list-wrapper">
        {maiListData
          ?.filter((item) =>
            filterBy ? item.subject.includes(filterBy) : true
          )
          ?.map((mail) => (
            <Pane
              key={mail}
              className={
                activeListCard === mail?.id
                  ? "mail-list-view-active-card"
                  : "mail-list-view-card"
              }
              onClick={() => handleSelectCard(mail)}
            >
              <Pane className="mail-list-view-card-header">
                <Avatar name="Jeroen Ransijn" size={20} />
                <Heading marginLeft={10} size={500}>
                  {mail?.userId}
                </Heading>
              </Pane>
              <Pane className="mail-list-view-card-content">
                <Text>{mail?.subject}</Text>
              </Pane>
            </Pane>
          ))}
      </Pane>
    </Pane>
  );
};

export default MailListView;
