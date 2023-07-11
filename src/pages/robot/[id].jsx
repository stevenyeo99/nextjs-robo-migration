import Link from "next/link";

import RootLayout from "@/app/layout";
import Card from "@/components/Card";

const Robot = ({robot}) => {
    return (
        <div className='tc'>
            <Card id={robot.id} name={robot.name} email={robot.email} />
            <Link href='/'>
                <button className="pointer">Home</button>
            </Link>
        </div>
    );
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await response.json();

    const paths = robots.map(robot => {
        return {
            params: {
                id: robot.id.toString()
            }
        };
    });

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await response.json();
    const robot = robots.find(robot => robot.id.toString() === params.id);

    return {
        props: {
            robot
        }
    };
}

export default Robot;