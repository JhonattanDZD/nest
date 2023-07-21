import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

function BabyCard({ memberName, image, age }) {
  return (
    <Card sx={{ display: "flex", marginX: "0.5rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <img className="familyParticipants__img" src={image} alt="" />
        </CardContent>
      </Box>
      <div>
        <p className="familyParticipants__card">{memberName}</p>
        <p className="familyParticipants__age">{age} Meses</p>
      </div>
    </Card>
  );
}

export default BabyCard;
