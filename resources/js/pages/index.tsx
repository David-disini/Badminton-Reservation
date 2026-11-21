import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="Badminton Reservation" />
            <header className="bg-green-700 text-white p-4">
                <h1 className="text-2xl font-bold">Badminton Arena</h1>
            </header>
            <main className="p-6 space-y-8">
                <section>
                    <h2 className="text-xl font-semibold">Selamat Datang</h2>
                    <p>Booking lapangan badminton mudah dan cepat.</p>
                </section>
                <section>
                    <h2 className="text-xl font-semibold">Fasilitas</h2>
                    <ul className="list-disc pl-6">
                        <li>Lapangan indoor AC</li>
                        <li>Parkir luas</li>
                        <li>Kantin &amp; shower</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-xl font-semibold">Galeri</h2>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-200 h-24 rounded" />
                        <div className="bg-gray-200 h-24 rounded" />
                        <div className="bg-gray-200 h-24 rounded" />
                    </div>
                </section>
                <section className="bg-green-100 p-4 rounded">
                    <h2 className="text-xl font-semibold">Booking Sekarang</h2>
                    <a href="/booking" className="bg-green-700 text-white px-4 py-2 rounded inline-block mt-2">Pesan Lapangan</a>
                </section>
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">© 2026 Badminton Arena</footer>
        </>
    );
}