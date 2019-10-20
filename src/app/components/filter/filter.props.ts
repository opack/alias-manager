interface FilterProps {
    // Callback which should filter the aliases
    filter(term: string): void;
}

export default FilterProps;