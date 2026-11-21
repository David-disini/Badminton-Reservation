import { Head } from '@inertiajs/react';

export default function Booking() {
    return (
        <>
            <Head title="Booking" />
            <main className="p-6 space-y-4">
                <h1 className="text-2xl font-bold">Booking Lapangan</h1>
                <form className="space-y-3 max-w-md">
                    <input className="border p-2 w-full" placeholder="Nama" />
                    <select className="border p-2 w-full"><option>Lapangan 1</option><option>Lapangan 2</option></select>
                    <input type="date" className="border p-2 w-full" />
                    <input type="time" className="border p-2 w-full" />
                    <button className="bg-green-700 text-white px-4 py-2 rounded">Pesan</button>
                </form>
            </main>
        </>
    );
}