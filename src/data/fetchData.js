import { useEffect } from "react"


const KEY = "AIzaSyCnsKWHQNPLThV4US96E56NO5Adx3fTSQo"

function MakeRequest() {
    const corsCorrect = "https://cors-anywhere.herokuapp.com/"
    const searchEndpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${KEY}&input="mosque"&inputtype="textquery"`

    const testSearchEndpoint = corsCorrect + searchEndpoint

    const searchRequestObject = new Request( testSearchEndpoint )

    useEffect( 
        fetch( searchRequestObject )
            .then ( response => {
                console.log( response )
            })
            .catch( err => {
                console.log(err)
            })
    )

    return (
        <>
            <h1>We are making request</h1>
        </>
    )
}


export default MakeRequest