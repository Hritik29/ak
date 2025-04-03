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
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreateIcon from '@mui/icons-material/Create';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Content Writing Services',
      description: 'Professional content writing services tailored to your brand voice and target audience.',
      image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: [
        'Blog Posts & Articles',
        'Website Content',
        'Product Descriptions',
        'Social Media Content',
        'Email Marketing Copy',
        'Technical Writing',
        'Creative Writing',
        'SEO-Optimized Content'
      ],
      price: 'Starting from $50',
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing solutions to grow your online presence and reach.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: [
        'Social Media Marketing',
        'Email Marketing Campaigns',
        'Content Strategy Development',
        'Brand Development',
        'Analytics & Reporting',
        'Lead Generation',
        'Customer Engagement',
        'Market Research'
      ],
      price: 'Starting from $100',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'SEO Services',
      description: 'Expert SEO services to improve your website\'s visibility and rankings.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: [
        'Keyword Research',
        'On-page SEO Optimization',
        'Content Optimization',
        'Link Building',
        'Technical SEO',
        'Local SEO',
        'SEO Auditing',
        'Performance Tracking'
      ],
      price: 'Starting from $75',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Social Media Management',
      description: 'Professional social media management to build and engage your audience.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: [
        'Content Calendar Creation',
        'Platform Strategy',
        'Community Management',
        'Engagement Growth',
        'Analytics Tracking',
        'Crisis Management',
        'Brand Voice Development',
        'Social Media Advertising'
      ],
      price: 'Starting from $150',
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
    },
  ];

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
              My Services
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
              Professional Content Writing & Digital Marketing Solutions
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={service.title}>
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
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(59, 130, 246, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(30, 58, 138, 0.1)',
                      borderColor: '#3B82F6',
                    },
                    minHeight: '600px',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={service.image}
                    alt={service.title}
                    loading="lazy"
                    sx={{
                      objectFit: 'cover',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: '#3B82F6', mr: 1 }}>
                        {service.icon}
                      </Box>
                      <Typography variant="h5" component="h2" sx={{ color: '#1E3A8A' }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#64748B' }} paragraph>
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature) => (
                        <ListItem key={feature} sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon sx={{ color: '#3B82F6' }} fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={feature} sx={{ color: '#333333' }} />
                        </ListItem>
                      ))}
                    </List>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ color: '#1E3A8A' }}>
                        {service.price}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to="/contact"
                        variant="contained"
                        sx={{
                          backgroundColor: '#3B82F6',
                          color: '#FFFFFF',
                          '&:hover': {
                            backgroundColor: '#1E3A8A',
                            color: '#FFFFFF',
                          },
                        }}
                        startIcon={<EmailIcon />}
                      >
                        Get Started
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Me Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
            color: '#FFFFFF',
            boxShadow: '0 4px 20px rgba(30, 58, 138, 0.1)',
          }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Why Choose Me?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  5+ Years
                </Typography>
                <Typography variant="subtitle1">
                  Professional Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  100+
                </Typography>
                <Typography variant="subtitle1">
                  Successful Projects
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  50+
                </Typography>
                <Typography variant="subtitle1">
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Services; 