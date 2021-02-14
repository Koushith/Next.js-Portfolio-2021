import React from 'react';
import makeStyles from './makeStyles';
import { GeistUIThemes, Avatar, Button, Text, Link } from '@geist-ui/react';

const useStyles = makeStyles((ui) => ({
  root: {
    backgroundColor: ui.palette.accents_1,
  },
  content: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: `calc(${ui.layout.gap} * 2) ${ui.layout.pageMargin} calc(${ui.layout.gap} * 4)`,
    transform: 'translateY(-35px)',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 1,
    maxWidth: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  projects: {
    width: '100%',
  },
  activity: {
    flex: 1,
  },
  [`@media screen and (min-width: ${ui.layout.pageWidthWithMargin})`]: {
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    projects: {
      width: 540,
      maxWidth: '100%',
      marginRight: 80,
    },
    activityTitle: {
      marginTop: '0 !important',
      marginBottom: 30,
      fontSize: '14px !important',
      textAlign: 'start !important',
    },
    viewAll: {
      marginBottom: '0 !important',
      textAlign: 'start !important',
    },
  },
  viewAll: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: ui.layout.gap,
    textAlign: 'center',
  },
  activityTitle: {
    fontWeight: 700,
    marginTop: ui.layout.gap,
    fontSize: 24,
    textAlign: 'center',
  },
}));

function Overview() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div>
        <Text h2>Hey, I’m Koushith Amin</Text>
        <Text h4>
          I’m a Frontend Engineer and UI designer, Living in Bengaluru. i’m
          currently building next generation Decentralized Apps at Consenso
          Labs.
        </Text>
      </div>
      <div>
        <Button type='secondary' auto>
          Update Profile
        </Button>
        <Button auto>Update Profile</Button>
      </div>
    </div>
  );
}

export default Overview;
