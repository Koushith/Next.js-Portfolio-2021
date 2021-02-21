import React from 'react';
import { GeistUIThemes, Avatar, Button, Text, Link } from '@geist-ui/react';
import makeStyles from './makeStyles';
import * as Icons from 'react-feather';

const useStyles = makeStyles((ui) => ({
  root: {
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    padding: `calc(${ui.layout.gap} * 2) ${ui.layout.pageMargin} calc(${ui.layout.gap} * 4)`,
    boxSizing: 'border-box',
    margin: '0 auto',
  },

  [`@media screen and (max-width: ${ui.layout.pageWidthWithMargin})`]: {
    createProjectButton: {
      display: 'none !important',
    },
    avatar: {
      width: '80px !important',
      height: '80px !important',
      marginRight: '20px !important',
    },
    username: {
      fontSize: 24,
    },
  },
  para: {},
  strike: {
    textDecoration: 'line-through',
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <p className={classes.para}>
          Hello, everyone ✋
          <p>
            <Text as p className={classes.strike}>
              I'm a software developer living in Bangalore, India. I love to
              build and design things. I have experience in creating
              cross-platform desktop applications, website backends, user
              experience, and visual design. I have worked extensively in teams
              and alone.
            </Text>
            <p>WTF? Sound human Koushith. Okay, here you go.</p> Huh, so you're
            interested in knowing more about me? The first thing I should
            mention that I don't have any unique talents. I consider myself
            pretty average. My two life principles are - don't give up and work
            really hard in the right direction. That's how I have achieved
            whatever you see so far. Born in a small town in Kodagu known as
            (Coorg- Scotland of India), I have humble beginnings. Until 2016,
            the only thing I knew about computers was that it was invented by a
            guy named Charles or something..From there, I have taught myself
            everything. I'm still learning. I still have to Google the basic
            stuff like adding inline CSS in HTML :p.
            <Text>
              {' '}
              I'm currently buidling some cool stuffs at
              <b> Consenso Labs</b>.
            </Text>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Profile;
