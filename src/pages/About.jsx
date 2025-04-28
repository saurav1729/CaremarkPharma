"use client"

import React from "react"
import { motion } from "framer-motion"
import AboutDeveloper from "../components/AboutDeveloper"

const About = () => {
  return (
    <div className="md:pt-32 pt-20 pb-12">
      {/* Background Elements */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2"></div> */}

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 mb-3 text-sm font-medium text-[#26b5c6] bg-teal-50 border border-teal-100 rounded-full">
            Our Story
          </div>
          <h1 className="text-center">
            <span className="text-gray-500 text-xl md:text-3xl block mb-2">About</span>
            <span className="text-[#26b5c6] text-4xl md:text-6xl font-bold">Caremark</span>{" "}
            <span className="text-[#293649] text-3xl md:text-5xl font-bold">Pharmaceutical</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            Innovating chemical solutions for a healthier tomorrow
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#26b5c6]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#293649]">Company Overview</h2>
              </div>

              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Established in 2021, Caremark Pharmaceutical is a global leader in innovative chemical solutions for the
                  healthcare and research sectors. With a commitment to quality and cutting-edge technology, we serve clients
                  across continents, contributing to advancements in medicine and scientific research.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#293649] mb-3">Our Mission</h3>
                    <p>
                      To develop and deliver high-quality pharmaceutical products that improve the quality of life for patients
                      worldwide, while maintaining the highest standards of safety and efficacy.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-[#293649] mb-3">Our Vision</h3>
                    <p>
                      To be recognized globally as a leading pharmaceutical company that consistently delivers innovative
                      healthcare solutions, earning the trust of patients, healthcare professionals, and communities.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-xl font-semibold text-[#293649] mb-4">Company Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-32 font-medium text-[#293649]">Industry:</span>
                      <span>Manufacture of pharmaceutical-grade chemical products</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 font-medium text-[#293649]">Founded:</span>
                      <span>2021</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 font-medium text-[#293649]">Location:</span>
                      <span>Haridwar, Uttarakhand, India</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 font-medium text-[#293649]">Email:</span>
                      <span>caremark30@gmail.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Developer Section */}
        <AboutDeveloper />
      </div>
    </div>
  )
}

export default About


// import React from 'react';
// import { 
//   Container, 
//   Typography, 
//   Grid, 
//   Card, 
//   CardContent, 
//   Avatar, 
//   Chip, 
//   Divider, 
//   Box,
//   ThemeProvider,
//   createTheme,
//   CssBaseline
// } from '@mui/material';
// import { styled } from '@mui/system';
// import { motion } from 'framer-motion';
// import { AnimatedTestimonials } from '../components/AnimatedTestimonials';
// import AboutDeveloper from '../components/AboutDeveloper';

// // Create a custom theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//   },
// });

// const StyledCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: theme.shadows[10],
//   },
// }));

// const About = () => {
//   const teamMembers = [
//     { 
//       name: "Abdhesh Kumar Jha", 
//       role: "Director of Research & Development", 
//       image: "https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg",
//       bio: "Ph.D. in Pharmaceutical Sciences with over 15 years of experience in drug discovery."
//     },
//     { 
//       name: "Lal Mishra", 
//       role: "Director of Global Operations", 
//       image: "https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg",
//       bio: "MBA from Harvard Business School, expertise in scaling pharmaceutical operations internationally."
//     },
//     { 
//       name: "Surendra Kumar Chaudhary", 
//       role: "Chief Quality Assurance Manager", 
//       image: "https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg",
//       bio: "20+ years in pharmaceutical quality control, ensuring compliance with global standards."
//     },
//     { 
//       name: "Jane Doe", 
//       role: "Lead Scientist, Oncology Division", 
//       image: "https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg",
//       bio: "Pioneering researcher in targeted cancer therapies with multiple patents to her name."
//     },
//     { 
//       name: "John Smith", 
//       role: "Head of Regulatory Affairs", 
//       image: "https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg",
//       bio: "Former FDA consultant, ensuring Caremark's global compliance and market access."
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Dr. Saurav Jha",
//       designation: "Chief Pharmacist, Delhi Medical Center",
//       quote: "Caremark Pharmaceutical has consistently delivered high-quality chemical products that meet our stringent standards. Their commitment to excellence is commendable.",
//       src: "https://media.licdn.com/dms/image/v2/D5603AQE_xD-kd2C0QA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710159591417?e=2147483647&v=beta&t=deKLmSdAVDGF9MwtEAy5WonLUcIih15vGBhFvVmdTiw"
//     },
//     {
//       name: "Salman khan",
//       designation: "Research Scientist, Biotech Innovations",
//       quote: "Working with Caremark has been a game-changer for our research. Their products are reliable and their team is always responsive to our needs.",
//       src: "https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg"
//     },
//     {
//       name: "Saurav Jha",
//       designation: "CEO, HealthCare Solutions",
//       quote: "Caremark's innovative approach to chemical manufacturing has set new industry standards. They're not just a supplier, but a valuable partner in our growth.",
//       src: "https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg"
//     }
//   ];

//   return (
//     <div className='mt-[3rem]'>
//     <ThemeProvider  theme={theme}>
//       <CssBaseline />
//       <Container maxWidth="lg" sx={{ py: 8 }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Typography  align="center" gutterBottom>
//          <span  className='md:text-3xl text-[1.2rem]' style={{color:"gray"}}>About</span>    <span className='md:text-[5rem] text-[2rem]' style={{color:"#23b7ca"}}>Caremark</span>  <span className='text-[2rem] md:text-[4rem] md:ml-2'  style={{color:"#273649"}}>Pharmaceutical </span>
//           </Typography>
//           <Typography variant="h5" align="center"  paragraph>
//             Innovating chemical solutions for a healthier tomorrow
//           </Typography>
//         </motion.div>

//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
//           <Card sx={{ mt: 4, mb: 6 }}>
//             <CardContent>
//               <Typography variant="h4" gutterBottom>Company Overview</Typography>
//               <Typography variant="body1" paragraph>
//                 Established in 2021, Caremark Pharmaceutical is a global leader in innovative chemical solutions for the healthcare and research sectors. With a commitment to quality and cutting-edge technology, we serve clients across continents, contributing to advancements in medicine and scientific research.
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 {/* <strong>Global Presence:</strong> Operating in over 20 countries<br /> */}
//                 {/* <strong>Research Partnerships:</strong> Collaborations with leading universities and research institutions worldwide<br /> */}
//                 <strong>Industry:</strong> Manufacture of pharmaceutical-grade chemical products<br />
//                 {/* <strong>Email:</strong> caremark30@gmail.com */}
//               </Typography>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//         >
//           <Typography variant="h4" align="center" gutterBottom sx={{ mt: 6, mb: 4 }}>
//             Our Team
//           </Typography>
//           <Grid container spacing={4}>
//             {teamMembers.map((member, index) => (
//               <Grid item key={index} xs={12} sm={6} md={4}>
//                 <StyledCard>
//                   <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     <Avatar
//                       src={member.image}
//                       alt={member.name}
//                       sx={{ width: 220, height: 220, mb: 2 }}
//                     />

//                     <Typography gutterBottom variant="h6" component="h3">
//                       {member.name}
//                     </Typography>
//                     <Chip  label={member.role} color="primary" sx={{ mb: 2 }} />
//                     <Typography variant="body2" align="center">
//                       {member.bio}
//                     </Typography>
//                   </CardContent>
//                 </StyledCard>
//               </Grid>
//             ))}
//           </Grid>
//         </motion.div> */}

//         <Divider sx={{ my: 6 }} />
// {/* 
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//         >
//           <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
//             Our Sayings
//           </Typography>
//           <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
//         </motion.div> */}

//         {/* <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//         >
//           <Card sx={{ mt: 6, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
//             <CardContent sx={{ textAlign: 'center' }}>
//               <Typography variant="h4" gutterBottom>About the Developer</Typography>
//               <Avatar
//                 src="https://filmfare.wwmindia.com/photogallery/2023/may/salmankhan11684830563.jpg"
//                 alt="Developer"
//                 sx={{ width: 150, height: 150, mx: 'auto', my: 2 }}
//               />
//               <Typography variant="h5">John Doe</Typography>
//               <Typography variant="subtitle1" sx={{ mb: 2 }}>Senior Full Stack Developer</Typography>
//               <Grid container spacing={2} justifyContent="center" sx={{ mb: 2 }}>
//                 <Grid item>
//                   <Chip label="React" color="secondary" />
//                 </Grid>
//                 <Grid item>
//                   <Chip label="Node.js" color="secondary" />
//                 </Grid>
//                 <Grid item>
//                   <Chip label="GraphQL" color="secondary" />
//                 </Grid>
//                 <Grid item>
//                   <Chip label="AWS" color="secondary" />
//                 </Grid>
//               </Grid>
//               <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
//                 With over a decade of experience in web development, John specializes in creating scalable, efficient, and user-friendly applications. His expertise in React and modern web technologies, combined with a deep understanding of pharmaceutical industry needs, allows him to deliver tailored solutions that drive Caremark's digital presence forward. John's commitment to clean code and innovative problem-solving has been instrumental in developing Caremark's cutting-edge web platforms.
//               </Typography>
//             </CardContent>
//           </Card>
//         </motion.div> */}
//         <AboutDeveloper/>
//       </Container>
//     </ThemeProvider>
//     </div>
//   );
// };

// export default About;

