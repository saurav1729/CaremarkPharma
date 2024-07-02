import React from 'react';
import './styles/card.css';

const Card = (props) => {
    const { data } = props;
    console.log(data.imageURL);
    return (
      <div className='card h-[20rem] p-1 bg-[rgba(0,0,0,0.5)] w-[20rem] relative border border-[lightgray] rounded-[20px]'>
    <img className='img rounded-[20px]' src={data.imageURL} alt="" />
</div>

    );
};

export default Card;

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import style from "./OngoingEventCard/styles/OngoingEventCard.module.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import Share from "../../ShareContainer/Share";
// import shareOutline from "../../../assets/images/shareOutline.svg";
// import groupIcon from "../../../assets/images/groups.svg";
// import rupeeIcon from "../../../assets/images/rupeeIcon.svg";

// const EventCard = (props) => {
//   const {
//     data,
//     onOpen,
//     type,
//     modalpath,
//     customStyles = {},
//     showShareButton = true,
//     showRegisterButton = true,
//     additionalContent,
//   } = props;

//   useEffect(() => {
//     AOS.init({ duration: 2000 });
//   }, []);

//   if (!data) return null;

//   const [isOpen, setOpen] = useState(false);

//   const handleShare = () => {
//     setOpen(!isOpen);
//   };

//   const handlesharebtn = () => {
//     setOpen(false);
//   };

//   const url = window.location.href;

//   return (
//     <>
//       <div className={style.card} style={customStyles.card} data-aos="fade-up">
//         <div className={style.backimg} style={customStyles.backimg} onClick={onOpen}>
//           <img srcSet={data.imageURL} className={style.img} style={customStyles.img} alt="Event" />
//           <div className={style.date} style={customStyles.date}>{data.eventDate}</div>
//           {type === "ongoing" && showShareButton && (
//             <div className={style.share} style={customStyles.share} onClick={handleShare}>
//               <img className={style.shareIcon} style={customStyles.shareIcon} src={shareOutline} alt="Share" />
//             </div>
//           )}
//         </div>
//         <div className={style.backbtn} style={customStyles.backbtn}>
//           <div className={style.eventname} style={customStyles.eventname}>
//             {data.eventName}
//             {type === "ongoing" && (
//               <p>
//                 <img src={groupIcon} alt="Group" />
//                 Team size: {data.teamSize} {" || "}
//                 <div className={style.price} style={customStyles.price}>
//                   {data.eventPrice ? (
//                     <p style={customStyles.eventnamep}>
//                       <img src={rupeeIcon} alt="Rupee" />
//                       {data.eventPrice}
//                     </p>
//                   ) : (
//                     <p style={{ color: "inherit" }}>Free</p>
//                   )}
//                 </div>
//               </p>
//             )}
//           </div>
//           {type === "ongoing" && showRegisterButton && (
//             <div>
//               <button className={style.registerbtn} style={customStyles.registerbtn}>Register Now</button>
//             </div>
//           )}
//         </div>
//         <div className={style.backtxt} style={customStyles.backtxt}>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <div className={style.EventDesc} style={customStyles.EventDesc}>{data.eventDescription}</div>
//             <Link to={modalpath + data.id}>
//               <span onClick={handlesharebtn} className={style.seeMore} style={ { ...customStyles.seeMore,
//                   marginLeft: "auto",
//                   whiteSpace: "nowrap"}} >
//                 See More...
//               </span>
//             </Link>
//           </div>
//           {additionalContent && <div>{additionalContent}</div>}
//         </div>
//       </div>
//       {isOpen && type === "ongoing" && <Share onClose={handleShare} urlpath={url + "/" + data.id} />}
//     </>
//   );
// };

// EventCard.propTypes = {
//   data: PropTypes.object.isRequired,
//   onOpen: PropTypes.func.isRequired,
//   type: PropTypes.string.isRequired,
//   modalpath: PropTypes.string.isRequired,
//   customStyles: PropTypes.object,
//   showShareButton: PropTypes.bool,
//   showRegisterButton: PropTypes.bool,
//   additionalContent: PropTypes.node,
// };

// EventCard.defaultProps = {
//   customStyles: {},
//   showShareButton: true,
//   showRegisterButton: true,
//   additionalContent: null,
// };

// export default EventCard;
