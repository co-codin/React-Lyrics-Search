import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

class Search extends Component {
    state = {
        trackTitle: ''
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music" /> Search For A Song
                            </h1>
                            <p className="lead text-center">Get the lyrics for any song</p>

                            <form>
                                <div className="form-group">
                                    <input  type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Song title..."
                                            name="trackTitle"
                                            value={this.state.trackTitle}
                                            onChange={this.onChange.bind(this)}
                                            />
                                </div>
                                <button type="submit"
                                        className="btn btn-primary btn-lg btn-block mb-5"
                                        >
                                        Get Track Lyrics
                                </button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search
