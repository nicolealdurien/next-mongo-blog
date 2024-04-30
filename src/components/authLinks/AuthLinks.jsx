import styles from './authLinks.module.css';
import Link from 'next/link';
//timestamp 28:10
const AuthLinks = () => {
    //temporary
    const status = "notauthenticated"
    return (
        <>
            {status === "notauthenticated" 
            ? <Link href='/login'>Login</Link>
            : ( 
                <>
                    <Link href='/write'>Write</Link>
                    <span>Logout</span>
                </>
            )}
        </>
    );
    
};

export { AuthLinks };