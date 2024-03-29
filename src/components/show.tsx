export default function ShowIf(props: {condition: boolean, children: any}) {
    if (props.condition) {
        return (
            <>
            {props.children}
            </>
            );
    }
    return(
        <></>
    );
}