import LabeledVal from "./labeledVal";

export default function Unique(props: { instances: number }) {
    if (props.instances == 1) return (
        <div className="p-1">
            <LabeledVal topText="Unikátnost" botText="✅ Tato karta je unikátní" color="#4fc487" />
        </div>
    );
    const botText = `❌ Tato karta není unikátní, je jich ${props.instances}`;
    return (
        <div className="p-1">
            <LabeledVal topText="Unikátnost" botText={botText} color="#4fc487" />
        </div>
    )
}