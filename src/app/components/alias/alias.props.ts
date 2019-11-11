interface AliasProps {
    id: string;
    
    // The alias receiving the mails
    from: string;

    // The e-mail all mails are sent to
    to: string;

    // Called when the alias removal is asked
    onRemoveAliasClick(id: string): void;
}

export default AliasProps;