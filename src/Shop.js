import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

const Shop = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <button className="btn btn-primary mx-1 my-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(50))}}>-</button>
      Perform Transaction
      <button className="btn btn-primary mx-1 my-3" onClick={()=>{dispatch(actionCreators.depositMoney(50))}}>+</button>
    </div>
  )
}

export default Shop
