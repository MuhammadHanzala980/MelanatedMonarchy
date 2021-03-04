import user from "../assets/images/my-Profile/user.svg";
import buy from "../assets/images/my-Profile/buy.svg";
import dollar from "../assets/images/my-Profile/dollar.svg";
import heart from "../assets/images/my-Profile/heart.svg";
import posting from "../assets/images/my-Profile/posting.svg";
import logout from "../assets/images/my-Profile/logout.svg";
const profileIcon=[
    {Img:user},
    {Img:posting},
    {Img:posting},
    {Img:heart},
    {Img:buy},
    {Img:dollar},
    {Img:logout},

];

const profileText=[
    {text:'My Profile'},
    {text:'My Posting',
    allpost:[
        {text:'All Posting'},
        {text:'Most Recent'},
        {text:'Active'},
        {text:'In Active'},
    ]
},
    {text:'Draft'},
    {text:"My Like's"},
    {text:'My Purchase'},
    {text:'Billing'},
    {text:'Logout'},
];





// const route=[
//     {
//         path:'/myProfile',
//         component:MyProfile
//     }
//     ,{
//         path:"/listing",
//         component:MyPosting
//     },
//     {
//         path:'/Draft',
//         component:Draft
//     },
//     {
//         path:'/Like',
//         component:Like
//     }
// ];
export {profileText,profileIcon};