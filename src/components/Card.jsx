import Image from "next/image";
import Link from 'next/link';

const Card = ({id, name, email}) => {
    return (
        <Link href={`/robot/${id}`}>
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5 pointer'>
                <Image alt='robots' src={`https://robohash.org/${id}?200x200`} width="300" height={300} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;