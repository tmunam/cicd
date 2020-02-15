import React, { Component } from "react";
import { Link } from "react-router-dom";
class AdminWrapper extends Component {
    render() {
        return (
            <div>
                <Link className="btn btn-primary" to="/posts/new">
                    Add a Post
                </Link>
                <div>wrapper</div>
            </div>
        );
    }
}

export default AdminWrapper;