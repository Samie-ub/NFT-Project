import { Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { discord, instagram, medium, twitter, book } from "../Assets/index"
// ELEMENTS STYLING STARTS HERE
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Montserrat"
  },
  mainGrid: {
    padding: "2rem 0rem"
  },
  ul_list: {
    display: "inline",
    // THEME BREAKPOINT FOR SMALL SCREEN

    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem"
    }
  },
  li_list: {
    display: "inline"
  },
  icons: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center"
  },
  images: {
    width: "35px"
  },
  textAchor: {
    cursor: "pointer"
  },
  iconAnchor: {
    cursor: "pointer"
  },
  copyRighst: {
    marginTop: "1rem",

    display: "flex",
    justifyContent: "center"
  }
}))

const data = [
  { image: discord },
  { image: instagram },
  { image: medium },
  { image: twitter },
  { image: book }
]

function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* <Container> */}
      <Grid
        container
        className={classes.mainGrid}
        justifyContent="center"
        alignItems="center"
      >
        {/* CopyRights Area Grid */}
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.copyRighst}>
          <Grid container justifyContent="center">
            <Grid item xs={3} sm={3} md={3} lg={2}>
              <Typography variant="body" className={classes.textAchor}>
                Contact Us
              </Typography>
            </Grid>

            <Grid item xs={5} sm={4} md={3} lg={3}>
              <Typography variant="body" className={classes.textAchor}>
                Terms and Conditions
              </Typography>
            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Typography variant="body" className={classes.textAchor}>
                Privacy Policy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Social Icons Grid */}
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.icons}>
          {data.map(content => {
            return (
              <ul className={classes.ul_list}>
                <li className={classes.li_list}>
                  <a href={content.url} className={classes.iconAnchor}>
                    <img
                      src={content.image}
                      alt={content.alt}
                      className={classes.images}
                    />
                  </a>
                </li>
              </ul>
            )
          })}
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  )
}

export default Footer
