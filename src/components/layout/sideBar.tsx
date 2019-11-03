import React from "react"
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined"
import { myStyles } from "../../style/my-styles"

const SideBar: React.FC = () => {
  const classes = myStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      open={true}
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <DeleteOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <DeleteOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar
