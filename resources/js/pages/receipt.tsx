import { Head } from '@inertiajs/react';

export default function Receipt() {
    return (
        <>
            <Head title="Struk" />
            <main className="p-6 space-y-2">
                <h1 className="text-2xl font-bold">Struk Booking</h1>
                <p>Lapangan: Lapangan 1</p>
                <p>Tanggal: 2026-11-21</p>
                <p>Jam: 10:00</p>
                <p>Total: Rp 100.000</p>
            </main>
        </>
    );
}