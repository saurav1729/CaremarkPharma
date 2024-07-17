// import React, { useState } from 'react';
// import './styles/card.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// const ProductCard = (props) => {
//     const { data } = props;
//     const [showTitle, setShowTitle] = useState(false);

//     return (
//         <div>
//             <Card
//                 className="h-[20rem] w-[20rem] p-1 bg-[rgba(0,0,0,0.5)] relative border border-[lightgray] rounded-[20px] hover:shadow-lg hover:scale-105 hover:transition-transform hover:shadow-gray-500"
//             >
//                 <CardActionArea
  
//                 >
//                     <CardMedia
//                         component="img"
//                         image={data.imageURL}
//                         alt="product image"
//                         className="h-[15rem] w-[15rem]"
//                     />
//                     {/* {showTitle && ( */}
//                         <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
//                             <CardContent>
//                                 <Typography
//                                     className="font-bold text-green-300 text-xl"
//                                     component="span"
//                                 >
//                                     {data.title}
//                                 </Typography>
//                             </CardContent>
//                         </div>
                  
//                 </CardActionArea>
//             </Card>
//         </div>
//     );
// };

// export default ProductCard;


import React from 'react';
import { useState } from 'react';
import './styles/card.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const productCard = (props) => {
    const { data,customStyle,page } = props;
    const [showTitle, setShowTitle] = useState(false);
  
    console.log(data.imageURL);
    return (
      <div className='flex flex-col justify-center items-center '>
<div 
  onMouseEnter={() => setShowTitle(true)} 
  onMouseLeave={() => setShowTitle(false)} 
  style={customStyle} 
  className={`${page === 'home'? 'card': ''} p-1 bg-[rgba(0,0,0,0.5)] relative border cursor-pointer border-[lightgray] rounded-[20px]`}
>     <img className='img rounded-[20px]' src={data.imageURL} alt="" />
     {showTitle &&
      <div className='absolute h-[97%] w-[97%] bottom-1 rounded-[20px_20px] left-[0.35rem]  z-50 bg-black opacity-30'>
        <div className='z-50 w-full h-full relative '> <span>Hello</span></div>
     
    </div>
     }

      </div>
      <span className='text-center cursor-pointer text-[1.4rem] font-semibold leading-7 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent'>{data.medicineName}</span>
      </div>
      // <div
      //   className="h-[20rem] p-1 bg-[rgba(0,0,0,0.5)] w-[20rem] relative border border-[lightgray] rounded-[20px]"
      //   sx={{ maxWidth: 345 }}
      // >
    
      //     <CardMedia
      //       component="img"
      //       height="140"
      //       style={{ height: "15rem", width: "15rem" }}
      //       image={data.imageURL}
      //       alt="green iguana"
      //     />
      //     <div className="absolute bottom-0 left-0">
      //      {setShowTitle &&
      //       <>
      //       <div>hello</div>
      //       </>
      //      } 
      //     </div>
    
      // </div>
    );
};

export default productCard;
