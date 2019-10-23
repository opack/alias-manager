interface HomeProps {
    initialFilterTerm: string;
    aliases: string[];
    addAlias(alias: string): void;
    updateFilter(term: string): void;
}

export default HomeProps;