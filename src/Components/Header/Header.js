import React, { useState } from "react";
import "./Header.css";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeMaxIcon from "@mui/icons-material/HomeMax";
import PersonIcon from "@mui/icons-material/Person";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PageviewIcon from "@mui/icons-material/Pageview";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

function Header() {
  const [menu, setMenu] = useState(false);

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={() => setMenu(false)}
      onKeyDown={() => setMenu(false)}
    >
      <List>
        {["Home", "About", "Skills"].map((text, index) => (
          <a href={`#${index === 0 ? "home" : index === 1 ? "about" : "skills"}`}>
            <ListItem
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <HomeMaxIcon />
                  ) : index === 1 ? (
                    <PersonIcon />
                  ) : (
                    <WorkspacePremiumIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
      <Divider />
      <List>
        {["Projects", "Contact"].map((text, index) => (
          <a href={`#${index === 0 ? "projects" : "contact"}`}>
            <ListItem
              key={text}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <PageviewIcon /> : <PermContactCalendarIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="header-main">
      <div className="header-logo">Yash Yeole</div>
      <div className="header-sections">
        <a
          href="#home"
          className="header-a"
        >
          Home
        </a>
        <a
          href="#about"
          className="header-a"
        >
          About
        </a>
        <a
          href="#skills"
          className="header-a"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="header-a"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="header-a"
        >
          Contact
        </a>
      </div>
      <div
        className="header-mobile-main"
        onClick={() => setMenu(true)}
      >
        <div className="header-mobile-logo">Yash Yeole</div>
        <div className="header-mobile-menu">
          <WidgetsIcon />
        </div>
      </div>
      {menu === true ? (
        <div className="header-mobile-bottom-menu">
          <Drawer
            anchor="bottom"
            open={() => setMenu(false)}
            onClose={() => setMenu(false)}
          >
            {list()}
          </Drawer>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
