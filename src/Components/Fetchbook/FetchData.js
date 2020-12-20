import React from 'react';
import axios from 'axios';

export default class FetchData extends React.Component{
    
    state ={
        fetchdata:[],
    };
    
    componentDidMount(){
        axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pxdQ5nNDgoLG8nnBm2hG62RuohdYWFcM ")
        .then(res=>{
            console.log(res.data.results);
            this.setState({fetchdata:res.data.results});
        });
        
    } 
    render()
    {
        
        return (
            <>
        About best selling books;
            <ul>(
                {this.state.fetch.map(fetchdata => <li>{fetchdata.display_name}
                    </li>)};
            </ul>
        
        </>
        )
    }

}