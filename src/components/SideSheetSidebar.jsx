import {
  AlignJustifyIcon,
  Button,
  IconButton,
  Pane,
  Paragraph,
  Position,
  SideSheet,
  Text,
} from 'evergreen-ui';
import React, { useState } from 'react';

const SideSheetSidebar = ({ handleListFilterByTag }) => {
  const [isShown, setIsShown] = React.useState(false);
  const [activeOption, setActiveOption] = useState('Inbox');
  const sidebarOptions = [
    { label: 'All Mail' },
    { label: 'Inbox' },
    { label: 'Draft' },
    { label: 'Spam' },
    { label: 'Trash' },
  ];

  const handleOptionSelect = (value) => {
    handleListFilterByTag(value);
    setActiveOption(value);
  };
  return (
    <div className="sidesheet-sidebar">
      <React.Fragment>
        <SideSheet
          position={Position.Left}
          isShown={isShown}
          onCloseComplete={() => setIsShown(false)}
          width={300}
        >
          <Pane padding={10}>
            {sidebarOptions?.map((sidebar) => (
              <Pane
                height={50}
                onClick={() => handleOptionSelect(sidebar?.label)}
                borderRadius={5}
                borderBottom="muted"
                padding={10}
                backgroundColor={activeOption === sidebar?.label && '#0051FE'}
              >
                <Text color={activeOption === sidebar?.label && 'white'}>
                  {sidebar?.label}
                </Text>
              </Pane>
            ))}
          </Pane>
        </SideSheet>
        <Pane padding={10}>
          <IconButton
            icon={AlignJustifyIcon}
            onClick={() => setIsShown(true)}
          />
        </Pane>
      </React.Fragment>
    </div>
  );
};

export default SideSheetSidebar;
