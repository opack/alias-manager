interface FilterProps {
    // The initial term to use when filtering
    initialFilterTerm: string;

    // Callback which should filter the aliases
    filter(term: string): void;
}

export default FilterProps;