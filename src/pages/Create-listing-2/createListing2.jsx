import React, { Component } from "react";
import { PrimaryTemplate, ListingBox } from "../../components";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { CustomCheckbox, RadioButton } from "../../components";
import QuestionMark from "../../assets/images/create_listing_2/qustionmark.png";
import classes from "./createListing2.module.css";
import { createListing } from "../../store/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const RadioOptions = [
  { label: "CL Mail Relay (Recommended)", value: "CL Mail Relay" },
  { label: "Show My Real Email Address", value: "Show My Real Email Address" },
  { label: "No Replies To This Email", value: "No Replies To This Email" },
];

class CreateListing2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: null,
      postEmail: null,
      emailPrivacy: [],
      postNumber: null,
      number_detail: [],
      contactNumber: null,
      jobForDisable: null,
      validatedEmail: false,
      messageErr: "",
    };
  }

  validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      this.setState({ validatedEmail: true });
    }
  }
  value(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
      messageErr: "",
    });
    if (e.target.name === "postEmail") {
      this.validateEmail(e.target.value);
    }
  }
  handleChange(event) {
    let check = event.target.checked;
    let value = event.target.value;
    let items = this.state.number_detail;

    if (check) {
      this.setState({
        number_detail: [...this.state.number_detail, value],
      });
    } else {
      var index = items.indexOf(value);
      if (index > -1) {
        items.splice(index, 1);
        this.setState({
          number_detail: items,
        });
      }
    }
  }

  radioHandleChange(e) {
    console.log(e.target.value);

    this.setState({
      emailPrivacy: e.target.value,
    });
  }

  createList() {
    const { validatedEmail, postEmail, salary, emailPrivacy, postNumber, number_detail, contactNumber, jobForDisable } = this.state;

    if (!validatedEmail) {
      this.setState({
        messageErr: "Please inter valide email !",
      });
    } else if (emailPrivacy.length < 1) {
      this.setState({
        messageErr: "Please inter email privacy !",
      });
    } else if (number_detail.length < 1) {
      this.setState({
        messageErr: "Please inter number detail !",
      });
    } else if (postNumber.length < 11) {
      this.setState({
        messageErr: "Please inter valid number !",
      });
    } else if (contactNumber.length < 11) {
      this.setState({
        messageErr: "Please inter valid contact number !",
      });
    } else {


// 


      const body = this.props.staps;
      body.emailPrivacy = emailPrivacy;
      body.postEmail = postEmail;
      body.salary = "9000";
      body.postNumber = postNumber;
      body.number_detail = number_detail;
      body.contactNumber = contactNumber;
      body.jobForDisable = jobForDisable;
      // body.featured = 1;
      body.expiryDate = "12-12-2021";
      this.props.history.push("/create_listing_3");
      this.props.actions
        .createListing(body)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    }
  }
  render() {
    const { postNumber, extension, contactNumber, postEmail, messageErr } = this.state;
    return (
      <PrimaryTemplate history={this.props.history}>
        <ListingBox num="3 / 3" />
        <Grid className={classes.grid} container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className={classes.box}>
              <div className={classes.heading}>
                <p>Email</p>
              </div>
              <div className={classes.content}>
                <p>Enter Email</p>
                <input placeholder="Abcd@gmail.com" name="postEmail" value={postEmail} onChange={this.value.bind(this)} className={classes.Input} type="text" />
                <p className={classes.privacy}>
                  Email Privacy Options <img alt="questionmark" src={QuestionMark} />
                </p>
                <div className={classes.radio}>
                  <RadioButton options={RadioOptions} onChange={this.radioHandleChange.bind(this)} />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.box}>
              <div className={classes.heading}>
                <p>Number</p>
              </div>
              <div className={classes.content}>
                <CustomCheckbox text="Show My Phone Number" value="Show My Phone Number" onChange={this.handleChange.bind(this)} />
                <CustomCheckbox text="Phone Calls OK" value="Phone Calls OK" onChange={this.handleChange.bind(this)} />
                <CustomCheckbox text="Text/Sms OK" value="Text/Sms OK" onChange={this.handleChange.bind(this)} />
                <p className={classes.privacy}>Enter Phone Number</p>
                <input placeholder="Ex. 021-1234567" name="postNumber" value={postNumber} onChange={this.value.bind(this)} className={classes.Input} type="text" />
                <Grid className={classes.bottomrightgrid} container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <p className={classes.privacy}>Enter Extension</p>
                    <input className={classes.Input} type="text" name="extension" value={extension} onChange={this.value.bind(this)} />
                  </Grid>
                  <Grid className={classes.rightbottomtext} item xs={12} sm={7}>
                    <p className={classes.privacy}>Enter Contact Number</p>
                    <input placeholder="Ex. 0900-78601" name="contactNumber" value={contactNumber} onChange={this.value.bind(this)} className={classes.Input} type="text" />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item xs={11} sm={11}>
            {messageErr && <p>{messageErr} </p>}
          </Grid>
          <Grid justify="center" container>
            <Grid item xs={11} sm={8}>
              <CustomCheckbox text="OK To Highlight This Job Opening For Persons With Disabilities" />
            </Grid>

            <Grid item xs={11} sm={4}>
              {/* <NavLink to="/product_detail_approval"> */}
              <button className={classes.continuebutton} onClick={this.createList.bind(this)}>
                Continue
              </button>
              {/* </NavLink> */}
            </Grid>
          </Grid>
        </Grid>
      </PrimaryTemplate>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        createListing,
      },
      dispatchEvent
    ),
  };
};
const mapStateToProps = (state) => {
  return {
    staps: state.nextStap,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateListing2);
