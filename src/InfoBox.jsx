import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
const INIT_URL="https://media.istockphoto.com/id/1032071044/photo/blue-color-dust-particles-splash-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Ck47H9jhBDLRWjrvFw7eEu1uA2J1Fn64qMkJRnbDxs=";
const HOT_URL="https://images.unsplash.com/photo-1496347315686-5f274d046ccc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UfGVufDB8fDB8fHww";
const COLD_URL="https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
const RAIN_URL="https://images.unsplash.com/photo-1511294952778-165d813e9eeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJBSU58ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity >80 
            ?RAIN_URL
            :info.temp>15
            ?HOT_URL
        :COLD_URL
    }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city}{
            info.humidity >80 
                ?<ThunderstormIcon/>
                :info.temp>15
                ?<WbSunnyIcon/>
            :<AcUnitIcon/>
        
           }
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}&deg;C</p>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>Max Temp={info.tempMax}&deg;C</p>
        <p>the weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card></div></div>
    );
};