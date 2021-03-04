import React, { Component } from "react";
import classes from "./ProhibitedItems.module.css";
import { PrimaryTemplate } from "../../components";
import { Grid } from "@material-ui/core";

class ProhibitedItems extends Component {
  render() {
    return (
      <PrimaryTemplate>
        <div>
          <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", }}>Prohibited Items </h1>
        </div>

        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8}>
            <div>
              <h1>Prohibited</h1>
            </div>

            <div>
              <p className={classes.text}>
                Users must comply with all applicable laws, the MM terms of use, and all posted site rules. <br /> Here is a partial list of goods, services, and content prohibited
                on Melanated Monarchy:
              </p>
            </div>

            <div>
              <ul className={classes.list}>
                <li className={classes.listItem}>weapons; firearms/guns and components; BB/pellet, stun, and spear guns; etc</li>
                <li className={classes.listItem}>ammunition, clips, cartridges, reloading materials, gunpowder, fireworks, explosives</li>
                <li className={classes.listItem}>offers, solicitation, or facilitation of illegal prostitution and/or sex trafficking</li>
                <li className={classes.listItem}>exploitation or endangerment of minors; child pornography</li>
                <li className={classes.listItem}>recalled items; hazardous materials; body parts/fluids; unsanitized bedding/clothing</li>
                <li className={classes.listItem}>prescription drugs, medical devices; controlled substances and related items</li>
                <li className={classes.listItem}>alcohol or tobacco; unpackaged or adulterated food or cosmetics</li>
                <li className={classes.listItem}>pet sales (re-homing with small adoption fee ok), animal parts, stud service</li>
                <li className={classes.listItem}>endangered, imperiled and/or protected species and any parts thereof, e.g., ivory</li>
                <li className={classes.listItem}>false, misleading, deceptive, or fraudulent content; bait and switch; keyword spam</li>
                <li className={classes.listItem}>offensive, obscene, defamatory, threatening, or malicious postings or email</li>
                <li className={classes.listItem}>anyone’s personal, identifying, confidential or proprietary information</li>
                <li className={classes.listItem}>food stamps, WIC vouchers, SNAP or WIC goods, governmental assistance</li>
                <li className={classes.listItem}>stolen property, property with serial number removed/altered, burglary tools, etc.</li>
                <li className={classes.listItem}>ID cards, licenses, police insignia, government documents, birth certificates, etc.</li>
                <li className={classes.listItem}>US military items not demilitarized in accord with Defense Department policy</li>
                <li className={classes.listItem}>counterfeit, replica, or pirated items; tickets or gift cards that restrict transfer</li>
                <li className={classes.listItem}>lottery or raffle tickets, sweepstakes entries, slot machines, gambling items</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </PrimaryTemplate>
    );
  }
}

export default ProhibitedItems;
