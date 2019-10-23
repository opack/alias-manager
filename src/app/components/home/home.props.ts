interface HomeProps {
    initialFilterTerm: string,
    aliases: string[],
    addAlias(alias: string): void
}

export default HomeProps;