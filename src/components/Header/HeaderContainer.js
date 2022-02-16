import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        userAuth: state.userIsAutorize.userAuth
    }
}


const HeaderContainer = connect(mapStateToProps, null)(Header)

export default HeaderContainer