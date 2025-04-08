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
import ReadMoreIcon from '@mui/icons-material/ReadMore';

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
      title: 'What Is SEO Content Writing? A Beginner-Friendly Guide to Ranking with Words',
      content: 'If you\'ve ever wondered how some websites seem to magically show up on the front page of Google, here\'s the trick: it\'s not magic—it\'s SEO content writing.',
      fullContent: `Introduction: Why SEO Content Writing Matters
If you've ever wondered how some websites seem to magically show up on the front page of Google, here's the trick: it's not magic—it's SEO content writing.
As a content writer, I've seen how businesses often struggle to strike the balance between what Google wants and what readers love. That's exactly where SEO content writing comes into play. It's more than just stuffing keywords into paragraphs; it's about writing purposeful content that ranks and resonates.
So, let's break it all down.


What is SEO Content Writing?
SEO content writing refers to the act of producing content that is both search engine-friendly and good for readers. It entails applying suitable keywords, layout, organization, and tactics to make the content rank higher on search engine result pages (SERPs).
But here's the catch: wonderful SEO content isn't merely about ranking—it's about providing value.


Key Elements of SEO Content Writing
Keyword Research
 Every strong SEO article begins with understanding what people are searching for. Keywords are the bridge between your content and your audience.


Use tools like Ubersuggest, SEMrush, or Google Keyword Planner.


Focus on primary, secondary, and long-tail keywords.


Pay attention to search intent—are they looking to learn, buy, or compare?


Headline Optimization
 Your title should grab attention and include the main keyword. A great title can increase click-through rates dramatically.

 Example:
 How to Write SEO Content That Ranks in 2024
 Writing Tips for Beginners


Meta Title & Meta Description
 This is what shows up on search engines. It must be enticing, relevant, and keyword-rich.

 Tip: Keep meta titles under 60 characters and meta descriptions under 160.


Content Structure
 Organize your content with:


Clear H1, H2, H3 headings


Short paragraphs


Bullet points and numbered lists


Internal and external links


On-Page Optimization
 This includes using keywords naturally throughout:


In the introduction and conclusion


In headers and subheaders


In image alt texts


In URLs (if applicable)


Content Quality
 Google's algorithm now heavily favors helpful, high-quality, and original content. So yes, quality beats keyword count.


Internal & External Linking
 Link to other relevant blog posts or service pages on your site (internal), and to authoritative sources like HubSpot, Forbes, or Moz (external).




🛠 Tools I Use for SEO Writing
SurferSEO – To analyze content scores and keyword density


Grammarly – For grammar and tone checks


Yoast SEO – If using WordPress


Answer the Public – To find real questions your audience is asking



Common Myths About SEO Writing
"More keywords = better rankings"
 Nope. Google penalizes keyword stuffing. Prioritize clarity and flow.


"Only long-form content ranks."
 While long-form content does perform well, it's the depth and usefulness that matter most.


"I need to be technical to write SEO content."
 Not true. If you understand your audience and learn SEO basics, you're already on your way.



 Why SEO Content Writing Works for Businesses
When done right, SEO content writing helps:
Boost organic traffic


Build trust and authority


Reduce paid ad dependency


Improve conversions by targeting the right audience


Imagine a blog post that keeps working for you 24/7, attracting traffic without spending on ads. That's the beauty of good SEO writing.

 My Approach to SEO Content Writing
Here's how I approach every project as a content writer:
Understand the brand voice & target audience


Perform keyword & competitor research


Create a smart outline based on search intent


Write content with a human touch but SEO in mind


Optimize headings, images, metadata, and links


Deliver value—because helpful content always wins



Real Results from SEO Content
In my work with international clients (especially through RankTech Solutions), I've helped websites:
Improve their Google rankings within 3-4 weeks


Increase organic traffic by up to 40%


Boost engagement rates and reduce bounce rates


Why? Because we focused on relevant, well-written, and SEO-optimized content.

Conclusion: Write for People, Optimize for Search
At its core, SEO content writing is about creating content that helps people and satisfies algorithms. When those two meet, your content gets discovered, read, and trusted.
If you're a business looking to grow online or a fellow writer looking to break into SEO, mastering this skill is a game-changer.

Bonus Tip:
Always write with empathy.
Google may decide your rank, but people decide your value.`,
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
      title: 'Website Content Writing vs. Copywriting: What\'s the Real Difference?',
      content: 'If you\'re a business owner or marketer looking to grow your brand online, chances are you\'ve come across terms like website content writing and copywriting. And if you\'re a little confused about the difference, you\'re not alone.',
      fullContent: `Website Content Writing vs. Copywriting: What's the Real Difference?
If you're a business owner or marketer looking to grow your brand online, chances are you've come across terms like website content writing and copywriting. And if you're a little confused about the difference, you're not alone.
Both play a crucial role in your online presence, but they serve different purposes—and knowing the difference can save you time, money, and help you hire the right expert for your goals.
Let's dive into a side-by-side comparison of Website Content Writing vs. Copywriting, so you can understand what each entails and when to use them.

What Is Website Content Writing?
Website content writing is the art of creating informational, educational, or engaging content that provides value to your visitors. The goal isn't always to sell immediately—it's to build trust, authority, and a relationship with your audience.
Think of it as your digital conversation starter.
Examples of Website Content Writing:
Homepage content


About Us pages


Blog posts and articles


Service pages


FAQs


Case studies


Whitepapers



Primary Goals of Content Writing:
Inform and educate the reader


Improve SEO and organic visibility


Showcase brand authority


Answer user questions


Provide long-term value


This type of writing is typically longer-form, rich in keywords, and structured to guide readers through your business and offerings at a comfortable pace.

What Is Copywriting?
Copywriting, on the other hand, is more like your digital salesperson. It's focused on persuasion, emotional triggers, and conversions. The goal is to get readers to take a specific action—buy, subscribe, sign up, click, or call.
It's concise, punchy, and strategic.
Examples of Copywriting:
Ad headlines and taglines


Product descriptions


Sales pages


Email campaigns


Landing pages


Call-to-action (CTA) buttons


Social media ads



Primary Goals of Copywriting:
Convert traffic into leads or sales


Persuade readers to act


Evoke emotions


Communicate value quickly


Boost marketing ROI


Good copywriting doesn't just describe—it sells. It's the voice you use when you want to move the needle on your goals.

Side-by-Side Comparison
Feature
Website Content Writing
Copywriting
Purpose
Educate, inform, engage
Persuade, sell, convert
Tone
Informative, neutral, helpful
Persuasive, emotive, direct
Length
Long-form (500–1500+ words)
Short-form (few words to a page)
Focus
SEO, brand voice, user experience
Emotional triggers, benefits
Examples
Blog posts, web pages, guides
Ads, CTAs, landing pages
SEO Importance
High
Moderate
Main Objective
Build trust and visibility
Drive immediate action


When to Use Website Content Writing
Use content writing when your goal is to educate your audience, improve search rankings, and establish credibility. For example:
You're a B2B SaaS brand creating blog content to help customers solve pain points.


You want your "About Us" page to share your story authentically.


You're targeting organic traffic through long-tail keywords.


You're building topic clusters to dominate in search results.


This type of writing also has a longer shelf life—good content can continue driving traffic and value for years after it's published.

When to Use Copywriting
Use copywriting when your goal is to get immediate results or boost conversions. For instance:
You're running a paid Facebook or Google Ads campaign.


You want users to sign up for your newsletter or free trial.


You're launching a product and need high-converting sales copy.


You're writing email sequences to re-engage leads.


Copywriting is about making readers say: "Yes! I want this now."

Why the Confusion?
Here's the tricky part: sometimes, content writing includes copywriting and vice versa.
For example, a blog post may end with a call-to-action (CTA) asking readers to subscribe or download something. That CTA is copywriting inserted into a content piece. Similarly, a product page may include both informational content and sales copy.
This overlap is why many people blur the lines. But understanding the intent behind the words makes all the difference.


How to Hire the Right Writer for the Job
If you're looking to hire a writer, be clear on the following:
What's the goal of your content?
 Inform or sell?


Where will it be used?
 Blogs, service pages, or ads?


What's the tone of your brand?
 Friendly? Authoritative? Playful?


Do you need SEO included?
 Not all copywriters offer keyword-optimized content.


Here's a quick cheat sheet:
You Need a Writer For…
Hire a…
Long-form blogs with SEO
                        Content Writer
Homepage or sales page with CTAs
                        Copywriter
Product descriptions for e-commerce
                        Copywriter
Informational guides and whitepapers
                        Content Writer
Social media ad text
                        Copywriter
Service pages with keyword focus
                        Content Writer (with                          copywriting skills)


Final Thoughts: Do You Need Both?
Short answer? Yes.
To truly win online, your brand needs both content and copy. Think of it this way:
Content brings people in.


Copy makes them stay—and buy.


Together, they build a powerful digital ecosystem that nurtures, educates, and converts your audience across multiple touchpoints.
So the next time you're thinking, "Do I need content writing or copywriting?", ask yourself:
"Do I want to build trust or drive action right now?"
And if you want both (which most brands do), get yourself a content writer who knows copywriting too`,
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

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseBlogDetail = () => {
    setSelectedBlog(null);
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
                          <Button 
                            variant="outlined" 
                            color="primary"
                            onClick={() => handleReadMore(blog)}
                            startIcon={<ReadMoreIcon />}
                          >
                            Read More
                          </Button>
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

      {/* Blog Detail Dialog */}
      <Dialog
        open={Boolean(selectedBlog)}
        onClose={handleCloseBlogDetail}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            maxHeight: '90vh',
          }
        }}
      >
        {selectedBlog && (
          <>
            <DialogTitle sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" component="div">
                  {selectedBlog.title}
                </Typography>
                <IconButton onClick={handleCloseBlogDetail}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Avatar sx={{ mr: 2 }}>{selectedBlog.author[0]}</Avatar>
                <Box>
                  <Typography variant="subtitle1">{selectedBlog.author}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {selectedBlog.date} • {selectedBlog.readTime}
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ mb: 3 }}>
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title}
                  style={{ 
                    width: '100%', 
                    maxHeight: '300px', 
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              <Box sx={{ whiteSpace: 'pre-line', fontFamily: 'inherit' }}>
                {selectedBlog.fullContent}
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                {selectedBlog.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(59, 130, 246, 0.06)',
                      color: '#64748B',
                      border: '1px solid rgba(59, 130, 246, 0.1)',
                    }}
                  />
                ))}
              </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Tooltip title={!user ? "Login to like" : "Like this post"}>
                  <IconButton 
                    onClick={() => handleLike(selectedBlog.id)}
                    sx={{ 
                      opacity: user ? 1 : 0.7,
                      '&:hover': { opacity: 1 }
                    }}
                  >
                    <ThumbUpIcon color={selectedBlog.likes > 0 ? 'primary' : 'action'} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {selectedBlog.likes}
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
                      {selectedBlog.comments.length}
                    </Typography>
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton onClick={() => handleShare(selectedBlog)}>
                  <ShareIcon />
                </IconButton>
                {user && (
                  <IconButton>
                    <BookmarkIcon />
                  </IconButton>
                )}
              </Box>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Blog; 