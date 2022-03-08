import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { cardActions } from '../redux/products/cardSlice'

const AllActions = {
  ...cardActions,
}

export const UseActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AllActions, dispatch)
}
