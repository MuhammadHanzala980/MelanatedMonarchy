import React, { Component } from "react";
import classes from "./Terms.module.css";
import { PrimaryTemplate } from "../../components";
import { Grid } from "@material-ui/core";

class Terms extends Component {
  render() {
    return (
      <PrimaryTemplate>
        <div>
          <h1 style={{ textAlign: "center", textDecoration: "underline", padding: "20px 0px 0px", }}>Melanated Monarchy Terms </h1>
        </div>

        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8}>
            <div>
              <p className={classes.text}>
                <b className={classes.heading}>WELCOME TO MELANATED MONARCHY.</b>
                 We (MELANATED MONARCHY.) hope you find it useful. By accessing or otherwise interacting with our servers, services, websites, mobile app ("App"), or any associated
                content/postings (together, "MM"), you agree to these Terms of Use ("TOU"). You acknowledge and agree MM is a private site owned and operated by MELANATED MONARCHY.
                If you are accessing or using MM on behalf of a business, you represent and warrant to MM that you have authority to accept the TOU on behalf of that business and
                that that business agrees to the TOU. If you do not agree to the TOU, you are not authorized to use MM or download the App. We may modify the TOU at any time in our
                sole discretion. You are responsible for periodically checking for changes and are bound by them if you continue to use MM. Our privacy policy
                <br />
                <a className={classes.link} href="https://melanatedmonarchy.com/privacy_policy" target="blank">
                  {" "}
                  (melanatedmonarchy.com/privacy_policy)
                </a>
                , prohibited list{" "}
                <a className={classes.link} href="https://melanatedmonarchy.com/prohibited" target="blank">
                  (melanatedmonarchy.com/prohibited)
                </a>
                , and all other policies, site rules, and agreements referenced below or on MM, are fully incorporated into this TOU, and you agree to them as well.
              </p>

              <p className={classes.text}>
                <b className={classes.heading}>LICENSE.</b>
                 If you agree to the TOU and (1) are of sufficient age and capacity to use MM and be bound by the TOU, or (2) use MM on behalf of a business, thereby binding that
                business to the TOU, we grant you a limited, revocable, non-exclusive, non-assignable license to use MM in compliance with the TOU; unlicensed use is unauthorized.
                You agree not to display, "frame," make derivative works, distribute, license, or sell, content from MM, excluding postings you create. You grant us a perpetual,
                irrevocable, unlimited, worldwide, fully paid/sublicensable license to use, copy, display, distribute, and make derivative works from content you post.
              </p>

              <p className={classes.text}>
                <b className={classes.heading}>USE.</b>
                Unless licensed by us in a separate written or electronic agreement, you agree not to use or provide software (except our App and general purpose web browsers and
                email clients) or services that interact or interoperate with MM, e.g. for downloading, uploading, creating/accessing/using an account, posting, flagging, emailing,
                searching, or mobile use. You agree not to copy/collect MM content via robots, spiders, scripts, scrapers, crawlers, or any automated or manual equivalent (e.g., by
                hand). Misleading, unsolicited, and/or unlawful postings/communications/accounts are prohibited, as is buying or selling accounts. You agree not to post content
                that is prohibited by any of MM's policies or rules referenced above ("Prohibited Content"). You agree not to abuse MM's flagging or reporting processes. You agree
                not to collect MM user information or interfere with MM. You agree we may moderate MM access/use in our sole discretion, e.g., by blocking, filtering,
                re-categorizing, re-ranking, deleting, delaying, holding, omitting, verifying, or terminating your access/license/account. You agree (1) not to bypass said
                moderation, (2) we are not liable for moderating or not moderating, and (3) nothing we say or do waives our right to moderate, or not. Unless licensed by us in a
                separate written or electronic agreement, you agree not to (i) rent, lease, sell, publish, distribute, license, sublicense, assign, transfer, or otherwise make
                available MM or our application programming interface ("API"), (ii) copy, adapt, create derivative works of, decompile, reverse engineer, translate, localize, port
                or modify the App, the API, any website code, or any software used to provide MM, (iii) combine or integrate MM or the API with any software, technology, services,
                or materials not authorized by us, (iv) circumvent any functionality that controls access to or otherwise protects MM or the API, or (v) remove or alter any
                copyright, trademark or other proprietary rights notices. You agree not to use MM or the API in any manner or for any purpose that infringes, misappropriates, or
                otherwise violates any intellectual property right or other right of any person, or that violates any applicable law.
              </p>

              <p className={classes.text}>
                <b className={classes.heading}>LIQUIDATED DAMAGES.</b>
                You further agree that if you violate the TOU, or you encourage, support, benefit from, or induce others to do so, you will be jointly and severally liable to us
                for liquidated damages as follows for: (A) collecting/harvesting MM users' information, including personal or identifying information - $1 per violation; (B)
                publishing/misusing personal or identifying information of a third party in connection with your use of MM without that party's express written consent - $1,000 per
                violation; (C) misrepresenting your identity or affiliation to anyone in connection with your use of MM - $1,000 per violation; (D) posting or attempting to post
                Prohibited Content - $4 per violation; (E) posting or attempting to post Prohibited Content in any paid section of MM - the price per post applicable to that
                section of MM; (F) sending an unauthorized/unsolicited email to an email address obtained from MM - $25 per violation; (G) using MM user information to make/send an
                unauthorized/unsolicited text message, call, or communication to a MM user - $500 per text/call/communication; (H) creating a misleading or unlawful MM account or
                buying/selling a MM account - $4 per violation; (I) abusing or attempting to abuse MM's flagging or reporting processes - $1 per violation; (J) distributing any
                software to facilitate violations of the USE Section - $1,000 per violation; (K) aggregating, displaying, framing, copying, duplicating, reproducing, making
                derivative works from, distributing, licensing, selling, or exploiting MM content for any purpose without our express written consent - $3,000 for each day you
                engage in such violations; (L) requesting, viewing, or accessing more than 1,000 pages of MM in any 24-hour period - $0.25 per page during the 24 hour period after
                the first 1,000 pages; (M) bypassing or attempting to bypass our moderation efforts - $4 per violation. You agree that these amounts are (1) a reasonable estimate
                of our damages (as actual damages are often difficult to calculate), (2) not a penalty, and (3) not otherwise limiting on our ability to recover under any legal
                theory or claim, including statutory damages and other equitable relief (e.g., for spam, we can elect between the above liquidated damages or statutory damages
                under the anti-spam statute). You further agree that repeated violations of the USE section will irreparably harm and entitle us to injunctive or equitable relief,
                in addition to monetary damages.
              </p>

              <p className={classes.text}>
                <b className={classes.heading}>FEES.</b>
                When you make a paid posting{" "}
                <a href="" target="blank">
                  {" "}
                  (MM.com/help/posting-fees)
                </a>
                , you authorize us to charge your account. Any tax is additional. Fees are non-refundable, even for posts we remove, delay, omit, re-categorize, re-rank, or
                otherwise moderate. We may refuse any posting.
              </p>

              <p className={classes.text}>
                <b className={classes.heading}>DISMMAIMER & LIABILITY. </b>
                To the full extent permitted by law, MELANATED MONARCHY., and its officers, directors, employees, agents, licensors, affiliates, and successors in interest ("MM
                Entities") (1) make no promises, warranties, or representations as to MM, including its completeness, accuracy, availability, timeliness, propriety, security or
                reliability; (2) provide MM on an "AS IS" and "AS AVAILABLE" basis and any risk of using MM is assumed by you; (3) disclaim all warranties, express or implied,
                including as to accuracy, merchantability, fitness for a particular purpose, and non-infringement, and all warranties arising from course of dealing, usage, or
                trade practice; and (4) disclaim any liability or responsibility for acts, omissions, or conduct of you or any party in connection with MM. MM Entities are NOT
                liable for any direct, indirect, consequential, incidental, special, punitive, or other losses, including lost profits, revenues, data, goodwill, etc., arising from
                or related to MM, and in no event shall such liability exceed $100 or the amount you paid us in the year preceding such loss. Some jurisdictions restrict or alter
                these disclaimers and limits, so some may not apply to you.
              </p>

              <p className={classes.text}>
                <b className={classes.heading}></b>
              </p>

              <p className={classes.text}>
                <b className={classes.heading}>CLAIMS & INDEMNITY.</b>
                 Any claim, cause of action, demand, or dispute arising from or related to MM ("claims") will be governed by the internal laws of South Carolina, without regard to
                conflict of law provisions, except to the extent governed by US federal law. Any claims will be exclusively resolved by courts in Walterboro, SC (except we may seek
                preliminary or injunctive relief anywhere). You agree to (1) submit to the personal jurisdiction of courts in Walterboro, SC; (2) indemnify and hold MM Entities
                harmless from any claims, losses, liability, or expenses (including attorneys' fees) that arise from a third party and relate to your use of MM; and (3) be liable
                and responsible for any claims we may have against your officers, directors, employees, agents, affiliates, or any other party, directly or indirectly, paid,
                directed or controlled by you, or acting for your benefit.
              </p>

              <p className={classes.text}>
                <b className={classes.heading}>MISC.</b>
                Unless you have entered into a separate written or electronic agreement with us that expressly references the TOU, this is the exclusive and entire agreement
                between us and you, and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral. Users complying
                with prior written licenses may access MM thereby until authorization is terminated. Our actions or silence toward you or anyone else does not waive, modify, or
                limit the TOU or our ability to enforce it. The USE, LIQUIDATED DAMAGES, and CLAIMS & INDEMNITY sections survive termination of the TOU, and you will remain bound
                by those sections. If a TOU term is unenforceable, it shall be limited to the least extent possible and supplemented with a valid provision that best embodies the
                intent of the parties. The English version of the TOU controls over any translations.
              </p>
            </div>
          </Grid>
        </Grid>
      </PrimaryTemplate>
    );
  }
}

export default Terms;
