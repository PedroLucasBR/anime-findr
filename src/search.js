import React, { Component } from 'react';
import axios from 'axios';

import Anime from './animes'

const API_URL = 'https://kitsu.io/api/edge/'

class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get(`${API_URL}anime?filter[text]=${this.state.query}`)
            .then(({ data }) => {
                this.setState({
                    results: data.data
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Qual anime quer pesquisar?"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <Anime results={this.state.results} />
            </form>
        )
    }
}

export default Search