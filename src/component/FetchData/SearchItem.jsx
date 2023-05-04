import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokyName } from '../../state/action-creator';

export default function SearchItem() {

    const apiData = useSelector((state)=>state.todo)

    const dispatch = useDispatch();

    const handleClick = (val) => {
        if(val){
            dispatch(getPokyName(val))
        }
        
    }

  return (
    <div className="headerItem">
      <input
        type="search"
        list="search"
        className="inpSearch"
        onChange={(e) =>handleClick(e.target.value)}
      />
      <datalist id="search" className="dataList">
        {apiData.apiData &&
         apiData.apiData.map((e, i) => {
            return (
              <option key={e.name} className="options" value={e.name}>
                {e.name}
              </option>
            );
          })}
      </datalist>
    </div>
  )
}
