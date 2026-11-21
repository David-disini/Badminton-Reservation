import { Head } from '@inertiajs/react';

export default function Profile() {
    return (
        <>
            <Head title="Profil" />
            <main className="p-6 space-y-2">
                <h1 className="text-2xl font-bold">Profil</h1>
                <p>Nama: Pengguna</p>
                <p>Email: user@example.com</p>
            </main>
        </>
    );
}