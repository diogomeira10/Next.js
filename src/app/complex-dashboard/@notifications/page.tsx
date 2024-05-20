import Card from "@/components/card";
import Link from "next/link";

function Notifications() {
    return (
        <Card>
            <div>Notifications Card</div>
            <Link href='/complex-dashboard/archived'>Archived</Link>
        </Card>
    );
}

export default Notifications;
