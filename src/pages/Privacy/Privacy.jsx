import React, { Component } from "react";
import classes from "./Privacy.module.css";
import { PrimaryTemplate } from "../../components";
import { Grid } from "@material-ui/core";

class Privacy extends Component {
  render() {
    return (
      <PrimaryTemplate>
        <div>
          <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", }}>Melanated Monarchy Privacy Policy </h1>
        </div>

        <Grid container justify="center" alignContent="center">
          <Grid item xs={12} sm={10} md={10} lg={8}>
            {/* <div>
              <h1>Melanated Monarchy Privacy Policy</h1>
            </div> */}
            <div>
              <p className={classes.text}>
                This policy details how data about you is used when you access our websites and services, including via our mobile applications (together, "MM") or interact with
                us. If we update it, we will revise the date, place notices on MM if changes are material, and/or obtain your consent as required by law.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={10} md={10} lg={8}>
            <div>
              <h2>1. Protecting your privacy</h2>
            </div>
            <div>
              <ul className={classes.list}>
                <li className={classes.listItem}>We take precautions to prevent unauthorized access to or misuse of data about you.</li>
                <li className={classes.listItem}>We do not run ads, other than the Classifieds posted by our users.</li>
                <li className={classes.listItem}>We do not share your data with third parties for marketing purposes.</li>
                <li className={classes.listItem}>We do not engage in cross-marketing or link-referral programs.</li>
                <li className={classes.listItem}>We do not employ tracking devices for marketing purposes.</li>
                <li className={classes.listItem}>We do not send you unsolicited communications for marketing purposes.</li>
                <li className={classes.listItem}>We do not engage in affiliate marketing (and prohibit it on MM).</li>
                <li className={classes.listItem}>We do provide email proxy & relay services to reduce unwanted email.</li>
                <li className={classes.listItem}>Please review privacy policies of any third-party sites linked to from MM.</li>
                <li className={classes.listItem}>We do not respond to "Do Not Track" signals (see allaboutdnt.com).</li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={10} md={10} lg={8}>
            <div>
              <h2>2. Data we collect, use and disclose:</h2>
            </div>
            <div>
              <p className={classes.text}>
                Below is a list of all the types of data we collect, where we got it, why we collect it and the categories of third parties to whom we disclosed it. We do not sell
                your data to third parties. Please note that disclosure to "Payment processors" applies when you pay for a Melanated Monarchy post using a credit card.
              </p>
            </div>
            <div>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th className={classes.border}>Data type</th>
                    <th className={classes.border}>Where we got it</th>
                    <th className={classes.border}>Why collected</th>
                    <th className={classes.border}>Disclosed to</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.border}>First and last name</td>
                    <td className={classes.border}>User entry</td>
                    <td className={classes.border}>Facilitating transactions and personalizing your use of MM</td>
                    <td className={classes.border}>Payment processors</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Email address</td>
                    <td className={classes.border}>User entry</td>
                    <td className={classes.border}>Account creation, user-to-user and MM-to-user communications and combatting fraud/abuse</td>
                    <td className={classes.border}>No one</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Phone number</td>
                    <td className={classes.border}>User entry</td>
                    <td className={classes.border}>User-to-user communications, combatting fraud/abuse, personalizing your use of MM</td>
                    <td className={classes.border}>Payment processors and phone verification service providers</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Mailing or street address</td>
                    <td className={classes.border}>User entry</td>
                    <td className={classes.border}>Account and post creation, MM communicating with corporate users, facilitating transactions and personalizing your use of MM</td>
                    <td className={classes.border}>Payment processors</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Credit card data</td>
                    <td className={classes.border}>User entry</td>
                    <td className={classes.border}>Facilitating your transactions</td>
                    <td className={classes.border}>Payment processors</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Geographic location (latitude and longitude)</td>
                    <td className={classes.border}>User entry, IP/geolocation providers</td>
                    <td className={classes.border}>Personalizing your use of MM and combatting fraud/abuse</td>
                    <td className={classes.border}>No one</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Photos and other data you voluntarily provide, post on or send via MM</td>
                    <td className={classes.border}>User entry</td>
                    <td className={classes.border}>Facilitating and personalizing your use of MM</td>
                    <td className={classes.border}>No one</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Saved searches, account preferences, favorite/hidden postings</td>
                    <td className={classes.border}>User entry</td>
                    <td className={classes.border}>Facilitating and personalizing your use of MM</td>
                    <td className={classes.border}>No one</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>HTTP browser cookie</td>
                    <td className={classes.border}>User's browser, MM web server</td>
                    <td className={classes.border}>Facilitating and personalizing your use of MM and combatting fraud/abuse</td>
                    <td className={classes.border}>No one</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Information about your device and browser such as device ID, browser version, operating system, plugins</td>
                    <td className={classes.border}>User's browser, mobile app</td>
                    <td className={classes.border}>Combatting fraud/abuse</td>
                    <td className={classes.border}>Service providers that help us combat fraud/abuse</td>
                  </tr>

                  <tr>
                    <td className={classes.border}>Web page views, access times, HTTP headers</td>
                    <td className={classes.border}>User's browser, mobile app</td>
                    <td className={classes.border}>Combatting fraud/abuse</td>
                    <td className={classes.border}>No one</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Grid>

          <Grid item xs={12} sm={10} md={10} lg={8}>
            <div>
              <p className={classes.text}>We may share some or all of the above listed data in the following circumstances:</p>
            </div>
            <div>
              <ul className={classes.list}>
                <li className={classes.listItem}>to respond to subpoenas, search warrants, court orders, or other legal process.</li>
                <li className={classes.listItem}>to protect the rights, property, or safety of MM users, MM, or the general public.</li>
                <li className={classes.listItem}>at your direction (e.g., if you authorize us to share data with other users).</li>
                <li className={classes.listItem}>in connection with a merger, bankruptcy, or sale/transfer of assets.</li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={10} md={10} lg={8}>
            <div>
              <h1>3. Data we store</h1>
            </div>
            <div>
              <ul className={classes.list}>
                <li className={classes.listItem}>We retain data as needed to facilitate and personalize your use of MM, combat fraud/abuse and/or as required by law.</li>
                <li className={classes.listItem}>We make good faith efforts to store data securely, but can make no guarantees.</li>
                <li className={classes.listItem}>You may access and update certain data about you via your account login.</li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={10} md={10} lg={8}>
            <div>
              <h1>4. USA Users:</h1>
            </div>
            <div>
              <p className={classes.text}>
                <b>Right to know:</b> You have the right to request that we disclose the data we collect, use and disclose, and other information relating to data we collect about
                you.
              </p>

              <p className={classes.text}>
                <b>Right to delete:</b> You have the right to request the deletion of data that we have collected from you, subject to certain exceptions.
              </p>

              <p className={classes.text}>
                <b>Right to non-discrimination: </b> You have the right not to receive discriminatory treatment for exercising the rights listed above. You may submit a request to
                know or delete via cs@melanatedmonarchy.com
                <br />
                Only you, or someone you authorize to act on your behalf, may make a request to know or delete your data. An authorized agent may make a request on your behalf by
                providing written permission signed by you.
              </p>
              <p className={classes.text}>
                We will need to confirm your identity before processing your request by asking you to log into your existing account (if you are a registered user) or by asking you
                for additional information, such as a government issued ID, to confirm your identity against information we have already collected.
              </p>
              <p className={classes.text}>
                If you are a registered MM user under the age of 18, you may request (via eraser@melanatedmonarchy.com) and obtain removal of content or information publicly posted
                on MM. Please note that removal does not ensure complete or comprehensive removal of said content or information from the Internet.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={10} md={10} lg={8}>
            <div>
              <h1>5. International Users</h1>
            </div>
            <div>
              <p className={classes.text}>
                By accessing MM or providing us data, you agree we may use and disclose data we collect as described here or as communicated to you, transmit it outside your
                resident jurisdiction, and store it on servers in the United States. For more information, please contact our privacy officer at privacy@melanatedmonarchy.com{" "}
              </p>
            </div>
          </Grid>

          <Grid item xs={12} sm={10} md={10} lg={8}>
            <div>
              <h1>6. Contact</h1>
            </div>
            <div>
              <p className={classes.text}>If you have any questions or concerns about MM's privacy policy and practices please email privacy@melanatedmonarchy.com</p>
            </div>
          </Grid>
        </Grid>
      </PrimaryTemplate>
    );
  }
}

export default Privacy;
