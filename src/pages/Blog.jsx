import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  IconButton,
  Paper,
  useTheme,
  Chip,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextareaAutosize,
  Tabs,
  Tab,
  InputAdornment,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import CreateIcon from '@mui/icons-material/Create';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Link as RouterLink } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import GoogleIcon from '@mui/icons-material/Google';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Blog = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortAnchor, setSortAnchor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Art of Content Writing',
      content: 'Content writing is more than just putting words on paper. It\'s about crafting compelling narratives that resonate with your audience and drive meaningful engagement. In this comprehensive guide, we\'ll explore the key elements of effective content writing and how to master them.',
      fullContent: `Content writing is more than just putting words on paper. It's about crafting compelling narratives that resonate with your audience and drive meaningful engagement. In this comprehensive guide, we'll explore the key elements of effective content writing and how to master them.

Key Elements of Effective Content Writing:

1. Understanding Your Audience
Before you start writing, it's crucial to understand who your audience is. What are their pain points? What solutions are they looking for? What tone and style resonate with them?

2. Research and Planning
Good content is well-researched and carefully planned. This includes:
- Gathering relevant information
- Creating an outline
- Identifying key points to cover
- Planning the structure

3. Writing Style
Your writing style should be:
- Clear and concise
- Engaging and conversational
- Free of jargon (unless your audience expects it)
- Consistent with your brand voice

4. SEO Optimization
While writing for humans is primary, don't forget SEO:
- Use relevant keywords naturally
- Structure content with proper headings
- Include meta descriptions
- Optimize for readability

5. Editing and Proofreading
The final step is crucial:
- Review for clarity and flow
- Check for grammar and spelling
- Ensure consistency
- Polish the final draft

Remember, great content writing is a skill that develops with practice. Keep writing, keep learning, and keep improving.`,
      author: 'Akanksha Rai',
      date: '2024-03-15',
      likes: 42,
      comments: [
        {
          id: 1,
          author: 'John Doe',
          content: 'Great insights! This really helped me improve my content writing.',
          date: '2024-03-16',
        },
        {
          id: 2,
          author: 'Jane Smith',
          content: 'The section on audience understanding was particularly helpful.',
          date: '2024-03-16',
        },
      ],
      tags: ['Content Writing', 'Digital Marketing', 'Writing Tips'],
      image: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      category: 'Content Writing',
      featured: true,
    },
    {
      id: 2,
      title: 'Digital Marketing Trends 2024',
      content: 'As we move into 2024, several key trends are shaping the digital marketing landscape. From AI-powered content creation to immersive experiences, let\'s explore what\'s next in digital marketing.',
      fullContent: `As we move into 2024, several key trends are shaping the digital marketing landscape. From AI-powered content creation to immersive experiences, let's explore what's next in digital marketing.

Top Digital Marketing Trends for 2024:

1. AI and Machine Learning
- Personalized content recommendations
- Automated content creation
- Predictive analytics
- Chatbot advancements

2. Video Marketing
- Short-form video content
- Live streaming
- Interactive video experiences
- Video SEO optimization

3. Voice Search Optimization
- Voice-friendly content
- Local SEO focus
- Natural language processing
- Featured snippets optimization

4. Social Commerce
- Shoppable posts
- Social media marketplaces
- Influencer partnerships
- User-generated content

5. Sustainability Marketing
- Eco-friendly messaging
- Green initiatives
- Sustainable practices
- Environmental impact focus

These trends are reshaping how brands connect with their audiences and deliver value. Stay ahead by incorporating these strategies into your marketing plan.`,
      author: 'Akanksha Rai',
      date: '2024-03-10',
      likes: 38,
      comments: [
        {
          id: 1,
          author: 'Mike Johnson',
          content: 'The AI section was particularly interesting. Do you have more resources on this topic?',
          date: '2024-03-11',
        },
      ],
      tags: ['Digital Marketing', 'Trends', 'AI', 'Social Media'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      category: 'Digital Marketing',
      featured: true,
    },
    {
      id: 3,
      title: 'SEO Best Practices for Content Writers',
      content: 'Master the art of creating SEO-optimized content that ranks well while maintaining readability and engagement. Learn the essential techniques that every content writer should know.',
      fullContent: `SEO is crucial for content visibility, but it shouldn't come at the expense of readability. Here's how to create content that both search engines and readers love.

Essential SEO Practices:

1. Keyword Research
- Use tools like Google Keyword Planner
- Focus on long-tail keywords
- Consider search intent
- Analyze competition

2. Content Structure
- Use proper heading hierarchy
- Include relevant keywords naturally
- Create scannable content
- Optimize meta descriptions

3. Technical SEO
- Optimize image alt tags
- Use internal linking
- Ensure mobile responsiveness
- Improve page load speed

4. Content Quality
- Write comprehensive content
- Include statistics and data
- Add relevant examples
- Keep content updated

Remember, SEO is about helping both search engines and users find your content. Focus on creating valuable, well-structured content that answers user queries.`,
      author: 'Akanksha Rai',
      date: '2024-03-05',
      likes: 35,
      comments: [],
      tags: ['SEO', 'Content Writing', 'Digital Marketing'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      category: 'SEO',
      featured: true,
    },
  ]);
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    tags: '',
  });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [comment, setComment] = useState('');
  const [user] = useAuthState(auth);
  const [authDialog, setAuthDialog] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [loginPromptOpen, setLoginPromptOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    const blog = {
      id: blogs.length + 1,
      ...newBlog,
      author: 'Your Name',
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      comments: [],
      tags: newBlog.tags.split(',').map(tag => tag.trim()),
      image: 'https://source.unsplash.com/random/800x600?blog',
      readTime: '5 min read',
    };
    setBlogs([blog, ...blogs]);
    setNewBlog({ title: '', content: '', tags: '' });
    handleClose();
  };

  const handleLike = (id) => {
    if (!user) {
      setLoginPromptOpen(true);
      return;
    }
    setBlogs(blogs.map(blog =>
      blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
    ));
  };

  const handleAddComment = (blogId) => {
    if (!user) {
      setLoginPromptOpen(true);
      return;
    }
    if (!comment.trim()) return;
    const newComment = {
      id: Date.now(),
      author: user.displayName || 'Anonymous',
      content: comment,
      date: new Date().toISOString().split('T')[0],
    };
    setBlogs(blogs.map(blog =>
      blog.id === blogId
        ? { ...blog, comments: [...blog.comments, newComment] }
        : blog
    ));
    setComment('');
  };

  const handleShare = (blog) => {
    // Implement sharing functionality
    console.log('Sharing blog:', blog.title);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSortClick = (event) => {
    setSortAnchor(event.currentTarget);
  };

  const handleSortClose = () => {
    setSortAnchor(null);
  };

  const handleSort = (sortBy) => {
    // Implement sorting logic
    handleSortClose();
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const categories = [
    { name: 'Content Writing', count: 12, icon: <CreateIcon /> },
    { name: 'Digital Marketing', count: 8, icon: <TrendingUpIcon /> },
    { name: 'SEO', count: 6, icon: <SearchIcon /> },
    { name: 'Social Media', count: 5, icon: <ShareIcon /> },
    { name: 'Writing Tips', count: 10, icon: <BookmarkIcon /> },
  ];

  const popularPosts = blogs
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setAuthDialog(false);
        resetAuthFields();
      } else {
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await user.sendEmailVerification({
          url: window.location.origin,
        });
        
        await user.updateProfile({
          displayName: fullName,
        });
        
        const userDoc = doc(db, 'users', user.uid);
        await setDoc(userDoc, {
          fullName,
          username,
          email,
          createdAt: serverTimestamp(),
        });
        
        setVerificationSent(true);
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already registered');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters');
      } else {
        setError(error.message);
      }
    }
  };

  const resetAuthFields = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
    setUsername('');
    setError('');
    setVerificationSent(false);
  };

  const LoginPromptDialog = () => (
    <Dialog
      open={loginPromptOpen}
      onClose={() => setLoginPromptOpen(false)}
      maxWidth="xs"
      fullWidth
    >
      <DialogContent>
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="h6" gutterBottom>
            Please Login
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            You need to be logged in to perform this action.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              setLoginPromptOpen(false);
              setIsLogin(true);
              setAuthDialog(true);
            }}
          >
            Login Now
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box sx={{ width: '100%', pt: 8 }}>
      {/* Hero Section with heading and login button */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
          py: 8,
          mb: 6,
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              Blog
            </Typography>
            <Typography variant="h5" align="center" sx={{ opacity: 0.9 }}>
              Insights, Tips, and Industry Updates
            </Typography>

            {/* Auth Buttons positioned in top-right */}
            <Box
              sx={{
                position: 'absolute',
                top: 32,
                right: 32,
                display: 'flex',
                gap: 2,
                alignItems: 'center',
              }}
            >
              {user ? (
                <>
                  <Button
                    variant="contained"
                    startIcon={<PostAddIcon />}
                    onClick={() => setOpen(true)}
                    sx={{
                      backgroundColor: 'white',
                      color: '#1a237e',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    New Post
                  </Button>
                  <IconButton
                    onClick={(e) => setProfileAnchor(e.currentTarget)}
                    sx={{ 
                      color: 'white',
                      border: '2px solid rgba(255, 255, 255, 0.5)',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                    }}
                  >
                    {user.photoURL ? (
                      <Avatar 
                        src={user.photoURL} 
                        alt={user.displayName}
                        sx={{ width: 32, height: 32 }}
                      />
                    ) : (
                      <AccountCircleIcon />
                    )}
                  </IconButton>
                  <Menu
                    anchorEl={profileAnchor}
                    open={Boolean(profileAnchor)}
                    onClose={() => setProfileAnchor(null)}
                  >
                    <MenuItem>
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      My Profile
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <PostAddIcon fontSize="small" />
                      </ListItemIcon>
                      My Posts
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => {
                      auth.signOut();
                      setProfileAnchor(null);
                    }}>
                      <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setIsLogin(true);
                      setAuthDialog(true);
                    }}
                    sx={{
                      backgroundColor: 'white',
                      color: '#1a237e',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => {
                      setIsLogin(false);
                      setAuthDialog(true);
                    }}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Search Bar Section */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <TextField
            fullWidth
            placeholder="Search articles..."
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Container>

      {/* Rest of the content */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
                <Tab label="All Posts" />
                <Tab label="Featured" />
                <Tab label="Latest" />
                <Tab label="Popular" />
              </Tabs>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Tooltip title="Filter">
                  <IconButton onClick={() => setDrawerOpen(true)}>
                    <FilterListIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sort">
                  <IconButton onClick={handleSortClick}>
                    <SortIcon />
                  </IconButton>
                </Tooltip>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => setOpen(true)}
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  New Post
                </Button>
              </Box>
            </Box>

            <Grid container spacing={4}>
              {filteredBlogs.map((blog) => (
                <Grid item xs={12} key={blog.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      component={Paper}
                      elevation={3}
                      sx={{
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="300"
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
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Avatar sx={{ mr: 2 }}>{blog.author[0]}</Avatar>
                          <Box>
                            <Typography variant="subtitle1">{blog.author}</Typography>
                            <Typography variant="caption" color="text.secondary">
                              {blog.date} • {blog.readTime}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography variant="h4" gutterBottom>
                          {blog.title}
                        </Typography>
                        <Typography variant="body1" paragraph>
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
                      <Divider />
                      <CardActions sx={{ justifyContent: 'space-between', px: 3, py: 2 }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Tooltip title={!user ? "Login to like" : "Like this post"}>
                            <IconButton 
                              onClick={() => handleLike(blog.id)}
                              sx={{ 
                                opacity: user ? 1 : 0.7,
                                '&:hover': { opacity: 1 }
                              }}
                            >
                              <ThumbUpIcon color={blog.likes > 0 ? 'primary' : 'action'} />
                              <Typography variant="body2" sx={{ ml: 1 }}>
                                {blog.likes}
                              </Typography>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title={!user ? "Login to comment" : "Add a comment"}>
                            <IconButton
                              onClick={() => !user ? setLoginPromptOpen(true) : null}
                              sx={{ 
                                opacity: user ? 1 : 0.7,
                                '&:hover': { opacity: 1 }
                              }}
                            >
                              <CommentIcon />
                              <Typography variant="body2" sx={{ ml: 1 }}>
                                {blog.comments.length}
                              </Typography>
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton onClick={() => handleShare(blog)}>
                            <ShareIcon />
                          </IconButton>
                          {user && (
                            <IconButton>
                              <BookmarkIcon />
                            </IconButton>
                          )}
                        </Box>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              {/* Categories */}
              <Paper sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CategoryIcon /> Categories
                </Typography>
                <List>
                  {categories.map((category) => (
                    <ListItem key={category.name} disablePadding>
                      <ListItemButton component={RouterLink} to={`/blog?category=${category.name.toLowerCase()}`}>
                        <ListItemIcon>{category.icon}</ListItemIcon>
                        <ListItemText primary={category.name} />
                        <ListItemSecondaryAction>
                          <Chip label={category.count} size="small" />
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>

              {/* Popular Posts */}
              <Paper sx={{ p: 3, mb: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUpIcon /> Popular Posts
                </Typography>
                <List>
                  {popularPosts.map((post) => (
                    <ListItem key={post.id} disablePadding>
                      <ListItemButton component={RouterLink} to={`/blog/${post.id}`}>
                        <ListItemAvatar>
                          <Avatar variant="rounded" src={post.image} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={post.title}
                          secondary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <AccessTimeIcon fontSize="small" />
                              {post.readTime}
                            </Box>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>

              {/* Newsletter */}
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Subscribe to Newsletter
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Get the latest content writing tips and insights delivered to your inbox.
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" fullWidth>
                  Subscribe
                </Button>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Sort Menu */}
      <Menu
        anchorEl={sortAnchor}
        open={Boolean(sortAnchor)}
        onClose={handleSortClose}
      >
        <MenuItem onClick={() => handleSort('latest')}>Latest First</MenuItem>
        <MenuItem onClick={() => handleSort('popular')}>Most Popular</MenuItem>
        <MenuItem onClick={() => handleSort('oldest')}>Oldest First</MenuItem>
      </Menu>

      {/* Filter Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 300, p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <List>
            {categories.map((category) => (
              <ListItem key={category.name} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{category.icon}</ListItemIcon>
                  <ListItemText primary={category.name} />
                  <ListItemSecondaryAction>
                    <Chip label={category.count} size="small" />
                  </ListItemSecondaryAction>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* New Post Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Create New Blog Post
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Content"
            fullWidth
            multiline
            rows={6}
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Tags (comma-separated)"
            fullWidth
            value={newBlog.tags}
            onChange={(e) => setNewBlog({ ...newBlog, tags: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Publish
          </Button>
        </DialogActions>
      </Dialog>

      {/* Authentication Dialog */}
      <Dialog 
        open={authDialog} 
        onClose={() => {
          setAuthDialog(false);
          resetAuthFields();
        }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          {isLogin ? 'Login' : 'Create Account'}
        </DialogTitle>
        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          
          {verificationSent ? (
            <Box sx={{ textAlign: 'center', py: 2 }}>
              <Alert severity="success" sx={{ mb: 2 }}>
                Verification email sent! Please check your inbox.
              </Alert>
              <Typography variant="body1" paragraph>
                We've sent a verification link to {email}. Please verify your email to complete the registration.
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  setAuthDialog(false);
                  resetAuthFields();
                }}
              >
                Close
              </Button>
            </Box>
          ) : (
            <form onSubmit={handleAuth}>
              {!isLogin && (
                <>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    required
                    helperText="Choose a unique username"
                  />
                </>
              )}
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                helperText={!isLogin && "Password must be at least 6 characters"}
              />
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  margin="normal"
                  required
                />
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
              
              {isLogin && (
                <>
                  <Divider sx={{ my: 2 }}>OR</Divider>
                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    onClick={async () => {
                      try {
                        const provider = new GoogleAuthProvider();
                        await signInWithPopup(auth, provider);
                        setAuthDialog(false);
                        resetAuthFields();
                      } catch (error) {
                        setError(error.message);
                      }
                    }}
                  >
                    Continue with Google
                  </Button>
                </>
              )}
              
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Button
                  color="primary"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    resetAuthFields();
                  }}
                >
                  {isLogin 
                    ? "Don't have an account? Sign Up" 
                    : "Already have an account? Login"}
                </Button>
              </Box>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <LoginPromptDialog />
    </Box>
  );
};

export default Blog; 