import React from "react";

import { Link, useRouteMatch } from "react-router-dom";

import SimpleRouteLinkProps from "./simple-route-link.props";
import defaultProps from "./simple-route-link.default-props";

const SimpleRouterLink = ({ label, to, activeOnlyWhenExact = false }: SimpleRouteLinkProps) => {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "is-active" : ""}>
            <Link to={to}>{label}</Link>
        </li>
    );
};

SimpleRouterLink.defaultProps = defaultProps;

export default SimpleRouterLink;