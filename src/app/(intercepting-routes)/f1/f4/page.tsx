import Link from "next/link";

function F4() {
    return (
        <div>
            F4 folder
            <div>
                <Link href='/f1/f3'>Go back to F3 Folder</Link>
                <Link href='/about'>About section</Link>
            </div>
        </div>
    );
}

export default F4;