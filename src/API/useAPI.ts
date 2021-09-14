
export const endPointsURI = {
    redeemList: "http://localhost:3004/fidelityRewards",
    pointsForRedeem: "http://localhost:3004/fidelityPoints",
    redemptions: "http://localhost:3004/redemptions"
}
export const getDataAPI = async (endpoint:string) =>{
    try {
        let response = await fetch(endpoint,{
            method: 'GET'

        });
        return await response.json();

    }catch (err){
        console.log(err);
    }
}

export const postDataAPI = async (endpoint:string, data:any) =>{
    try {
        let response = await fetch(endpoint, {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        });
        return await response.json();
    }catch (err){
        console.log(err);
    }
}