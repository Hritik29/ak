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
      title: 'E-commerce Content Strategy',
      description: 'Developed comprehensive content strategy for an e-commerce platform, resulting in 150% increase in organic traffic.',
      shortDescription: 'E-commerce content strategy that drove 150% traffic growth',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Content Strategy', 'SEO', 'E-commerce'],
      link: '#',
      details: {
        challenge: 'The client needed a comprehensive content strategy to improve their online presence and drive more organic traffic.',
        solution: 'Developed a multi-channel content strategy including blog posts, product descriptions, and social media content.',
        results: [
          '150% increase in organic traffic',
          '85% improvement in conversion rate',
          '200% growth in social media engagement'
        ],
        technologies: ['Content Strategy', 'SEO', 'Social Media Marketing', 'Analytics']
      }
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      description: 'Created and managed successful social media campaigns for multiple brands, achieving 200% engagement rate.',
      shortDescription: 'Social media campaigns with 200% engagement rate',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Social Media', 'Digital Marketing', 'Campaign Management'],
      link: '#',
      details: {
        challenge: 'Multiple brands needed cohesive social media presence and engagement strategies.',
        solution: 'Developed platform-specific content strategies and engagement tactics.',
        results: [
          '200% increase in engagement rate',
          '150% growth in follower base',
          '300% improvement in brand mentions'
        ],
        technologies: ['Social Media Marketing', 'Content Creation', 'Community Management', 'Analytics']
      }
    },
    {
      id: 3,
      title: 'Blog Content Series',
      description: 'Authored a series of educational blog posts that garnered over 100,000 views and established thought leadership.',
      shortDescription: 'Educational blog series with 100k+ views',
      image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Content Writing', 'Blogging', 'Thought Leadership'],
      link: '#',
      details: {
        challenge: 'Client needed to establish authority in their industry through content.',
        solution: 'Created comprehensive educational content series with expert insights.',
        results: [
          '100,000+ monthly views',
          '45% increase in time on site',
          '60% growth in newsletter subscriptions'
        ],
        technologies: ['Content Writing', 'SEO', 'Email Marketing', 'Analytics']
      }
    },
    {
      id: 4,
      title: 'Email Marketing Campaign',
      description: 'Designed and executed email marketing campaigns that achieved 45% open rate and 12% click-through rate.',
      shortDescription: 'Email campaigns with 45% open rate',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      tags: ['Email Marketing', 'Campaign Design', 'Analytics'],
      link: '#',
      details: {
        challenge: 'Client needed to improve email marketing performance and engagement.',
        solution: 'Developed personalized email campaigns with A/B testing.',
        results: [
          '45% email open rate',
          '12% click-through rate',
          '25% increase in conversions'
        ],
        technologies: ['Email Marketing', 'A/B Testing', 'Analytics', 'Automation']
      }
    },
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
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              My Projects
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
              A collection of successful projects and campaigns
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