import AliasData from "../../services/@data-types/alias-data";

interface AliasListProps {
    // Contains all the aliases to display
    aliases: AliasData[];

    // Called when the alias removal is asked
    onRemoveAliasClick(id: string): void;
}

export default AliasListProps;