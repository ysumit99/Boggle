import React from 'react';
import './Board.css';
import { generateRandomLetters } from '../Random/Random';


class Board extends React.Component {


    constructor(props) {

        super(props);

        /* This will be used to store Board state */
        this.state = {
            boardSize: this.props.size,
            randomLetters: generateRandomLetters(5)
        };

    }



    render() {
        return (
            <div className="App">
                <div className="container-fluid" id="container">

                    <div className="row">

                        <div className="col-6" id="board">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><input type="button" className="tile" id="00" name="00" value={this.state.randomLetters[0]} /></td>
                                        <td><input type="button" className="tile" id="01" name="01" value={this.state.randomLetters[1]} /></td>
                                        <td><input type="button" className="tile" id="02" name="02" value={this.state.randomLetters[2]} /></td>
                                        <td><input type="button" className="tile" id="03" name="03" value={this.state.randomLetters[3]} /></td>
                                        <td><input type="button" className="tile" id="04" name="04" value={this.state.randomLetters[4]} /></td>
                                    </tr>

                                    <tr>
                                        <td><input type="button" className="tile" id="10" name="10" value={this.state.randomLetters[5]} /></td>
                                        <td><input type="button" className="tile" id="11" name="11" value={this.state.randomLetters[6]} /></td>
                                        <td><input type="button" className="tile" id="12" name="12" value={this.state.randomLetters[7]} /></td>
                                        <td><input type="button" className="tile" id="13" name="13" value={this.state.randomLetters[8]} /></td>
                                        <td><input type="button" className="tile" id="14" name="14" value={this.state.randomLetters[9]} /></td>
                                    </tr>

                                    <tr>
                                        <td><input type="button" className="tile" id="20" name="20" value={this.state.randomLetters[10]} /></td>
                                        <td><input type="button" className="tile" id="21" name="21" value={this.state.randomLetters[11]} /></td>
                                        <td><input type="button" className="tile" id="22" name="22" value={this.state.randomLetters[12]} /></td>
                                        <td><input type="button" className="tile" id="23" name="23" value={this.state.randomLetters[13]} /></td>
                                        <td><input type="button" className="tile" id="24" name="24" value={this.state.randomLetters[14]} /></td>
                                    </tr>

                                    <tr>
                                        <td><input type="button" className="tile" id="30" name="30" value={this.state.randomLetters[15]} /></td>
                                        <td><input type="button" className="tile" id="31" name="31" value={this.state.randomLetters[16]} /></td>
                                        <td><input type="button" className="tile" id="32" name="32" value={this.state.randomLetters[17]} /></td>
                                        <td><input type="button" className="tile" id="33" name="33" value={this.state.randomLetters[18]} /></td>
                                        <td><input type="button" className="tile" id="34" name="34" value={this.state.randomLetters[19]} /></td>
                                    </tr>

                                    <tr>
                                        <td><input type="button" className="tile" id="40" name="40" value={this.state.randomLetters[20]} /></td>
                                        <td><input type="button" className="tile" id="41" name="41" value={this.state.randomLetters[21]} /></td>
                                        <td><input type="button" className="tile" id="42" name="42" value={this.state.randomLetters[22]} /></td>
                                        <td><input type="button" className="tile" id="43" name="43" value={this.state.randomLetters[23]} /></td>
                                        <td><input type="button" className="tile" id="44" name="44" value={this.state.randomLetters[24]} /></td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>

        );
    }
};

export default Board;