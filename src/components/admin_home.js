import React, { Component } from "react";
import AdminHeader from './admin_header';
import AdminWrapper from './admin_wrapper';

class AdminHome extends Component {
    constructor() {
        super();
        this.body = this.body.bind(this);
    }
    body() {
        return (
            <div>body</div>
        )
    }
    render() {
        return (
            <div>
                <AdminHeader/>
                <AdminWrapper/>
            </div>
        );
    }
}

export default AdminHome;