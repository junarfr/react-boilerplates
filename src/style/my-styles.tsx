import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

const drawerWidth = 240

export const myStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: ['"90"', "sans-serif"].join(","),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      marginLeft: drawerWidth,
    },
  })
)
