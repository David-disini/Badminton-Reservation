import { Head } from '@inertiajs/react';

export default function Facilities() {
    return (
        <>
            <Head title="Fasilitas" />
            <main className="p-6 space-y-4">
                <h1 className="text-2xl font-bold">Fasilitas</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded p-4"><h3 className="font-semibold">Lapangan 1</h3><p>Indoor, AC</p></div>
                    <div className="border rounded p-4"><h3 className="font-semibold">Lapangan 2</h3><p>Indoor, AC</p></div>
                    <div className="border rounded p-4"><h3 className="font-semibold">Parkir</h3><p>Luas &amp; aman</p></div>
                    <div className="border rounded p-4"><h3 className="font-semibold">Kantin</h3><p>Makanan &amp; minuman</p></div>
                </div>
            </main>
        </>
    );
}