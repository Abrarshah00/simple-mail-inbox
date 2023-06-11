/* eslint-disable react/prop-types */
import { ArrowLeftIcon, Avatar, Heading, Pane, Text } from "evergreen-ui";
import "../styles/SingleMailViewStyles.scss";

const SingleMailView = ({
  currentSelectedMail,
  handleSingleMailViewToggle,
}) => {
  return (
    <Pane height="100vh" flex={4} padding={20}>
      <Pane className="single-mail-view-box">
        <Pane className="single-mail-view-header">
          <Pane className="single-mailview-back-option" marginY={10}>
            <ArrowLeftIcon onClick={() => handleSingleMailViewToggle(false)} />
          </Pane>
          <Pane display="flex" alignItems="center">
            <Avatar
              marginRight={10}
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
              name="Alan Turing"
              size={40}
            />
            <Text>User ID {currentSelectedMail?.userId}</Text>
          </Pane>
          <Pane marginY={30}>
            <Heading size={600}>{currentSelectedMail?.subject}</Heading>
          </Pane>
        </Pane>
        <Pane>
          <Text>{currentSelectedMail?.body}</Text>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default SingleMailView;
