import Image from "next/image";

export default function NavBar() {
    return (
        <div style={{
            backgroundColor: 'var(--prussian-blue)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            padding: '10px',
            color: 'white',
            display: 'flex',
        }}>
            <div>
                <Image
                    src="/combo.png"
                    alt="logo"
                    height={50}
                    width={50}
                    style={{
                        display: "inline"
                    }}
                />
                <span style={{
                    fontSize: '24px',
                    marginLeft: '10px',
                    display: "inline",
                    verticalAlign: "middle"
                }}>Červené kombo</span>
            </div>

            <div className="text-center align-middle" style={{
                marginLeft: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '10px',
            }}>
                <a href="/">Domů</a>
            </div>
        </div>
    )
}