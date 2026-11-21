import { Head } from '@inertiajs/react';

export default function Contact() {
    return (
        <>
            <Head title="Kontak" />
            <main className="p-6 space-y-2">
                <h1 className="text-2xl font-bold">Kontak</h1>
                <p>Email: info@badmintonarena.com</p>
                <p>Telepon: 0812-3456-7890</p>
                <p>Alamat: Jl. Olahraga No. 1</p>
            </main>
        </>
    );
}