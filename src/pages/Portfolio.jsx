import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Chip,
  useTheme,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';

const Portfolio = () => {
  const theme = useTheme();

  const writingSamples = [
    {
      id: 1,
      title: 'The Future of Digital Marketing',
      description: 'An in-depth analysis of emerging trends in digital marketing and their impact on businesses.',
      image: 'https://source.unsplash.com/random/800x600?marketing',
      category: 'Thought Leadership',
      link: '#',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Content Strategy Guide',
      description: 'A comprehensive guide to creating effective content strategies for modern businesses.',
      image: 'https://source.unsplash.com/random/800x600?strategy',
      category: 'Educational',
      link: '#',
      readTime: '10 min read',
    },
    {
      id: 3,
      title: 'SEO Best Practices',
      description: 'Essential SEO techniques and best practices for improving website visibility.',
      image: 'https://source.unsplash.com/random/800x600?seo',
      category: 'Technical Writing',
      link: '#',
      readTime: '6 min read',
    },
  ];

  const achievements = [
    {
      title: 'Content Writing Awards',
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      items: [
        'Best Technical Writer 2023',
        'Top Content Strategist',
        'Excellence in Blog Writing',
      ],
    },
    {
      title: 'Publication Credits',
      icon: <ArticleIcon sx={{ fontSize: 40 }} />,
      items: [
        'Forbes Contributor',
        'TechCrunch Guest Author',
        'Medium Top Writer',
      ],
    },
    {
      title: 'Industry Impact',
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      items: [
        '1M+ Monthly Readers',
        '50+ Featured Articles',
        '200+ Client Success Stories',
      ],
    },
    {
      title: 'Client Testimonials',
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      items: [
        '98% Client Satisfaction',
        '100+ Happy Clients',
        '5-Star Average Rating',
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              Writing Portfolio
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
              A Collection of My Best Work and Achievements
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Writing Samples Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Featured Writing Samples
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          A selection of my best articles and content pieces
        </Typography>
        <Grid container spacing={4}>
          {writingSamples.map((sample, index) => (
            <Grid item xs={12} md={4} key={sample.id}>
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
                    image={sample.image}
                    alt={sample.title}
                    sx={{
                      objectFit: 'cover',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={sample.category}
                      color="primary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="h5" gutterBottom>
                      {sample.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {sample.description}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        {sample.readTime}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<LaunchIcon />}
                        href={sample.link}
                        target="_blank"
                      >
                        Read Article
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Achievements Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Achievements & Recognition
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Highlights of my professional journey
        </Typography>
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={6} key={achievement.title}>
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
                    {achievement.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {achievement.title}
                  </Typography>
                  <List>
                    {achievement.items.map((item) => (
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
    </Box>
  );
};

export default Portfolio; 