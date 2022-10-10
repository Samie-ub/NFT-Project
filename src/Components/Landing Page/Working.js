import React from "react"
import { Container, Grid, makeStyles } from "@material-ui/core"
import { Ellipse2, Ellipse3, Ellipse4, Rect7 } from "../Assets/index"

// ELEMENT STYLING STARTS HERE
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#000",
    padding: "2rem 0",
    fontFamily: "Montserrat"
  },
  mainContainer: {
    backgroundColor: "#1085AA",
    borderTopLeftRadius: "6rem",
    padding: "2rem 0"
  },
  workHeading: {
    color: "#fff",
    fontSize: "44px",
    lineHeight: "68px",
    fontWeight: "700"
  },
  wrapperContainer: {
    padding: "0rem 4rem 0rem 1.3rem",
    // THEME BREAKPOINT FOR SMALL SCREEN

    [theme.breakpoints.down("sm")]: {
      padding: "0rem 2rem 0rem  1.3rem"
    }
  },
  spacingContainer: {
    padding: "3rem 4rem 3rem .5rem",
    // THEME BREAKPOINT FOR SMALL SCREEN

    [theme.breakpoints.down("sm")]: {
      padding: "0rem 1rem 0rem 1.3rem"
    }
  },

  cardImgContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "3rem 0 1rem 0"
  },

  cardImg: {
    width: "75%"
  },

  cardHeading: {
    fontSize: "16px",
    color: "#fff"
  },
  cardPara: {
    fontSize: "16px",
    color: "#fff",
    fontWeight: "lighter",
    lineHeight: "29px"
  },
  // GRID IMG STYLE HERE``
  roadmapImg: {
    width: "100%"
  }
}))

// ELEMENT DATA

const data = [
  {
    imgSrc: Ellipse4,
    cardTitle: " Step 1: Register with the DAO",
    cardDesc:
      " Register with the HOM-NFT minting system and provide proof that you own the property. If you own pHOM or HOM tokens, it's free to use the system."
  },
  {
    imgSrc: Ellipse2,
    cardTitle: " Step 2: Upload the Meta-Data",
    cardDesc:
      " Next, enter all the information about your property. This “meta-data” is the key to your HOM-NFT. In some places HOM DAO may already have complied the meta-data for the property."
  },
  {
    imgSrc: Ellipse3,
    cardTitle: " Step 3: Mint your HOM-NFT",
    cardDesc:
      "  Once the meta-data is collected, minting your HOM-NFT takes seconds. HOM AI bots ensure your NFT meta-data remains up to date and is powered with the latest market data and trends."
  }
]

function Working() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* MAIN GRID CONTAINER */}
      <Grid container justifyContent="flex-end">
        {/* MAIN GRID ITEM */}
        <Grid item xs={11} md={11} lg={11} className={classes.mainContainer}>
          {/* NESTED GRID CONTAINER */}
          <Grid container justifyContent="flex-start">
            {/* NESTED GRID ITEM */}
            <Grid item xs={12} lg={12}>
              <Container className={classes.wrapperContainer}>
                <h1 className={classes.workHeading}>How it works</h1>

                {/* GRID FOR CARDS */}
                <Grid
                  container
                  className={classes.spacingContainer}
                  justifyContent="space-between"
                >
                  {data.map(content => {
                    return (
                      <Grid item xs={12} md={4} lg={3}>
                        <div className={classes.cardImgContainer}>
                          <img
                            src={content.imgSrc}
                            alt="brand"
                            className={classes.cardImg}
                          />
                        </div>
                        <div className={classes.cardContent}>
                          <h1 className={classes.cardHeading}>
                            {content.cardTitle}
                          </h1>
                          <p className={classes.cardPara}>{content.cardDesc}</p>
                        </div>
                      </Grid>
                    )
                  })}
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* IMAGE GRID */}
      <Grid
        container
        className={classes.secondGrid}
        justifyContent="flex-end"
        direction="row"
      >
        <Grid item xs={11} lg={11}>
          <div className={classes.imgContainer}>
            <img src={Rect7} alt="brand" className={classes.roadmapImg} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Working
