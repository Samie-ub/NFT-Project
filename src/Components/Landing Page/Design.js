import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React from "react"
import "./design_styles.css"
// ELEMENT STYLING STARTS HERE
import { ConImg, ConImgTwo } from "../Assets/index"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#000",
    padding: "0rem 0 2rem 0",
    fontFamily: "Montserrat"
  },
  contentHeading: {
    color: "#fff",
    fontSize: "72px",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: "87px"
  },
  contentPara: {
    color: "#fff",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "37px",
    margin: "10px"
  },
  contentImg: {
    width: "100%"
  },
  imgContainer: {}
}))

// ELEMENT Data Here
const data = [
  {
    contentHeading: " The HOM-NFT Minting App",
    contentpara:
      "The HOM-NFT Minting app will provide an easy way to turn any property into a NFT, and then bond it for HOM tokens and earn passive income from staking. Contributions to HOM DAO are used to fund the development of this innovative new crypto platform.",
    imgSrc: ConImgTwo,
    imgLabel: "Mint and bond an NFT",
    itemAlign: "flex-start",
    wraping: "wrap-reverse",
    direction: "row",
    class: "imgLabel"
  },
  {
    contentpara:
      "The HOM-NFT Minting app will provide an easy way to turn any property into a NFT, and then bond it for HOM tokens and earn passive income from staking. Contributions to HOM DAO are used to fund the development of this innovative new crypto platform.",
    imgSrc: ConImg,
    imgLabel: "Mint and bond an NFT",
    itemAlign: "flex-start",
    direction: "row-reverse",
    wraping: "wrap-reverse",
    class: "imgLabelTwo"
  }
]
function Design() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* MAIN GRID CONTAINER */}
      <Grid container justifyContent="center" alignContent="center">
        {/* MAIN GRID ITEM */}
        <Grid item xs={12} md={11} lg={11}>
          {/* GRID CONTAINER FOR CONTENT */}
          {data.map(content => {
            return (
              <Grid
                container
                justifyContent="space-around"
                direction={content.direction}
                alignItems={content.itemAlign}
                wrap={content.wraping}
              >
                <Grid item xs={10} md={7} lg={6}>
                  <h1 className={classes.contentHeading}>
                    {content.contentHeading}
                  </h1>
                  <p className={classes.contentPara}>{content.contentpara}</p>
                </Grid>
                <Grid item xs={10} md={4} lg={4}>
                  <div className={classes.imgContainer}>
                    <img
                      src={content.imgSrc}
                      alt="brand images"
                      className={classes.contentImg}
                    />
                    <p className={content.class}>{content.imgLabel}</p>
                  </div>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </div>
  )
}

export default Design
