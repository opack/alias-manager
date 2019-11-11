import AliasProps from "./alias.props";

const defaultProps: AliasProps = {
    id: '',
    from: '',
    to: '',
    onRemoveAliasClick: (id: string) => console.log('Removing alias id=', id)
};

export default defaultProps;