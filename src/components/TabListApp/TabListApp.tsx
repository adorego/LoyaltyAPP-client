import React, {useState} from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Container, Tab, Tabs} from "@material-ui/core";
import {RedeemListCards} from "../RedeemListCards/RedeemListCards";

const useStyles = makeStyles( (theme:Theme) => ({
    root:{
        flexGrow: 1

    },
    tabContainer:{
        margin:"auto"
    }


}));

export const TabListApp = () => {
    const [selectedTab, setTab] = useState(0);

    const onChange = (e:Object, value:any) => {
        console.log('Value passed:', value);
        setTab(value);

    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Tabs value={selectedTab} onChange={onChange}>
                    <Tab label="Inicio" />
                    <Tab label="Referir" />
                    <Tab label="Mis Ofertas" />
                </Tabs>
                {selectedTab === 0 && (
                    <div>
                        <RedeemListCards />
                    </div>
                )}
            </Container>
        </div>
    )
}