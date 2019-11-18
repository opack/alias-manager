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
        <div className={match ? "active" : ""}>
            {match && "> "}
            <Link to={to}>{label}</Link>
        </div>
    );
};

SimpleRouterLink.defaultProps = defaultProps;

export default SimpleRouterLink;