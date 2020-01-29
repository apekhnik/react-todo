import React from 'react'


const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all'
    },
    {
        text: 'Active',
        id: 'active'
    },
    {
        text: 'Completed',
        id: 'completed'
    },
]
const Footer =({amount, activeFilter, changeFilters})=>{
    return(
        <div className="footer">
        <span className="amount">{`${amount} Task Left`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({text, id})=>{
                return(
                <button 
                key={id} 
                className={id === activeFilter ? ' filter-btn active' : 'filter-btn'} 
                onClick={() => {changeFilters(id)}}>{text}</button>
                )
            })}
        </div>
        </div>
    )
}
export default Footer