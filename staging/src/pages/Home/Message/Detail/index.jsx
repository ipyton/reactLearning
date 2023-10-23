import React, {Component} from "react";
const DetailData = [
    {id:'01', content:'hello'},
    {id:'02', content:'ok'},
    {id:'03', content:'good'},
]

export default class Detail extends Component {
    render() {
        console.log(this.props)
        const {id, title} = this.props.match.params

        // get parameters manually.
        //const {search} = this.props.location
		//const {id,title} = qs.parse(search.slice(1))

        // const {id,title} = this.props.location.state || {}
        const findResult = DetailData.find((detailObj)=>{
            return detailObj.id === id
        })
        console.log(findResult)
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}