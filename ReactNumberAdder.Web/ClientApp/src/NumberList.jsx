import React from 'react'
import NumberRow from './NumberRow'
import { produce } from 'immer'
import SelectedNumbers from './SelectedNumbers'

class NumberList extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    onAddClicked = () => {
        const number = Math.floor(Math.random() * 1000)
        const nextState = produce(this.state, drafState => {
            drafState.numbers.push(number)
        })
        this.setState(nextState)
    }
    onNumberSelectClicked = (number) => {
        const { selectedNumbers } = this.state
        if (selectedNumbers.includes(number)) {
            this.setState({ selectedNumbers: selectedNumbers.filter(n => n !== number) })
        } else {
            this.setState({ selectedNumbers: [...selectedNumbers, number] })
        }
        //console.log(selectedNumbers.includes(number))
    }

    onNumberLockClicked = (number) => {
        const {lockedNumbers } = this.state
        if (lockedNumbers.includes(number)) {
            this.setState({ lockedNumbers: lockedNumbers.filter(n => n !== number) })
        } else {
            this.setState({ lockedNumbers: [...lockedNumbers, number] })
        }
    }

    render() {
        const { numbers, selectedNumbers, lockedNumbers } = this.state
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <button onClick={this.onAddClicked} className='btn btn-success'>Add</button>
                </div>
                <div className='row'>
                    <table className='table table-hover table-bordered table-striped mt-5'>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Add/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numbers.map((number, i) => <NumberRow number={number}
                                                                    key={i}
                                                                    isSelected={selectedNumbers.includes(number)}
                                                                    lockedNumbers={ lockedNumbers}
                                                                    onNumberSelectClicked={() => this.onNumberSelectClicked(number)}
                                />)}
                        </tbody>
                    </table>
                    <SelectedNumbers numbers={selectedNumbers} onNumberLockClicked={this.onNumberLockClicked} />
                </div>
            </div>
            )
    }
}
export default NumberList