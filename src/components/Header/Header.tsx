import * as React from "react";
import "./header.scss";
import { AppBar, Toolbar, Avatar } from "@material-ui/core";

export interface HeaderProp {
  name?: string;
  imageSrc?: string;
}
export const Header: React.FC<HeaderProp> = ({
  name,
  children,
  imageSrc,
  ...props
}) => {
  return (
    <div>
      <AppBar className="headerBar" {...props}>
        <Toolbar>
          <div className="headerLeft">
            <Avatar alt="user profile" src={imageSrc} />
            <h4 className="userName">{name}</h4>
          </div>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};
