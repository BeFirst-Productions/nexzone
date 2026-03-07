import Image from "next/image";


export default function FaqLeftPanel() {
    return (
        <div>
        
            <h2
                style={{
                    margin: "0 0 16px",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: "#111111",
                }}
            >
                Frequently
                <br />
                Asked <span style={{ color: "#077ADE" }}>Questions</span>
            </h2>

            <p
                style={{
                    margin: "0 0 4px",
                    fontSize: "clamp(0.82rem, 1.5vw, 0.93rem)",
                    color: "#4B5563",
                    lineHeight: 1.7,
                    maxWidth: "360px",
                }}
            >
                To a great extent, we handle customer performances through efficient
                office automation solutions such as printer rental, AMC support, and
                managed print services throughout the UAE. Below are some of the
                clients&apos; frequently asked questions with answers.
            </p>

   
            <div
                style={{
                    position: "relative",
                    width: "clamp(200px, 30vw, 320px)",
                    aspectRatio: "1 / 1",
                }}
            >
             
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                 
                    }}
                />

             
                <div
                    style={{
                        position: "absolute",
                        inset: "-8% -6% -4% -4%",
                    }}
                >
                    <Image
                        src="/images/faqs/faq-printer-mock.webp"
                        alt="Office printer machine"
                        fill
                        style={{ objectFit: "contain", objectPosition: "center" }}
                        sizes="(max-width: 640px) 55vw, (max-width: 1024px) 30vw, 320px"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
