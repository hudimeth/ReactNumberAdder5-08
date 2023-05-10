import React from 'react'
import SelectedNumberRow from './SelectedNumberRow'

class SelectedNumbers extends React.Component {
    render() {
        const { numbers, onNumberLockClicked } = this.props
        return (
            <div className='row p-5 rounded'>
                <div className='col-md-6 col-md-offset-3'>
                    <h3>Selected Numbers </h3
                    ><ul className='list-group'>
                        {numbers.map((number, i) => <SelectedNumberRow number={number} key={i} onNumberLockClicked={() => onNumberLockClicked(number)} />)}
                    </ul>
                </div>
            </div>
            )
    }
}
export default SelectedNumbers