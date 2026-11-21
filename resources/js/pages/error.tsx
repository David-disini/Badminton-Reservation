import { Head } from '@inertiajs/react';

export default function ErrorPage() {
    return (
        <>
            <Head title="Error" />
            <main className="p-6 text-center">
                <h1 className="text-4xl font-bold text-red-600">404</h1>
                <p>Halaman tidak ditemukan.</p>
            </main>
        </>
    );
}