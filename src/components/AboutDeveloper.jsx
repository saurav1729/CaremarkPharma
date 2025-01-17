import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutDeveloper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const skills = [
    "React.js",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "Next.js",
    "JavaScript", 
    "Python",
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4, px: 2 }}>
      <Card sx={{ maxWidth: 'w-screen', width: '100%'}}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src="https://media.licdn.com/dms/image/v2/D5603AQE_xD-kd2C0QA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710159591417?e=2147483647&v=beta&t=deKLmSdAVDGF9MwtEAy5WonLUcIih15vGBhFvVmdTiw"
                  alt="Saurav Kumar Jha"
                  sx={{ width: 80, height: 80, mb: 1 }}
                />
                <Typography variant="h6" component="div" align="center">
                  Saurav Kumar Jha
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 1 }}>
                  Web Developer & ML Engineer
                </Typography>
                <Box>
                  <IconButton
                    href="https://in.linkedin.com/in/saurav-jha-574171279"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    href="https://www.instagram.com/mihirsaurav"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    href="https://github.com/saurav1729"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body2" paragraph>
                Passionate Web Developer and Machine Learning Engineer with a track record of creating innovative solutions. B.Tech Computer Science student at KIIT, specializing in modern web technologies and committed to delivering clean, efficient code.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Key Skills:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: '0.7rem' }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutDeveloper;

