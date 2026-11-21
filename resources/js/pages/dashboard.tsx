import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard Admin" />
            <main className="p-6 space-y-4">
                <h1 className="text-2xl font-bold">Dashboard Admin</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded p-4">Total Booking: 12</div>
                    <div className="border rounded p-4">Lapangan: 2</div>
                    <div className="border rounded p-4">Pengguna: 8</div>
                </div>
            </main>
        </>
    );
}