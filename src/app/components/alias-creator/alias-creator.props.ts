interface AliasCreatorProps {
    // The domain of the alias
    domain: string;

    // Called when the alias is submitted and the creation must be performed
    onCreateAliasClick(from: string, to: string): void;
}

export default AliasCreatorProps;