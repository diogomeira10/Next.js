import Link from "next/link";

function F1() {
    return (
        <div>
            <div>F1 Folder</div>
            <Link href='/f1/f2'>F2 Folder</Link>
        </div>
    );
}

export default F1;