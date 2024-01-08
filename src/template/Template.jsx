// import Test3 from "../Components/test";
import { Container } from "react-bootstrap";
import Homesection from "../Pages/Homepage";
import Topnav from "../Pages/Navbar";
import ServiceSection from "../Pages/Services";
import Project from "../Pages/Projectsection";

export default function Templates() {
    return (
        <>
            <Topnav />
            <Container >
                <Homesection />
                <ServiceSection />
                <Project />
            </Container>
            {/* <Test3 /> */}
        </>
    )
}