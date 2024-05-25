import React from 'react'
import {Grid,Avatar,Box,ToggleButton,Typography,Badge} from '@mui/material'
import av1 from './av1.jpg'
import av2 from './av2.jpg'
import av3 from './av3.jpg'
import av11 from './av11.webp'
import av5 from './av5.jpg'
import av6 from './av6.jpg'
import av7 from './av7.jpg'
import av8 from './av8.jpg'
import av9 from './av9.png'
import crown from './crown.jpg'
const Leaders = () => {
    const[activeButton,setActiveButton]=React.useState()
    const handleButtonClick = (index) => {
        setActiveButton(index);
      };
  return (
    <>
        <Grid container spacing={1}sx={{backgroundColor:'skyblue'}}>

            <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
                <Typography style={{color:'white',fontSize:'35px',marginTop:'10px'}}>Leaderboard</Typography>
            </Grid>

            
            
            <Grid item xs={4}  sx={{ display: 'flex', marginTop: '40px', marginLeft: '450px', backgroundColor: 'white', borderRadius: '25px',marginBottom:'20px' }}>
                <ToggleButton
                    onClick={() => handleButtonClick(0)}
                    sx={{ backgroundColor: activeButton === 0 ? 'skyblue' : 'transparent',marginLeft:'25px'}}>
                    All Time
                </ToggleButton>
                <ToggleButton
                    onClick={() => handleButtonClick(1)}
                    sx={{ backgroundColor: activeButton === 1 ? 'skyblue' : 'transparent',marginLeft:'40px'}}>
                    This Week
                </ToggleButton>
                <ToggleButton
                    onClick={() => handleButtonClick(2)}
                    sx={{ backgroundColor: activeButton === 2 ? 'skyblue' : 'transparent',marginLeft:'40px' }}>
                    Month
                </ToggleButton>
            </Grid >
            
            <Grid item xs={12} sx={{display:'flex',justifyContent:'center'}}>
                <Avatar alt="crown" src={crown} sx={{height:'100px',width:'100px',marginTop:'20px'}} />
            </Grid>

            <Grid item xs={4} sx={{ display: 'flex',alignItems:'flex-end',flexDirection:'column',marginBottom:'20px',position:'relative'}}>
                <Avatar alt="av1" src={av1} sx={{margin:'100px 0px 0px 0px',height:'100px',width:'100px',zIndex:'1'}}/>
                <Badge sx={{marginRight:'50px'}} badgeContent={2} color="success" />
                <div style={{backgroundColor:'#DAFAFF',position:'absolute',marginTop:'150px',zIndex:0,borderRadius:'5px',width:'100px',height:'150px'}}>
                    <Typography sx={{marginTop:'60px',fontSize:'20px',marginLeft:'15px'}}>Lennert</Typography>
                    <Typography sx={{fontSize:'20px',marginLeft:'15px'}}>120.774</Typography>
                </div>
            </Grid>
            
            <Grid item xs={4} sx={{ display: 'flex',flexDirection:'column'}}>
                <Avatar alt="av2" src={av2} sx={{height:'150px',width:'150px',margin:'0px 0px 0px 140px',position:'relative',zIndex:1}} />
                <Badge sx={{marginRight:'200px'}} badgeContent={1} color="primary" />
                <div style={{backgroundColor: '#DAFAFF', 
  position: 'absolute', 
  top: '380px', 
  left: '563px', 
  zIndex: 0, 
  borderRadius: '5px', 
  height: '235px', 
  width: '150px', 
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  justifyContent: 'center',}}>
                    <Typography sx={{fontSize:'20px',marginTop:'10px'}}>David James</Typography>
                    <Typography sx={{fontSize:'20px'}}>144.093</Typography>
                </div>
            </Grid>

            <Grid item xs={4} sx={{position:'relative', display: 'flex',alignItems:'flex-start', flexDirection:'column',marginTop: '20px',marginBottom:'20px'}}>
                <Avatar alt="av3" src={av3} sx={{height:'100px',width:'100px',marginTop:'100px',zIndex:1}}/>
                    <Badge sx={{marginLeft:'50px'}} badgeContent={3} color='secondary'/>
                    <div style={{backgroundColor:'#DAFAFF',position:'absolute',margin:'140px 0px 0px 0px',zIndex:0,borderRadius:'5px',height:'140px',width:'100px'}}>
                        <Typography sx={{marginLeft:'23px',fontSize:'20px',marginTop:'70px'}}>Peter</Typography>
                        <Typography sx={{marginLeft:'20px',fontSize:'20px'}}>95.876</Typography>
                    </div>
            </Grid>
            
            <Grid item xs={12} height={'460px'}>
                <Box sx={{height:'25rem',width:'79rem',borderRadius:'500rem 500rem 500rem 500rem',backgroundColor:'white',marginTop:'50px'}}>
                <div style={{height:'15px'}}></div>
                    <Grid item xs={8}sx={{ display: 'flex',flexDirection:'row', marginTop: '10px',backgroundColor:'white',marginLeft:'200px'}}>
                
                        <Typography style={{marginTop:'10px',marginLeft:'180px',fontSize:'15px'}}>4</Typography>
                        <Avatar alt="av11" src={av11} sx={{height:'50px',width:'50px',marginLeft:'100px'}} />
                        <Typography sx={{margin:'10px 0px 0px 80px',fontSize:'15px',width:'150px'}}>Smith Carol</Typography>
                        <Typography sx={{margin:'10px 0px 0px 50px',fontSize:'15px'}}>91.736</Typography>
                    </Grid>

                    <Grid item xs={8}sx={{ display: 'flex',flexDirection:'row', marginTop: '10px',backgroundColor:'white',marginLeft:'200px'}}>
                
                        <Typography style={{marginTop:'10px',marginLeft:'180px',fontSize:'15px'}}>5</Typography>
                        <Avatar alt="av7" src={av7} sx={{height:'50px',width:'50px',marginLeft:'100px'}} />
                        <Typography sx={{margin:'10px 0px 0px 80px',fontSize:'15px',width:'150px'}}>Alen Becker</Typography>
                        <Typography sx={{margin:'10px 0px 0px 50px',fontSize:'15px'}}>90.281</Typography>
                    </Grid>

                    <Grid item xs={8}sx={{ display: 'flex',flexDirection:'row', marginTop: '10px',backgroundColor:'white',marginLeft:'200px'}}>
                
                        <Typography style={{marginTop:'10px',marginLeft:'180px',fontSize:'15px'}}>6</Typography>
                        <Avatar alt="av5" src={av5} sx={{height:'50px',width:'50px',marginLeft:'100px'}} />
                        <Typography sx={{margin:'10px 0px 0px 80px',fontSize:'15px',width:'150px'}}>Shalini</Typography>
                        <Typography sx={{margin:'10px 0px 0px 50px',fontSize:'15px'}}>88.463</Typography>
                    </Grid>

                    <Grid item xs={8}sx={{ display: 'flex',flexDirection:'row', marginTop: '10px',backgroundColor:'white',marginLeft:'200px'}}>
                
                        <Typography style={{marginTop:'10px',marginLeft:'180px',fontSize:'15px'}}>7</Typography>
                        <Avatar alt="av6" src={av6} sx={{height:'50px',width:'50px',marginLeft:'100px'}} />
                        <Typography sx={{margin:'10px 0px 0px 80px',fontSize:'15px',width:'150px'}}>Mary James</Typography>
                        <Typography sx={{margin:'10px 0px 0px 50px',fontSize:'15px'}}>85.287</Typography>
                    </Grid>

                    <Grid item xs={8}sx={{ display: 'flex',flexDirection:'row', marginTop: '10px',backgroundColor:'white',marginLeft:'200px'}}>
                
                        <Typography style={{marginTop:'10px',marginLeft:'180px',fontSize:'15px'}}>8</Typography>
                        <Avatar alt="av8" src={av8} sx={{height:'50px',width:'50px',marginLeft:'100px'}} />
                        <Typography sx={{margin:'10px 0px 0px 80px',fontSize:'15px',width:'150px'}}>Aman</Typography>
                        <Typography sx={{margin:'10px 0px 0px 50px',fontSize:'15px'}}>84.009</Typography>
                    </Grid>

                    <Grid item xs={8}sx={{ display: 'flex',flexDirection:'row', marginTop: '10px',backgroundColor:'white',marginLeft:'200px'}}>
                
                        <Typography style={{marginTop:'10px',marginLeft:'180px',fontSize:'15px'}}>9</Typography>
                        <Avatar alt="av9" src={av9} sx={{height:'50px',width:'50px',marginLeft:'100px'}} />
                        <Typography sx={{margin:'10px 0px 0px 80px',fontSize:'15px',width:'150px'}}>Marcus North</Typography>
                        <Typography sx={{margin:'10px 0px 0px 50px',fontSize:'15px'}}>83.292</Typography>
                    </Grid>

                </Box>
            </Grid>
            
            
        </Grid>
    </>
  )
}

export default Leaders
