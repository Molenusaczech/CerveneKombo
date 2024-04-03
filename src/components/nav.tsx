import Link from 'next/link'

export default function Nav() {
    return (
        <div style={
            {
                backgroundColor: "var(--primary)",
                color: "white",
                padding: "10px",
                width: "100%",
            }
        }>
            <Link href="/">Home</Link>

        </div>
    )
}