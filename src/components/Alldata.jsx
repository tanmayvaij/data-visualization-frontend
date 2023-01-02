import { useEffect, useState } from "react"
import { GlobalStates } from "../context"

export default function Alldata() {

    const [ data, setData ] = useState([])

    const { SERVER_ADDRESS } = GlobalStates()

    useEffect(() => {

        const getData = async () => {

            const res = await fetch(`${SERVER_ADDRESS}/api/data/getAllData`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })

            const { records } = await res.json()

            setData(records)

        }

        getData()

    }, [])

    return (
        <div id="alldata">
            <div className="">
            {
                data.map((val) => {
                    return (
                        <div className="recs text-sm m-5 rounded-md p-3" key={val._id}>
                            <p>Start year:- {val.start_year}</p>
                            <p>End year:- {val.end_year}</p>
                            <p>Impact:- {val.impact}</p>
                            <p>Intensity:- {val.intensity}</p>
                            <p>Sector:- {val.sector}</p>
                            <p>Topic:- {val.topic}</p>
                            <p>Insight:- {val.insight}</p>
                            <p><a href={val.url}>Click here</a></p>
                            <p>Region:- {val.region}</p>
                            <p>Added:- {val.added}</p>
                            <p>Published:- {val.published}</p>
                            <p>Country:- {val.country}</p>
                            <p>Relevence:- {val.relevence}</p>
                            <p>Pestle:- {val.pestle}</p>
                            <p>Source:- {val.source}</p>
                            <p>Title:- {val.title}</p>
                            <p>Likelihood:- {val.likelihood}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )

}
