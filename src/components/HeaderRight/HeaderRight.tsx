import * as React from "react";
import "./headerRight.scss";
import { Menu, MenuItem, Fab, Tooltip } from "@material-ui/core";
import { MoreVert, Add } from "@material-ui/icons";
interface HeaderRight {
  setOpen?: any;
}
export const HeaderRight: React.FC<HeaderRight> = ({ setOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="headerRight">
      <Tooltip title="Add task">
        <Fab className="btn-add" aria-label="add" onClick={() => setOpen(true)}>
          <Add />
        </Fab>
      </Tooltip>
      <Fab className="btn-dot" aria-controls="long-menu">
        <MoreVert />
      </Fab>
      <Menu
        id="long-menu"
        keepMounted
        open={false}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};
