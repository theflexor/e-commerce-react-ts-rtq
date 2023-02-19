import { RouteLinks } from "@components/Router/Router";
import { Box, List, ListItem, Typography, ListItemText } from "@mui/material";
import { GrAppleAppStore } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchInput } from "..";

const Header = () => {
  return (
    <HeaderWpapper>
      <Box className="header-nav">
        <Box>
          <Link to={RouteLinks.MAIN}>
            <GrAppleAppStore size={30} />
          </Link>
        </Box>
        <List className="header-menu">
          <ListItem>
            <ListItemText primary="main" />
          </ListItem>
          <ListItem>
            <ListItemText primary="products" />
          </ListItem>
          <ListItem>
            <ListItemText primary="contacts" />
          </ListItem>
        </List>
        <Box className="header-admin">
          <Link to="/orders">
            <MdOutlineLocalGroceryStore size={20} />
          </Link>
          <Link to="auth">
            <IoPersonOutline size={20} />
          </Link>
        </Box>
      </Box>
      <Box className="header-search">
        <SearchInput />
      </Box>
    </HeaderWpapper>
  );
};

let HeaderWpapper = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    li {
      span {
        font-size: 15px;
      }
    }
  }
  .header-admin {
    display: flex;
    gap: 20px;
  }
`;
export default Header;
