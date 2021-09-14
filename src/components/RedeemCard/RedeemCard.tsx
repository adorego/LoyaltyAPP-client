import React, {FC} from "react";
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import {CardMedia, CardHeader, CardContent, Typography} from "@material-ui/core";
import RedeemIcon from '@material-ui/icons/Redeem';
import {makeStyles, Theme} from "@material-ui/core/styles";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import {useDispatch} from "react-redux";
import {REDEEM_SELECTED} from "../../store/RedeemsReducer";
import {endPointsURI, postDataAPI} from "../../API/useAPI";


const useStyles = makeStyles((theme:Theme) => ({
    card: {
        textAlign:"center",
        border: "2px solid black",
        maxWidth: "100%",
        minHeight:"150px",
        height: "auto",
        padding:"20px"
    },
    media:{
        width:"100%",
        height:231
    },
    button:{

    },
    cost_description:{
        textAlign: "right"
    }
}));


export interface RedeemInt {
    id:string;
    title:string;
    description:string;
    points_cost:number;
    cost_description:string;
    image:string;


}

export const RedeemCard:FC<RedeemInt> = (props) =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSelectRedeem = async () => {
        const redeem = {...props};
        const data = {
            idUser: 1,
            date: new Date(),
            id_fidelityReward:props.id
        }
        console.log('Dta to send:', data);

        postDataAPI(endPointsURI.redemptions, data).then(
                (response:any) => {
                    if(response && response.error){
                        console.log(response.error);
                    }else{
                        console.log('Response from API', response);
                        dispatch({type: REDEEM_SELECTED, payload:redeem});

                    }
            })


    }

    return(
        <Card id={props.id} className={classes.card}>
            <CardHeader
                title={props.title}
            />

            <CardMedia id="productImage"
            className={classes.media} image={props.image}>

            </CardMedia>
            <CardContent>
                <Typography variant="h6" className={classes.cost_description}>
                    <SaveAltIcon />
                    {`${props.points_cost} ${props.cost_description}`}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>

            </CardContent>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                endIcon={<RedeemIcon/>}
                onClick={onSelectRedeem}
            >
                Redimir
            </Button>
        </Card>);
}

