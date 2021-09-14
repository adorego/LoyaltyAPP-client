import {FC} from "react";
import Card from "@material-ui/core/Card";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {CardContent, CardHeader, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme:Theme) => ({
    card: {
        marginTop:"30px",
        textAlign:"center",
        border: "2px solid black",
        maxWidth: "100%",
        minHeight:"150px",
        height: "auto",
        color:"black",
        backgroundColor:"#F0E9E9"
    },
    button:{

    }
}));

export interface PointsInt{
    idUser:number;
    points:number;
    title:string;

}
export const PointsCard:FC<PointsInt> = (props) =>{
    const classes = useStyles();

    return (
        <Card id={Number(props.idUser).toString()} className={classes.card}>
            <CardHeader title={props.title}/>
            <CardContent>
                <Typography variant="h2">
                    {props.points}
                </Typography>
            </CardContent>

        </Card>
    )
}