import React, {useEffect, useReducer} from "react";
import {RedeemInt, RedeemCard} from "../RedeemCard/RedeemCard";
import {PointsInt, PointsCard} from "../PointsCard/PointsCard";
import {endPointsURI, getDataAPI} from "../../API/useAPI";
import {CircularProgress, Grid} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => ({
    root:{
        flexGrow: 1,
        margin:"auto"
    }
}));

const LOAD_REDEEM_LIST = "LOAD_REDEEM_LIST";
const LOAD_POINTS_TO_REDEEM = "LOAD_POINTS_TO_REDEEM";

const redeemListReducer = (state:any, action:any) => {

  switch (action.type){
    case(LOAD_REDEEM_LIST):
        return [...action.payload];
    default:
        return state;
  }
}

const pointsToRedeemReducer = (state:any, action:any) => {
    switch (action.type){
        case(LOAD_POINTS_TO_REDEEM):
            return ({...action.payload});
        default:
            return state;
    }
}
const initialRedeemListState:RedeemInt[] = [];
const initialPointsToRedeemState:PointsInt = {} as PointsInt;

export const RedeemListCards = () => {
  const [redeemList, dispatchRedeemList] = useReducer(redeemListReducer, initialRedeemListState);
  const [pointsForRedeem, dispatchPoints] = useReducer(pointsToRedeemReducer, initialPointsToRedeemState);
  //const endpointRedeemList:string = "http://localhost:3004/premiosFidelidad";
  //const endpointPointsForRedeem:string = "http://localhost:3004/puntosFidelidad";
    const endpointRedeemList:string = endPointsURI.redeemList;
    const endpointPointsForRedeem: string = endPointsURI.pointsForRedeem;

  const classes = useStyles();
  useEffect(() =>{
     getDataAPI(endpointPointsForRedeem).then(
         (data:any) => {
             if(data && data.error){
                 console.log(data.error);
             }else{

                 dispatchPoints({type:LOAD_POINTS_TO_REDEEM, payload:data[0]})
             }
         }
     )
  }, []);

  useEffect( () =>{
    getDataAPI(endpointRedeemList).then(
        (data:any) => {
          if(data && data.error){
            console.log(data.error);
          }else{

            dispatchRedeemList({type:LOAD_REDEEM_LIST, payload:data})
          }
        })

  },[])


  return(
      <div className={classes.root}>
            <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <PointsCard {...pointsForRedeem} />
                    </Grid>

                      { redeemList ?
                          redeemList.map(
                              (item:RedeemInt) => (
                                  <Grid key={item.id} item xs={12}>
                                    <RedeemCard key={item.id} {...item} />
                                  </Grid>
                              )
                          )
                          : (
                              <CircularProgress />
                          )
                      }
            </Grid>




      </div>
  )
};