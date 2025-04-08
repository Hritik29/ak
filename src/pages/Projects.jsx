import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Projects = () => {
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Docty.ai (Healthcare Tech Website)',
      description: 'Wrote clean, informative, and user-centered content for their health tech platform, simplifying telehealth services for users across multiple demographics.',
      shortDescription: 'Healthcare tech website content for Docty.ai',
      image: '/src/assets/images/docty.jpg',
      tags: ['Healthcare', 'Website Content', 'UX Writing'],
      link: 'https://docty.ai/',
      details: {
        challenge: 'The client needed clear, accessible content for a diverse user base.',
        solution: 'Created user-centered content that simplified complex healthcare concepts.',
        results: [
          'Improved user understanding of telehealth services',
          'Enhanced user engagement with the platform',
          'Increased conversion rates for key services'
        ],
        technologies: ['UX Writing', 'Healthcare Content', 'Website Copywriting']
      }
    },
    {
      id: 2,
      title: 'Careers360 – Medicine Domain',
      description: 'Authored medically sound academic articles for aspiring healthcare professionals and students preparing for entrance exams in India.',
      shortDescription: 'Academic content for healthcare professionals',
      image: '/src/assets/images/career3600.jpg',
      tags: ['Academic Writing', 'Healthcare', 'Education'],
      link: 'https://medicine.careers360.com/',
      details: {
        challenge: 'Creating accurate, accessible medical content for students.',
        solution: 'Developed comprehensive academic articles with clear explanations.',
        results: [
          'High engagement with student audience',
          'Positive feedback from medical professionals',
          'Increased traffic to educational content'
        ],
        technologies: ['Academic Writing', 'Medical Content', 'Educational Content']
      }
    },
    {
      id: 3,
      title: 'International SEO Projects via RankTech Solutions',
      description: 'Worked with RankTech Solutions—a results-driven digital marketing agency in India—to create SEO-friendly blogs, website content, and metadata (titles/descriptions) for a global clientele. I always aligned content with the client\'s brand voice, industry goals, and search intent to boost organic traffic and engagement.',
      shortDescription: 'International SEO content for global clients',
      image: '/src/assets/images/seo.jpg',
      tags: ['SEO', 'International Content', 'Digital Marketing'],
      link: 'https://ranktechsolutions.com/',
      details: {
        challenge: 'Creating SEO-optimized content for diverse industries and audiences.',
        solution: 'Developed targeted content strategies aligned with client goals.',
        results: [
          'Improved search rankings for target keywords',
          'Increased organic traffic for clients',
          'Enhanced brand visibility across platforms'
        ],
        technologies: ['SEO Writing', 'Content Strategy', 'International Marketing']
      }
    },
    {
      id: 4,
      title: 'Arka Informations (Tech Website)',
      description: 'Delivered SEO-optimized website content for a B2B IT service provider, highlighting service offerings and boosting engagement.',
      shortDescription: 'B2B tech website content',
      image: '/src/assets/images/arka.jpg',
      tags: ['B2B', 'Tech Content', 'Website Copywriting'],
      link: 'https://arkainformations.com/',
      details: {
        challenge: 'Creating compelling B2B content for technical services.',
        solution: 'Developed clear, value-focused content highlighting service benefits.',
        results: [
          'Improved website engagement metrics',
          'Enhanced service understanding for potential clients',
          'Increased conversion rates for key services'
        ],
        technologies: ['B2B Writing', 'Tech Content', 'Website Copywriting']
      }
    },
    {
      id: 5,
      title: 'Directed Short Film – Goonj',
      description: 'I directed and wrote the script and dialogues for Goonj, a short film that explores [insert theme if you\'d like]. This project allowed me to bring together narrative, emotion, and visual storytelling from scratch—right from ideation to execution.',
      shortDescription: 'Short film direction and scriptwriting',
      image: '/src/assets/images/goonj.jpg',
      tags: ['Film Direction', 'Scriptwriting', 'Visual Storytelling'],
      link: '#',
      details: {
        challenge: 'Creating a compelling narrative through visual storytelling.',
        solution: 'Developed a complete film from concept to execution.',
        results: [
          'Successful film production and screening',
          'Positive audience reception',
          'Recognition for storytelling excellence'
        ],
        technologies: ['Film Direction', 'Scriptwriting', 'Visual Storytelling']
      }
    },
    {
      id: 6,
      title: 'Anchor & Scriptwriter – Abhi Tak News',
      description: 'I worked as an on-screen anchor for Abhi Tak News, delivering news bulletins, piece-to-camera segments, and special features. I also wrote original scripts for each segment, ensuring clear messaging and audience engagement.',
      shortDescription: 'News anchoring and scriptwriting',
      image: '/src/assets/images/abhitak.jpg',
      tags: ['Broadcast Journalism', 'Scriptwriting', 'On-Camera Performance'],
      link: '#',
      details: {
        challenge: 'Creating engaging news content for diverse audiences.',
        solution: 'Developed clear, informative scripts and delivered them effectively.',
        results: [
          'Increased viewer engagement',
          'Positive audience feedback',
          'Enhanced news presentation quality'
        ],
        technologies: ['Broadcast Journalism', 'Scriptwriting', 'On-Camera Performance']
      }
    }
  ];

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box sx={{ width: '100%', pt: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
          color: '#FFFFFF',
          py: 8,
          mb: 6,
          boxShadow: '0 4px 20px rgba(30, 58, 138, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              📂 Featured Work
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
              A showcase of my content writing and creative projects
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {project.shortDescription}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(59, 130, 246, 0.06)',
                            color: '#64748B',
                            border: '1px solid rgba(59, 130, 246, 0.1)',
                            '&:hover': {
                              backgroundColor: 'rgba(59, 130, 246, 0.08)',
                              borderColor: 'rgba(59, 130, 246, 0.15)',
                              color: '#475569',
                            },
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleOpen(project)}
                        startIcon={<LaunchIcon />}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        href={project.link}
                        target="_blank"
                        startIcon={<LaunchIcon />}
                      >
                        Visit Project
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Details Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {selectedProject.title}
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Box>
              <Typography variant="h6" gutterBottom>
                Challenge
              </Typography>
              <Typography paragraph>
                {selectedProject.details.challenge}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Solution
              </Typography>
              <Typography paragraph>
                {selectedProject.details.solution}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Results
              </Typography>
              <ul>
                {selectedProject.details.results.map((result, index) => (
                  <li key={index}>
                    <Typography>{result}</Typography>
                  </li>
                ))}
              </ul>
              <Typography variant="h6" gutterBottom>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedProject.details.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      color: 'white',
                    }}
                  />
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button
                variant="contained"
                color="primary"
                href={selectedProject.link}
                target="_blank"
                startIcon={<LaunchIcon />}
              >
                Visit Project
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects; 