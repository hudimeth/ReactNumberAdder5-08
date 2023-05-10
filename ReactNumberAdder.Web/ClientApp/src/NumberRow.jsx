import React from 'react'

class NumberRow extends React.Component {
    render() {
        const {number, isSelected, onNumberSelectClicked, lockedNumbers } = this.props

        return (
            <tr>
                <td>{number}</td>
                <td>
                    <button onClick={onNumberSelectClicked}
                        className={`btn ${isSelected ? 'btn-danger' : 'btn-warning'}`}
                        disabled={lockedNumbers.includes(number) }
                    >{`${isSelected ? 'Remove from selected' : 'Add to selected'}`}</button>
                </td>
            </tr> 
       )
    }
}
export default NumberRow