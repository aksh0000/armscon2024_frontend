import React from 'react'
import './ActivityCard.css';
import Hr from './Hr.js'
import image from '../assets/doctor_treating.jpeg'
import { Button } from '@mui/material';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Person3Icon from '@mui/icons-material/Person3';
import AddIcon from '@mui/icons-material/Add';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(5),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(4),
  },
}));
export default function ActivityCard2(props) {
  return (
    <div id="ActivityCard_container" style={{ background: `url("${props.image}")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

      <article>

        <br />
        <section id="text_container">
          <h3>{props.name}</h3>
          <ul>
            <li>
              <h4><CalendarMonthOutlinedIcon /></h4><p>{props.date}</p>
            </li>

            <li>
              <h4><FmdGoodOutlinedIcon /></h4><p>{props.venue}</p>
            </li>
          </ul>
          <h2 style={{ textAlign: 'left', color: 'white', padding: '0% 3%', marginTop: "30px", fontWeight: '1000', fontSize: 'large' }}>{props.subheading}</h2>
          <p id="workshop_details">
            <b>About : </b>{props.about}
          </p>
          <section id="btn_container" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <CustomizedDialogs name_of_coordinator="Himanshu Digwal" email="ruthlessdestroyer085@gmail.com" phno="6396233297" />
            <Button color="secondary" startIcon={<AddIcon/>}> ENROLL</Button>
          </section>
         
          <br />
        </section>
      </article>

      <br />
    </div>
  )

}

function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button startIcon={<Person3Icon/>}color="secondary" onClick={handleClickOpen} >Contact Coordinator</Button>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {props.name_of_coordinator}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom sx={{ color: 'black', textAlign: 'center', color: 'grey' }}>
            Ask your doubts regarding the respective workshops to the Co-ordinators
          </Typography>
          <br />
          <br />
          <Typography gutterBottom>
            <TextField id="standard-basic" label="Your Phone number" variant="outlined" fullWidth color='secondary' />
          </Typography>
          <Typography gutterBottom sx={{ color: 'black' }}>
            <TextField id="standard-basic" label="Write your message..." variant="outlined" color='secondary' multiline fullWidth
              rows={5} />
          </Typography>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Send Message
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
