interface AliasCreatorProps {
    // Called when the alias is submitted and the creation must be performed
    onCreateAliasClick(from: string, to: string): void;
}

export default AliasCreatorProps;