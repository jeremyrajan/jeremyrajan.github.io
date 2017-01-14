import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import 'whatwg-fetch';

const apiUrl = 'https://api.npmjs.org/downloads/range/last-month';

export default class NpmStats extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: []
    };
  }

  componentDidMount () {
    const npmModName = this.props.name.toLowerCase();
    if (!this.props.isNpm) {
      return;
    }
    fetch(`${apiUrl}/${npmModName}`)
      .then((response) => {
        return response.json()
      }).then((body) => {
        this.setState({
          stats: body.downloads
        });
      })
  }
  
  render() {
    if (!this.props.isNpm && !this.state.stats.length) {
      return <span></span>;
    }
    return (
    	<BarChart width={200} height={40} data={this.state.stats}>
         <Bar dataKey='downloads' fill='#ff6384'/>
       </BarChart>
    );
  }
}