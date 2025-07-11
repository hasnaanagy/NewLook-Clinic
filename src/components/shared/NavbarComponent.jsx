import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/images/logo.jpg';
import { COLORS } from '../../constants/colors';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { apiSlice } from '../../redux/slices/apiSlice';


function NavbarComponent() {

  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isLoggedIn = localStorage.getItem('token') ; 
  const pages = ['Home', 'Booking', 'Services','Doctors','About Us' ,'Contact Us',];
const settings = ['Profile', 'Dashboard', isLoggedIn?'Logout':'Login'];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(apiSlice.util.resetApiState());
    navigate('/login');
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

React.useEffect(() => {
  const handleScroll = () => {
    const headerHeight=document.getElementById('header-section').offsetHeight ||window.innerHeight
    setIsScrolled(window.scrollY >= headerHeight); 
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <>
<AppBar
  position={isScrolled?'fixed':'static'}
  elevation={isScrolled ? 4 : 0}
  sx={{
    backgroundColor:COLORS.PRIMARY ,
    color: 'black' ,
    transition: 'background-color 0.3s ease, color 0.3s ease',
    boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
    paddingTop: '10px', 
  }}
>      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ width: '100%', px: 0, }}>
          {/* Logo always on the left */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0, mr: 0, minWidth: 0 }}>
            <img src={logo} style={{ width: '45px', height: '45px', borderRadius: '50%', marginRight: 6 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  fontSize: { xs: '.9rem', md: '1rem' },
                  lineHeight: 1.1,
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                  letterSpacing: 0.5,
                  mb: 0.2,
                }}
              >
                NewLook Center
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color:COLORS.TEXT ,
                  fontWeight: 400,
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
                  whiteSpace: 'nowrap',
                  opacity: 0.85,
                }}
              >
                Dr. Noha Hammad | Beauty & Care
              </Typography>
            </Box>
          </Box>

          {/* Desktop links on the right */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => {
              // Convert page name to route path (e.g., 'Home' -> '/', 'About Us' -> '/about-us')
              const path = page === 'Home' ? '/' : `/${page.replace(/\s+/g, '-').toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Button
                  key={page}
                  component={Link}
                  to={path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: isActive ? COLORS.TEXT : 'white',
                    display: 'block',
                    textTransform: 'none',
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: COLORS.TEXT,
                      background: 'transparent',
                    },
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* Mobile menu icon on the right */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{color:'white'}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => {
                const path = page === 'Home' ? '/' : `/${page.replace(/\s+/g, '-').toLowerCase()}`;
                const isActive = location.pathname === path;
                return (
                  <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={path}>
                  <Typography sx={{
                      textAlign: 'center',
                      textTransform: 'none',
                      color: isActive ? 'black' : 'inherit',
                      fontWeight: isActive ? 700 : 400,
                      transition: 'color 0.2s',
                      '&:hover': {
                        color: COLORS.PRIMARY,
                      },
                    }}>
                      {page}
                    </Typography>
                  </MenuItem>
                );
              })}
              <Divider/>
               {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {(isLoggedIn&&setting==='Profile')?
                    <Typography >{setting}</Typography>
                    :setting==='Login'? <Link to='/login' style={{color:'black',textDecoration:'none'}}>{setting}</Link>: <Button onClick={handleLogout} sx={{}} >{setting}</Button>}
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,display:{xs:'none',md:'flex'}}}>
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            ) : (
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                sx={{
                  display:{ xs: 'none', md: 'flex' },
                  color: 'white',
                  borderColor: 'white',
                  ml: 2,
                  textTransform: 'none',
                  borderRadius: '20px',
                  width: '100px',
                   '&:hover': {
                      color: COLORS.TEXT,
                  borderColor: COLORS.TEXT,
                    },
                 
                }}
              >
                Login
              </Button>
            )}
            {isLoggedIn && (
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
<Typography  onClick={setting==='Logout'?handleLogout:null} sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {isScrolled && <Box sx={{ height: '64px' }} />}      
</>
  );
}
export default NavbarComponent;