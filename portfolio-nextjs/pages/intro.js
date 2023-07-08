import Link from "next/link";

export default function Intro() {
    return (<main>
            <section>
                <div>
                    {/* TODO - Image here */}
                </div>
                <div>
                    {/* TODO - This can be clickable in the future which leads to Musin */}
                    NiharGharat
                </div>
                <div>
                    <Link href={"./experience"}>E</Link>
                    <Link href={"./projects"}>P</Link>
                    <Link href={"./contanct"}>C</Link>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        #/nihar/aboutMe
                    </div>
                    <div>
                        <div>hi, I am Nihar Gharat</div>
                        <div>I am a backend software developer currently based in US. I am passionate about working on interesting ideas/projects. Check out my work</div>
                    </div>
                </div>
            </section>
        </main>
    )
}