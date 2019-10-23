import Filter from "../filter/filter.component";
import HomeProps from "./home.props";
import React from "react";
import AliasList from "../alias-list/alias-list.component";
import AliasCreator from "../alias-creator/alias-creator.component";

const Home = ({ initialFilterTerm, aliases, addAlias }: HomeProps) => {
    return (
        <div>
            <Filter initialFilterTerm={initialFilterTerm} />
            <AliasList aliases={aliases} />
            <AliasCreator onCreateAliasClick={addAlias} />
        </div>
    );
};

export default Home;