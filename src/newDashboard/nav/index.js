import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';

// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Scrollbar from '../components/scrollbar';
import NavSection from '../components/nav-section';
//
import navConfig from './config';

import jwt_decode from 'jwt-decode';

import { makeStyles } from '@mui/styles';

// ----------------------------------------------------------------------

import logo from '../../assets/images/logos/LogoFVS.svg';
import { Authen } from 'context/authenToken/AuthenToken';

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '10px',
      backgroundColor: '#eee',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#bbb',
      borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#9a9a9a',
    },
  },
}));

export default function Nav({ openNav, onCloseNav }) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');
  const { token } = useContext(Authen);

  const handleNullToken = () => {
    const isNonPeople = 'Ẩn danh';
    const arr = [];
    if (token === null || token === undefined || !token) {
      return isNonPeople;
    } else {
      const decode = jwt_decode(token);
      arr.push(decode);
      return arr;
    }
  };

  useEffect(() => {
    if (openNav) onCloseNav();
  }, [pathname]);

  const renderContent = (
    <div
      className={classes.root}
      //   sx={{
      //     height: '1000px',
      //   }}
    >
      <Box sx={{ mb: 5, pt: 3, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src="/" alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {handleNullToken()[0]?.RoleName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {handleNullToken()[0]?.RoleName}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavSection data={navConfig} />
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}>
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}>
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}>
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
