import React from "react"
import IconLoader from "react-spinners/MoonLoader" //GridLoader
import "./Loading.css"


class Loading extends React.Component {
    render() {
        return (
            <div className="e-loading">
                <IconLoader
                    size={70}
                    color={"#000"}
                />
            </div>
        )
    }
 }

 export default Loading

 