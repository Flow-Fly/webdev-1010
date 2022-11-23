import React from "react"
import Parent from "./Parent"
const GrandParent = ({ callback }) => {
	return <Parent setCounter={callback} />
}

export default GrandParent
