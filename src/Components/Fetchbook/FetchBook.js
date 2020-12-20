import React from 'react';
import axios from 'axios';

export default class FetchBook extends React.Component{
    
    state ={
        fetchbooks:[],
    };
    
    componentDidMount(){
        axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pxdQ5nNDgoLG8nnBm2hG62RuohdYWFcM")
        .then(res=>{
            console.log(res.data.results);
            this.setState({fetchbooks:res.data.results});
        });
        
    } 
    render()
    {
        
        return (
            <>
        Best Selling Books in Amazon;
            <ul>
                {this.state.fetchbooks.map(fetchbook => <li>{fetchbook.list_name}<a href="#" style={{color:'#fff',transition:'0.2s ease-out',textAlign:'center', padding:'0.1rem 0.1rem',border:'none',background:'#e31837',outline:'none !important',fontSize:'0.6rem'}}>
                    View Details
                    </a>
                    </li>)}
            </ul>
        
        </>
        )
    }

}