import { CreateListing3, ProductDetailApproval, ProductDetail } from "./pages";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Addtocart } from "./pages/AddtoCart/Addtocart";
import ListingSection from "./pages/Listing-Section/BiddingSection";
import BiddingSection from "./pages/Bidding-Section/BiddingSection";
import { ProductList } from "./pages/Product-list-1/Product-list-1";
import BiddingPost from "./pages/BiddingPost/BiddingPost";
import Sold from "./pages/Sold/sold";
import Followers from "./pages/Followers/followers";
import Home from "./pages/Home/home";
import Rating from "./pages/Rating/rating";
import AllPosting from "./pages/AllPosting/AllPosting";
import MyProfile from "./pages/MyProfile/MyProfile";
import Draft from "./pages/Draft/Draft";
import MyLikes from "./pages/MyLikes/MyLikes";
import BillingForm from "./pages/BillingForm/BillingForm";
import MyPurchase from "./pages/MyPurchase/MuyPurchase";
import MypurchaseDetails from "./pages/MyPurchaseDetails/MyPurchaseDetails";
import Completed from "./pages/MyOrders/Completed/Completed";
import InProgress from "./pages/MyOrders/InProgress.js/InProgress";
import UnPaid from "./pages/MyOrders/UnPaid/Unpaid";
import Listing from "./pages/Listing/Listing";
import { ApplicationReview } from "./pages/ApplicationReview/Application";
import SignUp from "./pages/Signup/signup";
import CreateListing from "./pages/CreateListing/createListing";
import CreateListing1 from "./pages/Create-listing-1/createListing1";
import CreateListing2 from "./pages/Create-listing-2/createListing2";
import varification from "./pages/VarificationPage/index";
import GeoLocation from "./components/Location/GeoLocation";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import MostRecent from "./pages/MostRecent/MostRecent";
import About from "./pages/About/About";
import ContectUs from "./pages/ContectUs/ContectUs";
import ProhibitedItems from "./pages/ProhibitedItems/ProhibitedItems";
import Privacy from "./pages/Privacy/Privacy";
import Press from "./pages/Press/Press";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Blog from "./pages/Blog/Blog";
import Popular from "./pages/Popular/Popular";
import Brands from "./pages/Brands/Brands";
import Categories from "./pages/Categories/Categories";
import Hairlaya from "./pages/Hairlaya/Hairlaya";
import CategoriesSection from "./pages/CategoriesSection/CategoriesSection";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import NewPassword from "./pages/NewPassword/NewPassword";
import React from "react";
import SubCategories from "./pages/SubCategories/SubCategories";
import Terms from "./pages/Terms/Terms";
 
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create_listing_1" component={CreateListing} />
        <Route path="/create_listing_2" component={CreateListing1} />
        <Route path="/create_listing_3" component={CreateListing2} />
        <Route path="/create_listing_4" component={CreateListing3} />
        <Route path="/all_posting" component={AllPosting} />
        <Route path="/product_detail" component={ProductDetail} />
        <Route path="/product_detail_approval" component={ProductDetailApproval} />
        <Route path="/BiddingSection" component={BiddingSection} />
        <Route path="/ListingSection" component={ListingSection} />
        <Route path="/ProductList" component={ProductList} />
        <Route path="/AddtoCart" component={Addtocart} />
        <Route path="/sold" component={Sold} />
        <Route path="/listing" component={Listing} />
        <Route path="/followers" component={Followers} />
        <Route path="/rating" component={Rating} />
        <Route path="/my_profile" component={MyProfile} />
        <Route path="/draft" component={Draft} />
        <Route path="/my_likes" component={MyLikes} />
        <Route path="/billing_form" component={BillingForm} />
        <Route path="/my_purchase" component={MyPurchase} />
        <Route path="/my_purchase_details" component={MypurchaseDetails} />
        <Route path="/my_orders_completed" component={Completed} />
        <Route path="/BiddingPost" component={BiddingPost} />
        <Route path="/in_progress" component={InProgress} />
        <Route path="/un_paid" component={UnPaid} />
        <Route path="/application_review" component={ApplicationReview} />
        <Route path="/verification" component={varification} />
        <Route path="/GeoLocation" component={GeoLocation} />
        <Route path="/most_recent" component={MostRecent} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/about-us" component={About} />
        <Route path="/contect-us" component={ContectUs} />
        <Route path="/prohibited" component={ProhibitedItems} />
        <Route path="/privacy_policy" component={Privacy} />
        <Route path="/press" component={Press} />
        <Route path="/help-center" component={HelpCenter} />
        <Route path="/blog" component={Blog} />
        <Route path="/popular" component={Popular} />
        <Route path="/brands" component={Brands} />
        <Route path="/categories" component={Categories} />
        <Route path="/hairlaya" component={Hairlaya} />

        <Route path="/categoriesSection" component={CategoriesSection} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/terms_of_use" component={Terms} />
        <Route path="/newpassword/:token" component={NewPassword} />

        <Route path="/:category" component={SubCategories} />
        {/* <Route path="/:category" component={CategoryItems} /> */}
      </Switch>
    </div>
  );
};

// My profile
// My Purchase
// My Postings
//

export default App;
