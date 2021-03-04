import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { PrimaryTemplate, ListingBox, PostingTypeSelect, CustomCheckbox, Select } from "../../components";
import classes from "./createList1.module.css";
import { nextStap } from "../../store/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CreateListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeType: null,
      compensation: null,
      employeeDetail: [],
      messageErr: "",
    };
  }

  employType(val) {
    this.setState({
      employeeType: val,
    });
  }

  val(e) {
    console.log(e);
  }

  value(e) {
    this.setState({
      [e.target.name]: e.target.value,
      messageErr: "",
    });
  }
  handleChange(event) {
    let check = event.target.checked;
    let value = event.target.value;
    let items = this.state.employeeDetail;

    if (check) {
      this.setState({
        employeeDetail: [...this.state.employeeDetail, value],
      });
    } else {
      var index = items.indexOf(value);
      if (index > -1) {
        items.splice(index, 1);
        this.setState({
          employeeDetail: items,
        });
      }
    }
  }

  next() {
    const { employeeType, compensation, employeeDetail } = this.state;

    if (employeeType === null) {
      this.setState({
        messageErr: "Please select employee type !",
      });
    } else if (employeeDetail.length < 1) {
      this.setState({
        messageErr: "Please inter employee details !",
      });
    } else if (compensation === null) {
      this.setState({
        messageErr: "Please inter compensation !",
      });
    } else {
      const body = this.props.params.staps;
      body.employeeType = employeeType;
      body.employeeDetail = employeeDetail;
      body.compensation = compensation;
      this.props.params.actions.nextStap(body);
      console.log(this.props.params.staps);
      this.props.params.history.push("/create_listing_3");
    }
  }

  render() {
    const { compensation, messageErr } = this.state;
    return (
      <>
        {/* // <ListingBox num="2 / 4" /> */}
        <div className={classes.midiv}>
          <h3 className={classes.heading}>Posting Details</h3>
          <div className={classes.content}>
            <Grid container>
              <Grid className={classes.innerfirstgrid} item xs={12} sm={6} md={6}>
                <p>Employee Type</p>
                <div className={classes.select}>
                  <Select onClick={this.employType.bind(this)} />
                </div>
              </Grid>
              <Grid className={classes.checkboxgrid} item xs={12} sm={6} md={6}>
                <CustomCheckbox text="Direct Contact By Recruiters is Ok" value="Direct Contact By Recruiters is Ok" onChange={this.handleChange.bind(this)} />
                <CustomCheckbox text="Internship" value="Internship" onChange={this.handleChange.bind(this)} />
                <CustomCheckbox text="Non-Profit Organization" value='text="Non-Profit Organization"' onChange={this.handleChange.bind(this)} />
                <CustomCheckbox text="Relocation Assistance Available" value="Relocation Assistance Available" onChange={this.handleChange.bind(this)} />
                <CustomCheckbox text="Telecommuting Ok" value="Telecommuting Ok" onChange={this.handleChange.bind(this)} />
              </Grid>
            </Grid>
          </div>
        </div>
        <div>
          <p>Compensation</p>
          <textarea placeholder="Describe Compensation Here (Please Be As Deatailed As Possible)" name="compensation" value={compensation} onChange={this.value.bind(this)} className={classes.textarea} />
          {messageErr && <p>{messageErr}</p>}
          <button className={classes.continuebutton} onClick={this.next.bind(this)}>
            Continue
          </button>
        </div>
      </>
    );
  }
}

class CreateListing1 extends Component {
  render() {
    return (
      <PrimaryTemplate history={this.props.history}>
        <div className={classes.createListing}>
          <div className={classes.topdiv}>
            <ListingBox num="2 / 3" />
            <p>Please limit each posting to a single area & category, Once per 48 hours</p>
            <p>
              <strong>What type of posting is this :</strong> [See prohibited list before posting]
            </p>
            <div className={classes.select}>
              <PostingTypeSelect />
            </div>
          </div>
          <div className={classes.middiv}>
            <p>
              <strong>What type of category is this :</strong> [See prohibited list before posting]
            </p>
            <div className={classes.select}>
              <Select />
            </div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <div className={classes.textdiv}>
                <label className={classes.chit}>Posting title</label>
                <input className={classes.Input} type="text" />
              </div>
            </Grid>
            <Grid className={classes.grid} item xs={12} sm={4}>
              <label className={classes.chit}>City or Neighbourhood</label>
              <input className={classes.Input} type="text" />
            </Grid>
            <Grid className={classes.grid} item xs={12} sm={4}>
              <label className={classes.chit}>Postal Code</label>
              <input className={classes.Input} type="text" />
            </Grid>

            <Grid className={classes.grid} item xs={12} sm={3}>
              <label className={classes.chit}>Price</label>
              <input className={classes.Input} type="text" />
              <span className={classes.chit}> Minimum Price Should Be $5</span>
            </Grid>
          </Grid>
          <CreateListing params={this.props} />
        </div>
      </PrimaryTemplate>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        nextStap,
      },
      dispatchEvent
    ),
  };
};
const mapStateToProps = (state) => {
  return {
    item: state,
    staps: state.nextStap,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateListing1);
