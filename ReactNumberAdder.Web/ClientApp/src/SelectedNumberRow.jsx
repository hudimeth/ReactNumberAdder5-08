import React from 'react'

class SelectedNumberRow extends React.Component {
    render() {
        const {number, onNumberLockClicked, isLocked } = this.props
        return (
            <li className='list-group-item'>{number}<button className='ms-5 btn btn-primary' onClick={onNumberLockClicked}>{`${isLocked ? 'Unlock' : 'Lock'}`}</button></li>
        )
    }
}

export default SelectedNumberRow