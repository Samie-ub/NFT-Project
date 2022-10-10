import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React from "react"
import "./design_styles.css"

// ELEMENT STYLING STARTS HERE

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#000",
    padding: "2rem 0",
    fontFamily: "Montserrat"
  },
  mainContainer: {
    backgroundColor: "#4A2CD4",
    borderTopRightRadius: "6rem",
    borderBottomRightRadius: "6rem"
  },
  roadmapHeading: {
    color: "#fff",
    fontSize: "44px",
    lineHeight: "68px",
    fontWeight: "500"
  },
  numberText: {
    fontSize: "72px",
    color: "#fff",
    margin: "0",
    fontWeight: "600",
    fontStyle: "normal",
    fontFamily: "Montserrat"
  },
  descHeading: {
    color: "#fff",
    fontSize: "20px",
    lineHeight: "37px"
  },
  descpara: {
    color: "#fff"
  },
  lastContainer: {
    padding: "2rem 0 4rem 0"
  }
}))

const data = [
  {
    number: "01",
    heading: "Bond your HOM-NFT and receive HOM tokens in return",
    para: "Bonding a HOM-NFT is the same idea as bonding crypto, but using real estate instead.. You may bond your HOM-NFT and get up to 110% of the value of your property in HOM tokens, depending upon the eco-rating of the property."
  },
  {
    number: "02",
    heading: "Stake your HOM tokens to generate passive income",
    para: "Once you’ve bonded the HOM-NFT, you can do what you want with your HOM tokens, including staking your HOM tokens to earn passive income. The smart move is to use the staking awards to pay off your HOM bond early and keep the rest to do with as you please."
  },
  {
    number: "03",
    heading: "Rent your property for crypto",
    para: "Rent out your property without any complicated contracts: Each HOM-NFT contains 365 day-NFT’s, one for every day of the year. Sell the day-NFT’s to people who want to use your property on those days. When they stay at your property the day-NFT is used up. It's all paid for with crypto. Simple."
  },
  {
    number: "04",
    heading: "Sell your property without the hassle, even in little pieces",
    para: "Once a property becomes a HOM-NFT, you can create a legal entity within the NFT that makes it easy to buy and sell the property, just like trading crypto. You can even sell fractions of the HOM-NFT to lots of people in exchange for HOM tokens. This way, those who had never before had the chance to participate in real-estate ownership, can join in. "
  },
  {
    number: "05",
    heading: "Double your passive income",
    para: "With the HOM-NFT you can rent your property and bond-stake your HOM- NFT at the same time, generating two streams of revenue instead of just one. It’s like passive income with superpowers!"
  }
]

function Roadmap() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* MAIN CONTAINER */}
      <Grid container>
        {/* MAIN GRID ITEM */}
        <Grid item xs={11} md={11} lg={11} className={classes.mainContainer}>
          {/* HEADING SECTION GRID */}
          <Grid container justifyContent="center">
            <Grid item xs={11} md={11} lg={10}>
              <h1 className={classes.roadmapHeading}>
                5 reasons why you'll want to make a <br /> HOM-NFT of your
                property.
              </h1>
            </Grid>
          </Grid>

          {/* ROADMAP MAIN GRID */}
          <Grid container justifyContent="center" alignItems="flex-start">
            <Grid item xs={10} md={9} lg={8}>
              {/* ROADMAP NESTED GRID */}
              <Grid container className={classes.lastContainer}>
                {data.map(content => {
                  return (
                    <>
                      <Grid item md={2} lg={2}>
                        <h1 className={classes.numberText}>{content.number}</h1>
                      </Grid>
                      <Grid item md={9} lg={10}>
                        <h1 className={classes.descHeading}>
                          {content.heading}
                        </h1>
                        <p className={classes.descpara}>{content.para}</p>
                      </Grid>
                    </>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Roadmap
