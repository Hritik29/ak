import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreateIcon from '@mui/icons-material/Create';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';

const About = () => {
  const theme = useTheme();

  const education = [
    {
      degree: 'B.A Journalism & Mass Communication,',
      school: 'Lovely Professional University, Jalandhar',
      period: '2021 - 2024',
      description: 'Focus on modern anchoring, content writing, digital marketing, and social media marketing. Written news articles for the university magazine and also worked on the website content for the same.',
    },
    {
      degree: 'Higher Secondary Education',
      school: 'DAVV School, Gorakhpur',
      period: '2019 - 2021',
      description: 'Focus on modern literature, digital communication, and art of anchoring.',
    },
    {
      degree: 'Secondary Education',
      school: 'DAVV School, Gorakhpur',
      period: '2017 - 2019',
      description: 'Science Stream with Physics, Chemistry, and Mathematics.',
    },
  ];

  const experience = [
    {
      title: 'Senior Content Writer',
      company: 'Techecy Consultancy and Solutions Pvt Ltd · Full-time',
      period: 'Jan 2025 - Present',
      description: 'Leading content strategy and creation for multiple clients, Engaging content created for internation client for the website and social media platforms.',  
    },
    {
      title: 'Senior Content Writer',
      company: 'Arka Informations Private Limited · Full-time',
      period: 'Sept 2024 - Jan 2025',
      description: 'Created engaging content for technology and digital marketing topics, and also worked on the website content for the same. The content was related to health care and medical domain.',
    },
    {
      title: 'Digital Content Writer',
      company: 'RankTech Solutions Private Limited · Full-time',
      period: 'Feb 2024 - Aug2024',
      description: 'This was a full time job where I was responsible for creating content for the website and social media platforms. The content was related to the technology and digital marketing topics.',
    },
    {
      title: 'Digital Writing Intern',
      company: 'Careers360 · Internship',
      period: 'Sep 2023 - Feb 2024',
      description: 'Academic content for Careers360 in the field of medicine and allied sciences. The content was related to the medical entrance exams and the latest news in the medical field.',
    },
  ];

  const skills = [
    {
      title: 'Content Writing',
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
      items: [
        'Blog Posts & Articles',
        'Website Content',
        'Technical Writing',
        'Creative Writing',
        'Copywriting',
      ],
    },
    {
      title: 'Digital Marketing',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      items: [
        'Social Media Marketing',
        'Email Marketing',
        'Content Strategy',
        'Brand Development',
        'Analytics',
      ],
    },
    {
      title: 'SEO',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      items: [
        'Keyword Research',
        'On-page SEO',
        'Content Optimization',
        'Link Building',
        'Technical SEO',
      ],
    },
    {
      title: 'Social Media',
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
      items: [
        'Platform Strategy',
        'Community Management',
        'Content Calendar',
        'Engagement Growth',
        'Analytics Tracking',
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%', pt: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2C3E50 0%, #1A252F 100%)',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar
                  sx={{
                    width: 350,
                    height: 250,
                    marginRight: 300,
                    margin: '0 auto',
                    border: '4px solid white',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    borderRadius: '8px',
                  }}
                  src="/src/assets/images/Aboutme.jpg"
                  alt="Profile"
                  loading="lazy"
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography variant="h2" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
                  Content Writer & Brand Storyteller
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
                  I'm a passionate and versatile content writer with experience in creating impactful content for brands, businesses, and academic platforms. Whether it's simplifying medical jargon for student readers or writing website copy that converts clicks into customers, I understand how to tailor words to purpose and platform.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', opacity: 0.9 }}>
                  With a background in writing for both Indian and international clients, I've had the opportunity to work on website projects, academic writing for medicine and education domains, and creative brand messaging. My focus is always on clarity, value, and voice.
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', opacity: 0.9, fontStyle: 'italic' }}>
                  Let's just say I don't write to fill space. I write to make space for action.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          My Skills
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Expertise in content creation and digital marketing
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={6} key={skill.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {skill.title}
                  </Typography>
                  <List>
                    {skill.items.map((item) => (
                      <ListItem key={item} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Education & Experience Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolIcon color="primary" /> Education
              </Typography>
              <Paper elevation={3} sx={{ p: 3 }}>
                {education.map((edu, index) => (
                  <Box key={edu.degree} sx={{ mb: index !== education.length - 1 ? 3 : 0 }}>
                    <Typography variant="h6" gutterBottom>
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {edu.school}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {edu.period}
                    </Typography>
                    <Typography variant="body1">
                      {edu.description}
                    </Typography>
                    {index !== education.length - 1 && <Divider sx={{ mt: 2 }} />}
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WorkIcon color="primary" /> Experience
              </Typography>
              <Paper elevation={3} sx={{ p: 3 }}>
                {experience.map((exp, index) => (
                  <Box key={exp.title} sx={{ mb: index !== experience.length - 1 ? 3 : 0 }}>
                    <Typography variant="h6" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {exp.period}
                    </Typography>
                    <Typography variant="body1">
                      {exp.description}
                    </Typography>
                    {index !== experience.length - 1 && <Divider sx={{ mt: 2 }} />}
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 