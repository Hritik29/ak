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
      title: 'Website & SEO Content Writing',
      description: 'Strategic, keyword-focused website content and blog writing that ranks well and reads even better. Specializing in creating engaging content that drives organic traffic.',
      image: '/src/assets/images/service1.jpg',
      features: [
        'Website copywriting & optimization',
        'SEO content strategy & creation',
        'Blog writing & management',
        'Keyword research & implementation'
      ],
      price: 'Starting from $199',
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Academic & Research Writing',
      description: 'Comprehensive academic content and research articles with a focus on medical and healthcare domains. Delivering well-researched, properly cited content.',
      image: '/src/assets/images/service2.jpg',
      features: [
        'Literature reviews & analysis',
        'Research paper development',
        'Academic article writing',
        'Medical content expertise'
      ],
      price: 'Starting from $99',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Copywriting & Brand Messaging',
      description: 'Crafting compelling brand narratives and persuasive copy that resonates with your target audience. Strategic messaging that drives conversions.',
      image: '/src/assets/images/service3.jpg',
      features: [
        'Brand story development',
        'Product message crafting',
        'Campaign copywriting',
        'Brand voice guidelines'
      ],
      price: 'Starting from $189',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
    },
    {
      title: 'Social Media Management',
      description: 'End-to-end social media management focused on growing engagement and building meaningful connections with your audience across platforms.',
      image: '/src/assets/images/service4.jpg',
      features: [
        'Content strategy planning',
        'Community engagement',
        'Performance analytics',
        'Campaign management'
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
              Services I Offer
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
              Specialized Content Writing for Various Platforms and Industries
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
                  3+ Years
                </Typography>
                <Typography variant="subtitle1">
                  Professional Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  75+
                </Typography>
                <Typography variant="subtitle1">
                  Successful Projects
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  30+
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