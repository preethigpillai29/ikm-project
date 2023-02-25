import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
 
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{pr:"30px",pl:"30px",backgroundColor:"#80808014",pb:"100px"}}>
            <Typography gutterBottom variant="h5" component="div" class="reports">
         Reports
        </Typography>
        <Typography gutterBottom variant="h6" component="div" class="generate-repots">
        Generate New Reports
        </Typography>
      <Grid  container columns={{ xs: 4, sm: 8, md: 12 }} >
        {Array.from(Array(6)).map((_, index) => (
          <Grid  item xs={2} sm={2} md={2} key={index}>
            <Item>
           
   <AttachMoneyIcon/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Payment Types
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" class="btn">Select</Button>
       
      </CardActions>
 

            </Item>
          </Grid>
        ))}
      </Grid>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
       Recently Generated
        </Typography>
      </CardContent>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Item>
            <CardActionArea>
            <AttachMoneyIcon/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Payment Site Report
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Payment Date: 20/12/23
          Payment Type:All
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions> 
            </Item>
          </Grid>
        ))}
      </Grid>


    </Box>
  );
}