import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import FullPost from './FullPost/FullPost';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    componentDidMount () {
        console.log(this.props)
    }

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:  '/new-post', /* Absolute path*/
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>NewPost</NavLink></li>

                        </ul>
                       
                    </nav>
                </header>
               { /*
                <Route path="/" exact render={()=> <h1>Home</h1>} />
               */}
              {/*  <Route path="/" exact component={Posts} /> */}
               <Switch>
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component = {FullPost} />
                <Redirect from="/" to ="/posts" />
                
               </Switch>
               

            </div>
        );
    }
}

export default Blog;