import UserClass from "./UserClass"

const About = ()=>{
    return(
        <div className="about-us">
            <h1>About</h1>
            <h1>EatEasy</h1>
            <UserClass state={"Andhra"} city={"Peddapuram"} />
        </div>
    )
}

export default About