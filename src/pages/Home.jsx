import { Box, Container, Typography, Button, Grid, Paper, useTheme, Chip, Card, CardContent, CardMedia, CardActions, IconButton, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CreateIcon from '@mui/icons-material/Create';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [achievementsRef, achievementsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [blogRef, blogInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const skills = [
    {
      title: 'Content Writing',
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
      description: 'Expert in creating engaging and SEO-optimized content for various platforms and industries.',
      details: [
        'Blog Posts',
        'Website Content',
        'Social Media Posts',
        'Technical Writing',
        'Creative Writing'
      ]
    },
    {
      title: 'Digital Marketing',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      description: 'Strategic digital marketing expertise to help brands grow their online presence.',
      details: [
        'Social Media Marketing',
        'Email Campaigns',
        'Content Strategy',
        'Analytics & Reporting',
        'Brand Development'
      ]
    },
    {
      title: 'SEO Optimization',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      description: 'Implementing SEO best practices to improve content visibility and rankings.',
      details: [
        'Keyword Research',
        'On-page SEO',
        'Content Optimization',
        'Link Building',
        'SEO Auditing'
      ]
    },
    {
      title: 'Social Media Management',
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
      description: 'Creating and managing engaging social media presence across platforms.',
      details: [
        'Content Calendar',
        'Community Management',
        'Platform Strategy',
        'Analytics Tracking',
        'Engagement Growth'
      ]
    },
  ];

  const achievements = [
    {
      title: 'Best Content Writer Award',
      year: '2023',
      description: 'Recognized for outstanding content creation and engagement strategies that drove significant traffic growth.',
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      stats: '150% Traffic Increase'
    },
    {
      title: 'Digital Marketing Excellence',
      year: '2022',
      description: 'Led successful digital marketing campaigns resulting in exceptional client growth and engagement.',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      stats: '200% ROI'
    },
    {
      title: 'Content Strategy Innovation',
      year: '2023',
      description: 'Developed innovative content strategies that transformed brand narratives and engagement.',
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
      stats: '85% Engagement Rate'
    },
  ];

  const featuredProjects = [
    {
      title: 'Docty.ai (Healthcare Tech Website)',
      description: 'Developed comprehensive content strategy for a Healthcare tech website, resulting in 150% increase in organic traffic.',
      image: '/src/assets/images/docty.jpg',
      tags: ['Content Strategy', 'SEO', 'Healthcare Domain'],
      link: '/projects',
    },
    {
      title: 'Careers360 – Medicine Domain',
      description: 'Academic content for Careers360 in the field of medicine and allied sciences, achieving 200% engagement rate.',
      image: '/src/assets/images/career3600.jpg',
      tags: ['Academic Writing', 'Research', 'Medical Content'],
      link: '/projects',
    },
    {
      title: 'Arka Informations – IT & B2B',  
      description: 'Developed comprehensive content strategy for a IT & B2B website, resulting in 150% increase in organic traffic.',
      image: '/src/assets/images/arka.jpg',
      tags: ['Content Writing', 'Blogging', 'Thought Leadership'],
      link: '/projects',
    },
  ];

  const services = [
    {
      title: 'Content Writing Services',
      description: 'Professional content writing services tailored to your brand voice and target audience.',
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
      link: '/services',
    },
    {
      title: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing solutions to grow your online presence and reach.',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      link: '/services',
    },
    {
      title: 'SEO Services',
      description: 'Expert SEO services to improve your website\'s visibility and rankings. Improve your website\'s visibility and rankings',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      link: '/services',
    },
  ];

  const latestBlogs = [
    {
      id: 1,
      title: 'What Is SEO Content Writing?',
      content: 'If you\'ve ever wondered how some websites seem to magically show up on the front page of Google, here\'s the trick: it\'s not magic—it\'s SEO content writing.',
      author: 'Akanksha Rai',
      date: '2025-04-08',
      likes: 42,
      comments: 5,
      tags: ['Content Writing', 'Digital Marketing'],
      image: '/src/assets/images/seo.jpg',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: "Website Content Writing vs. Copywriting",
      content: "As we move into 2024, several key trends are shaping the digital marketing landscape. From AI-powered content creation to immersive experiences.",
      author: "Akanksha Rai",
      date: "2024-03-10",
      likes: 38,
      comments: 3,
      tags: ["Digital Marketing", "Trends"],
      image: "/src/assets/images/arka.jpg",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: 'SEO Best Practices for Content Writers',
      content: 'Master the art of creating SEO-optimized content that ranks well while maintaining readability and engagement.',
      author: 'Akanksha Rai',
      date: '2024-03-05',
      likes: 35,
      comments: 4,
      tags: ['SEO', 'Content Writing'],
      image: '/src/assets/images/seo.jpg',
      readTime: '6 min read',
    },
  ];

  return (
    <Box sx={{ width: '100%', pt: 8 }}>
      {/* Hero Section with Animated Background */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #2C5282 0%, #4299E1 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    mb: 3,
                    fontWeight: 700,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Crafting Words That Matter
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    mb: 4,
                    opacity: 0.9,
                    fontSize: '1.5rem',
                    fontFamily: 'Cursive',
                  }}
                >
                  Hi, I'm Akanksha Rai, a content writer who crafts compelling website content, insightful academic articles, and strategic brand copy for clients across industries. I turn ideas into content that connects, educates, and converts.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    component={RouterLink}
                    to="/portfolio"
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<WorkIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Explore My Work →
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<EmailIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      backgroundColor: 'rgba(29, 18, 24, 0.23)',
                      '&:hover': {
                        backgroundColor: 'rgba(32, 31, 32, 0.87)',
                      },
                    }}
                  >
                    Get in Touch →
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                animate={floatingAnimation}
                style={{ position: 'relative' }}
              >
                <Box
                  component="img"
                  src="/src/assets/images/Profile.jpeg"
                  alt="Creative Writing"
                  loading="lazy"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    transform: 'rotate(-2deg)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          My Services
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Professional solutions for your content and marketing needs
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={service.title}>
              <motion.div
                ref={servicesRef}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={service.link}
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 'auto' }}
                  >
                    Learn More
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Projects Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Featured Projects
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            A glimpse of my best work
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} md={4} key={project.title}>
                <motion.div
                  ref={projectsRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                      }}
                    />
                    <Box sx={{ p: 3, flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(66, 153, 225, 0.08)',
                              color: '#2C5282',
                              '&:hover': {
                                backgroundColor: 'rgba(66, 153, 225, 0.12)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        component={RouterLink}
                        to={project.link}
                        variant="outlined"
                        color="primary"
                        fullWidth
                      >
                        View Project
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          My Skills
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Expertise in content creation and digital marketing
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={6} key={skill.title}>
              <motion.div
                ref={skillsRef}
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
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
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {skill.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {skill.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {skill.details.map((detail) => (
                      <Chip
                        key={detail}
                        label={detail}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(66, 153, 225, 0.08)',
                          color: '#2C5282',
                          '&:hover': {
                            backgroundColor: 'rgba(66, 153, 225, 0.12)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Achievements Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Achievements
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Recognition and success stories
          </Typography>
          <Grid container spacing={4}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} md={4} key={achievement.title}>
                <motion.div
                  ref={achievementsRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                      {achievement.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {achievement.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {achievement.year}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {achievement.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {achievement.stats}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Blog Section */}
      <Box
        ref={blogRef}
        sx={{
          py: 8,
          backgroundColor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={blogInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h2" gutterBottom>
                Latest Blog Posts
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Insights, tips, and industry updates from my content writing journey
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {latestBlogs.map((blog) => (
                <Grid item xs={12} md={4} key={blog.id}>
                  <Card
                    component={Paper}
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={blog.image}
                      alt={blog.title}
                      sx={{
                        objectFit: 'cover',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          transition: 'transform 0.3s',
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ mr: 2 }}>{blog.author[0]}</Avatar>
                        <Box>
                          <Typography variant="subtitle1">{blog.author}</Typography>
                          <Typography variant="caption" color="text.secondary">
                            {blog.date} • {blog.readTime}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="h5" gutterBottom>
                        {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {blog.content}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {blog.tags.map((tag) => (
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
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between', px: 3, py: 2 }}>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <IconButton>
                          <ThumbUpIcon />
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            {blog.likes}
                          </Typography>
                        </IconButton>
                        <IconButton>
                          <CommentIcon />
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            {blog.comments}
                          </Typography>
                        </IconButton>
                      </Box>
                      <Button
                        component={RouterLink}
                        to={`/blog`}
                        variant="outlined"
                        color="primary"
                        size="small"
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                component={RouterLink}
                to="/blog"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<CreateIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                View All Blog Posts
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #2C5282 0%, #4299E1 100%)',
            color: '#FFFFFF',
          }}
        >
          <Typography variant="h3" gutterBottom>
            Ready to Transform Your Content?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Let's work together to create compelling content that drives results
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<EmailIcon />}
          >
            Get in Touch
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home; 