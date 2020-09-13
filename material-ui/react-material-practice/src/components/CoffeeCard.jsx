import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  headerContent: {
    height: "40px",
  },
  media: {
    height: "150px",
  },
  description: {
    height: "105px",
  },
});
const CoffeeCard = (props) => {
  const { avatarUrl, title, price, description, imageUrl } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.headerContent}
        avatar={<Avatar aria-label="recipe" src={avatarUrl} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia className={classes.media} image={imageUrl} />

      <CardContent>
        <Typography
          className={classes.description}
          variant="body2"
          component="p"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCard;
