import { Head } from '@inertiajs/react';

export default function Auth() {
    return (
        <>
            <Head title="Login" />
            <main className="p-6 max-w-md mx-auto space-y-3">
                <h1 className="text-2xl font-bold">Login</h1>
                <input className="border p-2 w-full" placeholder="Email" />
                <input type="password" className="border p-2 w-full" placeholder="Password" />
                <button className="bg-green-700 text-white px-4 py-2 rounded w-full">Masuk</button>
            </main>
        </>
    );
}