import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <React.Fragment>
            <header className="p-3 border-bottom bg-light">
                <div className="container-fluid">
                    <div className="row g-3">
                        <div className="col-md-3 text-center">
                            <Link to="/"><img alt="logo" src="../../images/logo.webp" /></Link>
                        </div>
                        <div className="col-md-5">
                            <Search />
                        </div>
                        <div className="col-md-4">
                            <div className="position-relative d-inline me-3">
                                <Link to="/cart" className="btn btn-primary">
                                    <IconCart3 className="i-va"/>
                                </Link>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-secondary rounded-circle border mr-3 dropdown-toggle1" data-toggle="dropdown" aria-expanded="false" aria-label="Profile">
                                    <FontAwesomeIcon icon={faUser} className="text-light" />
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/account/profile">
                                            <IconPersonBadgeFill /> My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/account/profile">
                                            <IconPersonBadgeFill /> My Profile
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;